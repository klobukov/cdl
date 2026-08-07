import PageContent from '../../pages/PageContent'
import { Fragment } from 'react'
import Search from './Search/Search'
import AnalysisSubdivisionsGroup from './AnalysisSubdivisionsGroup'

export default () =>
  PageContent(
    <Fragment>
      <Search />
      <AnalysisSubdivisionsGroup />
    </Fragment>,
  )
