import React from 'react';
import Logo from '../images/Logo.svg';

function Header() {
  return (
		<header className='header'>
			<img className='header__logo' src={Logo} alt='Логотип Mesto' />
		</header>
	);
}

export default Header;
