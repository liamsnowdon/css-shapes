import React from 'react';
import Shape from '../../models/Shape';
import Pod from '../Pod/Pod';
import ShapeCard from '../ShapeCard/ShapeCard';

import './RelatedShapes.scss';

interface RelatedShapesProps {
  shapes: Shape[];
}

const RelatedShapes: React.FC<RelatedShapesProps> = (props) => {
  const shapeCards = props.shapes.map((shape) => (
    <ShapeCard key={shape.name} shape={shape} />
  ));

  return (
    <Pod className='mt-40'>
      <div className='related-shapes'>
        <h3 className='text-center'>Related Shapes</h3>

        <div className='related-shapes__inner'>{shapeCards}</div>
      </div>
    </Pod>
  );
};

export default RelatedShapes;
