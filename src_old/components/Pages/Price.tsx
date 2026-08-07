import React, { Fragment } from 'react'
import Search from '../Search'
import AnalysisSubdivisionsGroup from '../AnalysisSubdivisionsGroup'
import IPage from './IPage'

const Price: IPage = {
  name: 'Анализы и цены',
  url: '/',
  element: (
    <Fragment>
      <Search />
      <AnalysisSubdivisionsGroup />
    </Fragment>
  ),
}

export default Price
