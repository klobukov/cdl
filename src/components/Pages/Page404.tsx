import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../../Styles/page404.scss'
import logo from '../../images/logo.jpg'
import IPage from './IPage'

const url = "*"

const Page404: IPage = {
	name: 'Page404',
	url: url,
	element: <Page404Content />,
	customElement: true
}

function Page404Content() {
	const location = useLocation()
	const url = location.pathname
	return <div className="page404">
		<Link to="/"><img src={logo} title="logo" alt="logo"/></Link>
		<h1>По адресу <i>{url}</i> ничего не найдено. Попробуйте начать с главной страницы</h1>
		<Link to="/">Главная страница</Link>
	</div>
}

export default Page404