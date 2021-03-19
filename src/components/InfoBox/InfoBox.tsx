import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import './InfoBox.scss';

interface InfoBoxProps {
  text: string;
  className?: string;
}

const InfoBox: React.FC<InfoBoxProps> = (props) => {
  return (
    <div className={`info-box ${props.className ? props.className : ''}`}>
      <div className='info-box__icon'>
        <FontAwesomeIcon icon={faInfoCircle} size='2x' />
      </div>

      <div className='info-box__content'>{props.text}</div>
    </div>
  );
};

export default InfoBox;
