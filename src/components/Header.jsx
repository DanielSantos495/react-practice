import React from 'react';

import '../assets/styles/components/Header.scss';

const profile = 'Perfil';
const account = 'Cuenta';
const closeSession = 'Cerrar sesión';
const altUser = 'User';
const altLogo = 'Platzi video';

const Header = () => (

  <header className='header'>
    <img className='header__img' src='../assets/logoplatzi.png' alt={altLogo} />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='../assets/user.svg' alt={altUser} />
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

