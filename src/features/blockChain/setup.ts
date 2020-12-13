import StoreSingleton from 'root/store/singleton'
import homeReducer from './reducers/home.reducer'
import { RouteGroups } from 'root/appRoute/enums'


const setupFeature = () => {
  const store = StoreSingleton.getInstance()
  let mapObject = store.reducerManager.getReducerMap()
  if (!Object.keys(mapObject).includes(RouteGroups.blockChainGames)) {
    store.reducerManager.add(RouteGroups.blockChainGames, homeReducer)
    store.updateReducer()
  }
}

export default setupFeature