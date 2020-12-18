import HomeContainer from '../containers/home'
import LoginContainer from '../containers/login'
import RegisterContainer from '../containers/register'
import ForgotPassContainer from '../containers/forgotPass'
import setUpFeature from '../setup'
import { IAppRoute } from 'root/managers/appRoute/interfaces'

const blockChainRoutes: Array<IAppRoute> = [
  {
    key: 'home',
    path: '/',
    isExact: true,
    component: HomeContainer,
    hocs: [{ key: 'useHeader', params: [] }, { key: 'useFooter', params: [] }
    , { key: 'useDocumentTitle', params: [] }, { key: 'useMultiThemes', params: [] }],
    setUpStore: setUpFeature,
    childrenRoute: []
  },
  {
    key: 'homePage',
    path: '/home',
    isExact: true,
    component: HomeContainer,
    hocs: [{ key: 'useHeader', params: [] }, { key: 'useFooter', params: [] }
    , { key: 'useDocumentTitle', params: [] }, { key: 'useMultiThemes', params: [] }],
    setUpStore: setUpFeature,
    childrenRoute: []
  },
  {
    key: 'register',
    path: '/registration',
    isExact: true,
    component: RegisterContainer,
    hocs: [{ key: 'useHeader', params: [true] }, { key: 'useDocumentTitle', params: [] }, { key: 'useMultiThemes', params: [] }],
    setUpStore: setUpFeature,
    childrenRoute: []
  },
  {
    key: 'login',
    path: '/login',
    isExact: true,
    component: LoginContainer,
    hocs: [{ key: 'useHeader', params: [true] }, { key: 'useDocumentTitle', params: [] }, { key: 'useMultiThemes', params: [] }],
    setUpStore: setUpFeature,
    childrenRoute: []
  },
  {
    key: 'forgotPasword',
    path: '/forgot-password',
    isExact: true,
    component: ForgotPassContainer,
    hocs: [{ key: 'useHeader', params: [true] }, { key: 'useMultiThemes', params: [] }],
    setUpStore: setUpFeature,
    childrenRoute: []
  }
]

export default blockChainRoutes