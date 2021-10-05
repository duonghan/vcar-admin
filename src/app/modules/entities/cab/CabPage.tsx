import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../_metronic/layout/core'
import { CabListPage } from './components/CabListPage'

const cabBreadCrumbs: Array<PageLink> = [
  {
    title: 'Cab List',
    path: '/cab',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const CabPage: React.FC = () => {
  return(
    <Switch>
      <Route path="/cab/list">
        <PageTitle breadcrumbs={cabBreadCrumbs}>Cab List</PageTitle>
        <CabListPage />
      </Route>
      <Route path="/cab/detail">
        <PageTitle breadcrumbs={cabBreadCrumbs}>Cab Detail</PageTitle>
        <CabListPage />
      </Route>
      <Redirect from='/cab' exact={true} to='/cab/list' />
      <Redirect to='/cab/list' />
    </Switch>
  )
}

export {CabPage}
