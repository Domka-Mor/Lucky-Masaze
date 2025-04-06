import React from 'react';
import './Main.css';
import Loader from '../../components/Loader/Loader';
import Info from '../../components/Info/Info';
import Pictures from '../../components/Pictures/Pictures';
import Reservation from '../../components/Reservation/Reservation';
import Poster from '../../components/Poster/Poster';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollUpButton from "react-scroll-up-button";

export default function Main() {
	return (
		<div className='body-main'>
			<Navbar/>
			<Loader/>
			<Info/>
			<Pictures/>
			<Reservation/>
			<Poster/>
			<ScrollUpButton 
				StopPosition={0}
      			ShowAtPosition={150}
      			EasingType='easeOutCubic'
      			AnimationDuration={500}
				style={{background: 'transparent', outline:'none', fill:'#af9a7d'}}
			/>
			<Footer/>
		</div>
	)
}