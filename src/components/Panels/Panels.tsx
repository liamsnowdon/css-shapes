import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Case from '../../util/Case';
import Preview from '../Preview/Preview';
import Snippets from '../Snippets/Snippets';
import { ButtonRouterLink } from '../Button/Button';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Shape from '../../models/Shape';

import './Panels.scss';

interface PanelsProps {
  shapes: Shape[];
}

const Panels: React.FC<PanelsProps> = (props) => {
  const { id } = useParams<{ id: string }>();
  const [shape, setShape] = useState<Shape | null>(null);

  useEffect(() => {
    const matchedShape = props.shapes.find((s) => Case.kebab(s.name) === id);

    if (matchedShape) {
      setShape(matchedShape);
    }
  }, [props.shapes, id]);

  let relatedShapes: Shape[] = [];

  if (shape) {
    relatedShapes = shape.getRelatedShapes(props.shapes);
  }

  return (
    <div className='panels'>
      <ButtonRouterLink
        className='panels__button'
        to='/library'
        text='Back to library'
        faIcon={faArrowLeft}
      />

      {shape && (
        <div className='panels__content'>
          <Preview shape={shape} relatedShapes={relatedShapes} />
          <Snippets shape={shape} />
        </div>
      )}
    </div>
  );
};

export default Panels;
