import React from 'react';
import './Footer.css';

export default function Footer() {
	return (
		<footer className="footer p-2">   
            <hr className='hr-footer'/>             
            <div className="footer-text">
                 <a href="https://github.com/Domka-Mor">
                    Copyright &copy; Dominika Moravičová <span/>& <span/>
                </a> 
                <a href="https://www.behance.net/gallery/151727121/My-Precious">
                    Matt Velvet Design
                </a> 
            </div>
        </footer>
	)
}