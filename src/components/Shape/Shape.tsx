import React from 'react';

import ShapeClass from '../../models/Shape';

interface ShapeProps {
  shape: ShapeClass;
}

const Shape: React.FC<ShapeProps> = (props) => {
  const markup = {
    __html: props.shape.html,
  };

  return (
    <>
      <div className='shape' dangerouslySetInnerHTML={markup}></div>

      <style>{props.shape.css}</style>
    </>
  );
};

export default Shape;
