import React from 'react';
import Shape from '../../models/Shape';
import ShapeCard from '../ShapeCard/ShapeCard';

import './LibraryCards.scss';

interface LibraryCardsProps {
  term: string;
  shapes: Shape[];
}

const LibraryCards: React.FC<LibraryCardsProps> = (props) => {
  let filteredShapes;

  if (props.term.length > 2) {
    filteredShapes = props.shapes
      .slice()
      .filter((shape) =>
        shape.name.toLowerCase().includes(props.term.toLowerCase())
      );
  } else {
    filteredShapes = props.shapes.slice();
  }

  const cards = filteredShapes.map((shape) => (
    <div key={shape.name} className='library__column'>
      <ShapeCard shape={shape} />
    </div>
  ));

  return (
    <>
      <div className='library__cards'>{cards}</div>

      {cards.length === 0 && (
        <p className='text-center'>
          No shapes found with term{' '}
          <span className='bold italic'>"{props.term}"</span>
        </p>
      )}
    </>
  );
};

export default LibraryCards;
