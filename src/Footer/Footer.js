import './Footer.css';
import logo from '../assets/logo.png';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className='footer'>
			<nav>
				<ul className='footer-ul'>
					<li>Home</li>
					<li>Cards</li>
					<li>Create Card</li>
					<li>About</li>
				</ul>
				<img src={logo} alt='cards logo' />
				<div className='contact'>
					<p>Follow on</p>
					<a
						href='https://github.com/ivaylokarafeizov'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithub className='github-icon' />
					</a>
				</div>
			</nav>
		</footer>
	);
}
