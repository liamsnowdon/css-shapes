import React from 'react';

import './Logo.scss';

const Logo: React.FC = () => {
  return (
    <span className='logo'>
      <span className='logo__css'>CSS</span>
      <span className='logo__shapes'>Shapes</span>
    </span>
  );
};

export default Logo;
