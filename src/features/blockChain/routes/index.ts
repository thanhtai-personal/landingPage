import LandingPageContainer from '../containers/home'
import setUpFeature from '../setup'
import { IAppRoute } from 'root/managers/appRoute/interfaces'

const blockChainRoutes: Array<IAppRoute> = [
  {
    key: 'landingPage',
    path: '/',
    isExact: true,
    component: LandingPageContainer,
    hocs: ['useHeader', 'useFooter', 'useMultiThemes'],
    setUpStore: setUpFeature,
    childrenRoute: []
  }
]

export default blockChainRoutes