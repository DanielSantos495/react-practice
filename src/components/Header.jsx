import React from 'react';

// Así importamos una imagen con webpack
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/components/Header.scss';

const profile = 'Perfil';
const account = 'Cuenta';
const closeSession = 'Cerrar sesión';
const altUser = 'User';
const altLogo = 'Platzi video';

const Header = () => (

  <header className='header'>
    <img className='header__img' src={logo} alt={altLogo} />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt={altUser} />
        <p>{profile}</p>
      </div>
      <ul>
        <li>
          <a href='/'>{account}</a>
        </li>
        <li>
          <a href='/'>{closeSession}</a>
        </li>
      </ul>
    </div>
  </header>

);

export default Header;

