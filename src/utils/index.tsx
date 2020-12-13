import React, { Suspense } from 'react'
import Loading from 'root/components/loading'

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