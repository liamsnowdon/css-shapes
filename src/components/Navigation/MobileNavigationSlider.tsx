import React from 'react';
import { NavLink } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './MobileNavigationSlider.scss';

import { ButtonLink } from '../Button/Button';
import Logo from '../Logo/Logo';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = (props) => {
  return (
    <>
      <div
        className={`mobile-navigation-overlay ${
          props.isOpen ? 'is-active' : ''
        }`}
      />

      <nav className={`mobile-navigation ${props.isOpen ? 'is-active' : ''}`}>
        <div className='mobile-navigation__header'>
          <Logo />

          <button
            className='mobile-navigation__cross hamburger hamburger--slider is-active'
            type='button'
            onClick={props.onClose}
          >
            <span className='hamburger-box'>
              <span className='hamburger-inner'></span>
            </span>
          </button>
        </div>

        <ul className='mobile-navigation__items'>
          <li className='mobile-navigation__item'>
            <NavLink
              replace
              exact
              to='/about'
              className='mobile-navigation__link'
              activeClassName='is-active'
              onClick={props.onClose}
            >
              About
            </NavLink>
          </li>

          <li className='mobile-navigation__item'>
            <NavLink
              replace
              exact
              to='/library'
              className='mobile-navigation__link'
              activeClassName='is-active'
              onClick={props.onClose}
            >
              Library
            </NavLink>
          </li>

          <li className='mobile-navigation__item'>
            <NavLink
              replace
              exact
              to='/download'
              className='mobile-navigation__link'
              activeClassName='is-active'
              onClick={props.onClose}
            >
              Download
            </NavLink>
          </li>
        </ul>

        <hr className='mobile-navigation__separator'></hr>

        <div className='mobile-navigation__buttons'>
          <ButtonLink
            text='View on GitHub'
            url='https://github.com/liamsnowdon/css-shapes'
            target='_blank'
            faIcon={faGithub}
            faIconSize='2x'
          />
        </div>
      </nav>
    </>
  );
};

export default MobileNavigation;
