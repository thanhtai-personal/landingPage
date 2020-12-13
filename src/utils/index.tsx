import React, { useState, useEffect, Suspense } from 'react'
import Loading from 'root/components/loading'
import { Zoom } from '@material-ui/core'
import { useCallback } from 'react'


export const makeSingleton = (makeInstantFunc: Function, param1: any, param2: any) => {
    return (function () {
        var instance: any
        return {
            getInstance: function () {
                // check if instance is available
                if (!instance) {
                    instance = makeInstantFunc(param1, param2)
                    delete instance.constructor // or set it to null
                }
                return instance
            }
        }
    })()
}

export const makeSuspenseComponent = (WrappedComponent: React.FC) => {
    const SuspenseComponent: React.FC<any> = (props: any) => {
        return (
            <Suspense fallback={<Loading />}>
                <WrappedComponent {...props}/>
            </Suspense>
        )
    }
    return SuspenseComponent
}

export const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    const windowWidth = window.innerWidth || document.documentElement.clientWidth
    const rectBottom = rect.top + rect.height, rectRight = rect.left + rect.width
    const isVerticalInView = (rect.top > 0 && rect.top <= windowHeight)
        || (rect.top < 0 && rectBottom > 0)
    const isHorizonalInView = (rect.left > 0 && rect.left < windowWidth)
        || (rect.left < 0 && rectRight > 0)
    return (isVerticalInView && isHorizonalInView)
}

export const useLazyLoadSection = (WrappedComponent: React.FC, { elementId, width = '100%', height = '200px' }: any) => {
    const LazyLoadComponent = (props: any) => {
        const [isLoaded, setIsLoaded] = useState(false)
        const handleScroll = useCallback(() => {
            const sectionElement = document.getElementById(elementId)
            if (!isLoaded && sectionElement && isElementInViewport(sectionElement)) {
                setTimeout(() => {
                    setIsLoaded(true)
                }, 200)
            }
        }, [isLoaded])

        useEffect(() => {
            handleScroll()
            window.addEventListener('scroll', handleScroll)
            return () => { window.removeEventListener('scroll', handleScroll) }
            // for componentDidMount
            // eslint-disable-next-line
        }, [])
        return isLoaded ? <Zoom in={isLoaded} timeout={{ enter: 200, appear: 500 }}>
            <WrappedComponent {...props} />
        </Zoom>
            : <div id={elementId} style={{
                width, height, backgroundColor: 'white'
            }}></div>
    }
    return LazyLoadComponent
}

export const useLazyLoadImage = (WrappedComponent: React.FC, elementId: string) => {
    const LazyLoadImage = (props: any) => {
        const [loaded, setLoaded] = useState(false)
        let imgElm = document.getElementById(elementId)

        const handleScroll = useCallback(() => {
            if (!imgElm) return
            if (!loaded && isElementInViewport(imgElm)) {
                // Load real image
                const imgLoader = new Image()
                imgLoader.src = props.src
                imgLoader.onload = () => {
                    const ratioWH = imgLoader.width / imgLoader.height
                    imgElm?.setAttribute(
                        `src`,
                        `${props.src}`
                    )
                    props.keepRatio && imgElm?.setAttribute(
                        `height`,
                        `${props.width / ratioWH}`
                    )
                    imgElm?.classList.add(`${props.effect}`)
                    setLoaded(true)
                }
            }
        }, [props.src, props.keepRatio, props.effect, imgElm, props.width, loaded])

        useEffect(() => {
            handleScroll()
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
            // for componentDidMount
            //eslint-disable-next-line
        }, [])
        const { id, ...nestedProps } = props
        return (
            <WrappedComponent id={elementId} {...nestedProps} />
        )
    }

    return LazyLoadImage
}