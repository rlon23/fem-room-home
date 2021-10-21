import './Navbar.scss';
import logo from './../../images/logo.svg';
import hamburger from './../../images/icon-hamburger.svg';
import close from './../../images/icon-close.svg';
import React, { useState } from 'react';

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const bodyEl = document.body;

  return (
    <nav className='Navbar'>
      <div className='Navbar__mobile'>
        <a href='#home'>
          <img
            src={hamburger}
            className='Navbar__mobile-toggle'
            alt='mobile-menu-toggle'
            onClick={() => {
              setIsMobileOpen(true);
              bodyEl.style.overflow = 'hidden';
            }}
          />
        </a>
        <img src={logo} className='Navbar__logo' alt='logo' />
      </div>

      <div
        className={`${
          isMobileOpen ? 'Navbar__mobile-menu open' : 'Navbar__mobile-menu'
        }`}
      >
        <ul className='Navbar__links'>
          <img
            src={close}
            alt=''
            className='close-mobile-menu'
            onClick={() => {
              setIsMobileOpen(false);
              bodyEl.style.overflow = 'auto';
            }}
          />
          <li>
            <a href='#home' className='Navbar__link'>
              home
            </a>
          </li>
          <li>
            <a href='#shop' className='Navbar__link'>
              shop
            </a>
          </li>
          <li>
            <a href='#about' className='Navbar__link'>
              about
            </a>
          </li>
          <li>
            <a href='#contact' className='Navbar__link'>
              contact
            </a>
          </li>
        </ul>
      </div>

      <div className='Navbar__desktop'>
        <ul className='Navbar__links'>
          <img
            src={logo}
            alt='room'
            className='logo'
          />
          <li>
            <a href='#home' className='Navbar__link'>
              home
            </a>
          </li>
          <li>
            <a href='#shop' className='Navbar__link'>
              shop
            </a>
          </li>
          <li>
            <a href='#about' className='Navbar__link'>
              about
            </a>
          </li>
          <li>
            <a href='#contact' className='Navbar__link'>
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
