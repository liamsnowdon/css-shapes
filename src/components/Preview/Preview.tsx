import React from 'react';
import Shape from '../../models/Shape';
import RelatedShapes from './RelatedShapes';
import Pod from '../Pod/Pod';

import './Preview.scss';

interface PreviewProps {
  shape: Shape;
  relatedShapes: Shape[];
}

const Preview: React.FC<PreviewProps> = (props) => {
  const markup = {
    __html: props.shape.html,
  };

  return (
    <section className='preview'>
      <Pod className='text-center'>
        <h1>{props.shape.name}</h1>

        <div className='preview__shape' dangerouslySetInnerHTML={markup}></div>
      </Pod>

      {props.relatedShapes.length > 0 && (
        <RelatedShapes shapes={props.relatedShapes} />
      )}
    </section>
  );
};

export default Preview;
