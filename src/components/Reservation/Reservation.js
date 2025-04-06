import React from 'react';
import './Reservation.css';
import banner from '../../images/banner.jpg';


export default function Reservation() {
	return (
		<div className='body-reservation kontakt'>
			<hr className='hr-reservation'/>
			<div className='body-img-reservation'>
				<img src={banner} alt='banner'/>
				<div className='body-img-reservation-text'>
					<h1>Rezervácia</h1>
					<button type="button" className="btn-reservation">+421 915 826 236</button>
				</div>
			</div>
			<div className='body-banner-reservation'>
				<ul className='body-banner-reservation-ul'>			
					<div className='ul-text'>
						<hr className='hr-ul'/>
						<li className='topic'>ADRESA</li>
						<li>Hronská 10</li>
						<li>040 11 Košice</li>
					</div>							
					<div className='ul-text'>
						<hr className='hr-ul'/>
						<li className='topic'>KONTAKT</li>
						<li>+421 915 826 236</li>
					</div>	
					<div className='ul-text'>
						<hr className='hr-ul'/>
						<li className='topic'>OBJEDNÁVKY</li>
						<li>Iba telefonicky</li>
					</div>			
				</ul>
			</div>
		</div>
	)
}