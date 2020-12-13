import React from 'react'
import { Router, Route, Switch } from 'react-router'

import appRouteSingleton from 'root/managers/appRoute/singleton'
import blockChainRoutes from 'root/features/blockChain/routes'
import { RouteGroups } from './enums'

const appRouteManager = appRouteSingleton.getInstance()

function AppRoute () {
  appRouteManager.add(RouteGroups.blockChainGames, blockChainRoutes)
  return (
    <> { /* your usual react-router v4/v5 routing */}
      <Switch>
        {appRouteManager.reduce()}
        <Route render={() => (<div>Route not found!</div>)} />
      </Switch>
    </>
  )
}

export default AppRoute