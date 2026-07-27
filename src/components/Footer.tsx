import React, {ReactElement} from 'react'
import allOffices, {IOffice} from '../allOffices'
import '../Styles/footer.css'
import greenwave from '../images/greenwave.png'
import vk from '../images/vk.png'

export default function Footer(){
	return(
		<footer className='footer'>
			<div className='footer__partners'>
		   		<h3>Наши партнеры:</h3>
		   	   	<div>
		   	      <p><a href='http://greenw.org/' target='_blank' rel="noopener noreferrer"><img src={greenwave} alt="greenwave" title="greenwave"/></a></p>
		   	      <p>Загородная балка,4</p>
		   	      <p>
		   	        тел. +7 (8692) 55-40-24<br/>
		   	        тел: +7 (8692) 55-98-90
		   	     </p>
		   	   </div>
		   </div>
		   	<div className="footer__contacts">
				<h3>Адреса и контакты:</h3>
				{allOffices.map((office: IOffice, ) :ReactElement => <div key={office.id}>
					<p>{office.header}</p>
					<p>{office.address}</p>
					<p>Телефон: {office.phone}</p>
					{office.email ? <p>Email: {office.email}</p> : null}
				</div>)}
      		</div>
      		<div className="footer__socials">
   				<h3>Социальные сети:</h3>
   	   			<p><a href='https://vk.com/cdlanaliz' target='_blank' rel="noopener noreferrer"><img src={vk} alt="vk" title="vk"/></a></p>
   			</div>
		</footer>
	)
}
