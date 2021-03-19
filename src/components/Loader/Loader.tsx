import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './Loader.scss';

const Loader: React.FC = () => {
  return (
    <div className='loader'>
      <FontAwesomeIcon icon={faSpinner} size='5x' pulse={true} />
    </div>
  );
};

export default Loader;
