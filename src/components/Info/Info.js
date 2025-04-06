import React from 'react';
import './Info.css';
import image4 from '../../images/image4.webp';

export default function Info() {
	return (
		<div className='body-info onas'>
			<div className='body-text-info'>
				<h1>Nový masér <br/></h1>
				<hr className='hr3'/>
				<h1>V salóne <br/>Golden <br/>Hands</h1>
				<p>Problémy s pohybovým aparátom v<br/> dnešnej dobe patria medzi <br/>najrozšírenejšie civilizačné<br/> ochorenia.</p>
			</div>
			<img src={image4} alt='image4'/>
		</div>
	)
}