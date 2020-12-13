import React from 'react'
import { connect } from 'react-redux'
import { IHomeContainerProps } from './interfaces'
import { makeSuspenseComponent } from 'root/utils'

const HomeComponent = React.lazy(() => import('./../components/home'))
const Home = makeSuspenseComponent(HomeComponent)

const HomeContainer: React.FC<IHomeContainerProps> = (props: IHomeContainerProps) => {
    return <Home {...props} />
}

const mapStateToProps = (state: any) => ({

})

const mapProps = {}

export default connect(mapStateToProps, mapProps)(HomeContainer)