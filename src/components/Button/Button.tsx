import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Button.scss';

interface ButtonRouterLinkProps {
  text: string;
  to: string;
  faIcon?: any;
  faIconSize?: string;
  className?: string;
}
interface ButtonLinkProps {
  text: string;
  url: string;
  target?: '_self' | '_blank';
  faIcon?: any;
  faIconSize?: string;
  className?: string;
}

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`button ${props.className ? props.className : ''}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export const ButtonRouterLink: React.FC<ButtonRouterLinkProps> = (props) => {
  return (
    <Link
      to={props.to}
      className={`button ${props.className ? props.className : ''}`}
    >
      {props.text}
      {props.faIcon ? <FontAwesomeIcon icon={props.faIcon} /> : ''}
    </Link>
  );
};

export const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  const conditionalAttributes: { rel?: string } = {};

  if (props.target && props.target === '_blank') {
    conditionalAttributes.rel = 'noreferrer';
  }

  return (
    <a
      className={`button ${props.className ? props.className : ''}`}
      href={props.url}
      target={props.target}
      {...conditionalAttributes}
    >
      {props.text}
      {props.faIcon ? <FontAwesomeIcon icon={props.faIcon} /> : ''}
    </a>
  );
};
