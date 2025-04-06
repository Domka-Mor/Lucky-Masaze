import React from 'react';
import './Loader.css';
import {Link as Link1} from "react-scroll";
import image6 from '../../images/image6.webp';

export default function Loader() {
	return (
		<div className='body-loader'>
			<div className='body-text-loader'>
				<h4>Profesionálna masáž celého tela</h4>
				<p>Bolí Vás chrbát? Máte sedavé alebo namáhavé zamestnanie?<br/>Ste unavený a v strese?</p>
				<p>Doprajte si klasickú, reflexnú alebo inú masáž z našej ponuky, ktorá pomôže<br/> uvoľniť stuhnuté a bolestivé svalstvo na celom tele.</p>
				<p>Zbavte sa bolesti a stresu v príjemnom prostredí s profesionálnym masérom<br/> a príďte si oddýchnuť.</p>
				<Link1
					activeClass="active"
					to="pictures"
					spy={true}
					smooth={true}
					offset={0}
					duration= {1000}>
					<button type="button" className="btn">Viac info</button>
				</Link1>
			</div>
			<img src={image6} alt='image6'/>
		</div>
	)
}