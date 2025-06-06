import React,{useState} from 'react';
import {Link as Link1} from "react-scroll";
import './Navbar.css';
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import phone from '../../images/phone.png';

export default function Navbar() {

	const [open,setOpen] = useState(false)

	const handleToggle = () => {
		setOpen(!open)
	}


	return (
		<>
			<div className="d-none d-lg-flex navbarAb">
				<ul className='nav1'>
					<img src={logo} className='logo' alt='logo'/>
					<div className='nav-text'>
						<Link1
							onClick={handleToggle}
							activeClass="active"
							to="sluzby"
							spy={true}
							smooth={true}
							offset={0}
							duration= {1000}>
							<li>Služby</li>
						</Link1>
						<Link1
							onClick={handleToggle}
							activeClass="active"
							to="kontakt"
							spy={true}
							smooth={true}
							offset={0}
							duration= {1000}>
							<li>Kontakt</li>
						</Link1>
						<Link1
							onClick={handleToggle}
							activeClass="active"
							to="onas"
							spy={true}
							smooth={true}
							offset={0}
							duration= {1000}>
							<li>O nás</li>
						</Link1>
					</div>
					<button type="button" className='nav-icon'>
						<Link1
							onClick={handleToggle}
							activeClass="active"
							to="kontakt"
							spy={true}
							smooth={true}
							offset={0}
							duration= {1000}>							
							<img src={phone} alt='phone'/>
						</Link1>
					</button>
					<hr className='hr1'/>
				</ul>
				<ul className='nav2'>
					<button type="button" className="btn-nav">
						<div className='svg-icons'>
							<a href='https://www.facebook.com/p/Kadern%C3%ADctvo-Kozmetika-Golden-HANDS-100063763621641/?locale=sk_SK'>
								<img src={facebook} alt='facebook'/>
							</a>
							<a href='https://www.instagram.com/dokyluk/?igsh=N3Nrajc4aWdhZ3Nr#'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>						
							</a>
						</div>
					</button>
					<hr className='hr2'/>
				</ul>
		  	</div>

		  	<div className= 'd-lg-none py-3'>
	      		<nav className="container-fluid nav-min fixed-top">
	                <div className='row'>
						<button type='button' className='nav-btn' onClick={handleToggle}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
						</button>
						<div className='svg-icons2'>
							<a href='https://www.facebook.com/p/Kadern%C3%ADctvo-Kozmetika-Golden-HANDS-100063763621641/?locale=sk_SK'>
								<img src={facebook} alt='facebook'/>
							</a>
							<a href='https://www.instagram.com/dokyluk/?igsh=N3Nrajc4aWdhZ3Nr#'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>						
							</a>
						</div>
	                </div>
	                <div className='pt-2'>	
	                	<ul className={open?
							'nav-links show-nav':'nav-min nav-links1'}>	         
			    			<Link1
			    				onClick={handleToggle}
								activeClass="active"
								to="sluzby"
								spy={true}
								smooth={true}
								offset={0}
								duration= {1000}>
								<li>Služby</li>
							</Link1>
							<Link1
								onClick={handleToggle}
								activeClass="active"
								to="kontakt"
								spy={true}
								smooth={true}
								offset={0}
								duration= {1000}>
								<li>Kontakt</li>
							</Link1>
							<Link1
								onClick={handleToggle}
								activeClass="active"
								to="onas"
								spy={true}
								smooth={true}
								offset={0}
								duration= {1000}>
								<li>O nás</li>
							</Link1>
						</ul>
	            	</div>
	   	 		</nav>
			</div>
	  	</>
	)
}