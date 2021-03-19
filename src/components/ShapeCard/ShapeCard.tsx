import React from 'react';
import { Link } from 'react-router-dom';

import Case from '../../util/Case';
import ShapeClass from '../../models/Shape';
import Shape from '../Shape/Shape';

import './ShapeCard.scss';

interface ShapeCardProps {
  shape: ShapeClass;
}

const ShapeCard: React.FC<ShapeCardProps> = (props) => {
  return (
    <Link
      to={`/library/${Case.kebab(props.shape.name)}`}
      className='shape-card'
    >
      <div className='shape-card__shape'>
        <Shape shape={props.shape} />
      </div>
      <div className='shape-card__content'>
        <h4 className='shape-card__name'>{props.shape.name}</h4>
      </div>
    </Link>
  );
};

export default ShapeCard;
