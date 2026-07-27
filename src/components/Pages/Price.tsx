import React, {Fragment} from 'react'
import Search from '../Search.js'
import AnalysisSubdivisionsGroup from '../AnalysisSubdivisionsGroup.js'
import IPage from "./IPage"

const Price: IPage = {
	name: 'Анализы и цены',
	url: '/price',
	element: <Fragment>
		<Search/>
		<AnalysisSubdivisionsGroup/>
	</Fragment>
}

export default Price