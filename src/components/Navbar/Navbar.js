import './Navbar.scss';
import logo from './../../images/logo.svg';
import hamburger from './../../images/icon-hamburger.svg';
import close from './../../images/icon-close.svg';

function Navbar() {
  return (
    <nav className='Navbar'>
      <div className='Navbar__mobile'>
        <img
          src={hamburger}
          className='Navbar__mobile-toggle'
          alt='mobile-menu-toggle'
        />
        <img src={logo} className='Navbar__logo' alt='logo' />
      </div>
      <div className='Navbar__mobile-menu'>
        <ul className='Navbar__links'>
          <img src={close} alt='' className='close-mobile-menu' />
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
