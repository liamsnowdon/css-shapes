import React, { useState } from 'react';

import Shape from '../../models/Shape';
import Pod from '../Pod/Pod';
import DownloadCheckbox from './DownloadCheckbox';
import DownloadSnippets from './DownloadSnippets';

import './Download.scss';

interface DownloadProps {
  shapes: Shape[];
}

const Download: React.FC<DownloadProps> = (props) => {
  const [selectedShapes, setSelectedShapes] = useState<Shape[]>([]);

  function handleCheckboxChange(shape: Shape, value: boolean): void {
    const existingIndex = selectedShapes.findIndex(
      (selectedShape) => selectedShape.name === shape.name
    );

    if (value) {
      if (existingIndex !== -1) return;

      setSelectedShapes([...selectedShapes, shape]);
    } else {
      if (existingIndex === -1) return;

      setSelectedShapes(
        selectedShapes.filter(
          (selectedShape) => selectedShape.name !== shape.name
        )
      );
    }
  }

  const checkboxes = props.shapes.map((shape) => (
    <DownloadCheckbox
      key={shape.name}
      shape={shape}
      onChange={handleCheckboxChange}
    />
  ));

  return (
    <div className='download'>
      <h1 className='text-center'>Download</h1>

      <Pod>
        <h3>Shapes</h3>

        <div className='download__checkboxes'>{checkboxes}</div>
      </Pod>

      <div className='download__snippets'>
        <DownloadSnippets shapes={selectedShapes} />
      </div>
    </div>
  );
};

export default Download;
