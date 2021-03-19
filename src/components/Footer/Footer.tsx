import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__main'>
        <nav className='footer__links'>
          <NavLink
            replace
            exact
            to='/about'
            className='footer__link'
            activeClassName='is-active'
          >
            About
          </NavLink>
          <NavLink
            replace
            exact
            to='/library'
            className='footer__link'
            activeClassName='is-active'
          >
            Library
          </NavLink>
          <NavLink
            replace
            exact
            to='/download'
            className='footer__link'
            activeClassName='is-active'
          >
            Download
          </NavLink>
        </nav>

        <div className='footer__social'>
          <h6>CSS Shapes developed by Liam Snowdon</h6>

          <div className='footer__social-links'>
            <a
              href='https://www.linkedin.com/in/liam-snowdon/'
              target='_blank'
              rel='noreferrer'
              className='footer__social-link'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href='https://github.com/liamsnowdon'
              target='_blank'
              rel='noreferrer'
              className='footer__social-link'
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
