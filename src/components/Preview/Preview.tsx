import React from 'react';
import ShapeClass from '../../models/Shape';
import RelatedShapes from './RelatedShapes';
import Pod from '../Pod/Pod';
import Shape from '../Shape/Shape';

import './Preview.scss';

interface PreviewProps {
  shape: ShapeClass;
  relatedShapes: ShapeClass[];
}

const Preview: React.FC<PreviewProps> = (props) => {
  return (
    <section className='preview'>
      <Pod className='text-center'>
        <h1>{props.shape.name}</h1>

        <div className='preview__shape'>
          <Shape shape={props.shape} />
        </div>
      </Pod>

      {props.relatedShapes.length > 0 && (
        <RelatedShapes shapes={props.relatedShapes} />
      )}
    </section>
  );
};

export default Preview;
