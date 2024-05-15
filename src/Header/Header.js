import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

export default function Header() {
	return (
		<header className='header'>
			<nav className='header-nav'>
				<h1 className='logo-h1'>
					<img src={logo} alt='flash cards logo' />
					<span>MindFlip</span>
				</h1>
				<ul>
					<li>Home</li>
					<li>Cards</li>
					<li>Create Card</li>
					<li>About</li>
				</ul>
			</nav>
		</header>
	);
}
