import React from 'react';
import './Poster.css';
import image5 from '../../images/image5.png';
import image7 from '../../images/image7.jpg';


export default function Poster() {
	return (
		<>
			<div className='body-poster sluzby'>
				<div className='poster-images'>
					<img src={image5} id='img1' alt='image5'/>
					<img src={image7} id='img2' alt='image7'/>
				</div>
			</div>
			<div className='bgr-change'>
				<hr className='hr-poster'/>
			</div>
		</>
	)
}