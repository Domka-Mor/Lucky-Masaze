import React from 'react';
import './Pictures.css';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image1 from '../../images/image1.jpg';

export default function Pictures() {
	return (
		<div className='body-pictures pictures'>
			<div className='body-text-pictures'>
				<h1>Príjemné prostredie</h1>
				<h2>Tešíme sa na Vašu návštevu</h2>
			</div>
			<div className='body-div-pictures1'>
				<img src={image2} alt='image2'/>
				<img src={image3} alt='image3'/>
			</div>
			<div className='body-div-pictures2'>
				<img src={image1} alt='image1'/>
			</div>
		</div>
	)
}