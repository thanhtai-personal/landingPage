import  HomeContainer from '../containers/home'
import  LoginContainer from '../containers/login'
import  RegisterContainer from '../containers/register'
import setUpFeature from '../setup'
import { IAppRoute } from 'root/managers/appRoute/interfaces'

const blockChainRoutes: Array<IAppRoute> = [
  {
    key: 'home',
    path: '/',
    isExact: true,
    component: HomeContainer,
    hocs: ['useHeader', 'useFooter', 'useMultiThemes'],
    setUpStore: setUpFeature,
    childrenRoute: []
  },
  {
    key: 'register',
    path: '/register',
    isExact: true,
    component: LoginContainer,
    hocs: ['useHeader', 'useMultiThemes'],
    setUpStore: setUpFeature,
    childrenRoute: []
  },
  {
    key: 'login',
    path: '/login',
    isExact: true,
    component: RegisterContainer,
    hocs: ['useHeader', 'useMultiThemes'],
    setUpStore: setUpFeature,
    childrenRoute: []
  }
]

export default blockChainRoutes