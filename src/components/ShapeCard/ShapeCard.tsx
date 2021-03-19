import React from 'react';
import { Link } from 'react-router-dom';

import Case from '../../util/Case';
import Shape from '../../models/Shape';

import './ShapeCard.scss';

interface ShapeCardProps {
  shape: Shape;
}

const ShapeCard: React.FC<ShapeCardProps> = (props) => {
  return (
    <Link
      to={`/library/${Case.kebab(props.shape.name)}`}
      className='shape-card'
    >
      <div className='shape-card__shape'>
        <div
          className={`shape-card__shape-${Case.kebab(props.shape.name)}`}
        ></div>
      </div>
      <div className='shape-card__content'>
        <h4 className='shape-card__name'>{props.shape.name}</h4>
      </div>
    </Link>
  );
};

export default ShapeCard;
