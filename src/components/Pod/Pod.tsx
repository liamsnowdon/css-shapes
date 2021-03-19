import React from 'react';

import './Pod.scss';

interface PodProps {
  className?: string;
}

const Pod: React.FC<PodProps> = (props) => {
  return (
    <div className={`pod ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
};

export default Pod;
