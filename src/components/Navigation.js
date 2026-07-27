import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../Styles/navigation.css'
import Price from './Pages/Price'
import Contacts from './Pages/Contacts'
import Politics from "./Pages/Politics"

export default function Navigation(){
	const baseClassName = 'navigation__tab'
	const activeClassName = baseClassName + ' navigation__active'
	const pagesArr = [Price, Contacts, Politics]
	const location = useLocation()

	function getLinks(arr){
		return arr.map((item, index) => {
			return(
				<Link
					key={index}
					to={item.url}
					className={location.pathname === item.url ? activeClassName : baseClassName}>
					{item.name}
				</Link>
			)
		})
	}

	return(
		<nav className="navigation">
			{getLinks(pagesArr)}
		</nav>
	)
}
