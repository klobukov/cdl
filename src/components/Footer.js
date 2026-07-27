import React from 'react';
import allOffices from '../allOffices.ts';
import '../Styles/footer.css';
import greenwave from '../images/greenwave.png';
import vk from '../images/vk.png';

export default function Footer(){

	function getContacts(arr){
		return arr.map((item, index) => {
			return(
				<div key={index}>
					<p>{item.header}</p>
					<p>{item.address}</p>
					<p>Телефон: {item.phone}</p>
					{item.email ? <p>Email: {item.email}</p> : null}
				</div>
			)
		});
	}

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
				{getContacts(allOffices)}
      		</div>
      		<div className="footer__socials">
   				<h3>Социальные сети:</h3>
   	   			<p><a href='https://vk.com/cdlanaliz' target='_blank' rel="noopener noreferrer"><img src={vk} alt="vk" title="vk"/></a></p>
   			</div>
		</footer>
	)
}
