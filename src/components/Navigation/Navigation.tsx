import React from 'react';
import { NavLink } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { ButtonLink } from '../Button/Button';

import Logo from '../Logo/Logo';

import './Hamburgers.css';
import './Navigation.scss';

interface NavigationProps {
  onHamburgerClick: () => void;
  mobileNavOpen: boolean;
}

const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <>
      <nav className='navigation'>
        <NavLink replace to='/library' className='navigation__logo'>
          <Logo />
        </NavLink>

        <div className='navigation__main'>
          <NavLink
            replace
            exact
            to='/about'
            className='navigation__link'
            activeClassName='is-active'
          >
            About
          </NavLink>
          <NavLink
            replace
            to='/library'
            className='navigation__link'
            activeClassName='is-active'
          >
            Library
          </NavLink>
          <NavLink
            replace
            exact
            to='/download'
            className='navigation__link'
            activeClassName='is-active'
          >
            Download
          </NavLink>
        </div>

        <div className='navigation__right'>
          <ButtonLink
            text='View on GitHub'
            url='https://github.com/liamsnowdon/css-shapes'
            target='_blank'
            faIcon={faGithub}
            faIconSize='2x'
          />
        </div>

        <div className='navigation__hamburger'>
          <button
            className={`hamburger hamburger--slider ${
              props.mobileNavOpen ? 'is-active' : ''
            }`}
            type='button'
            onClick={props.onHamburgerClick}
          >
            <span className='hamburger-box'>
              <span className='hamburger-inner'></span>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
