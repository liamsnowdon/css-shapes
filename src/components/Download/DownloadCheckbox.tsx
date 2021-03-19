import React from 'react';
import Shape from '../../models/Shape';

import './DownloadCheckbox.scss';

interface DownloadCheckboxProps {
  shape: Shape;
  onChange: (shape: Shape, value: boolean) => void;
}

const DownloadCheckbox: React.FC<DownloadCheckboxProps> = (props) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(props.shape, event.target.checked);
  }

  return (
    <div className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        name={props.shape.name}
        id={props.shape.name}
        onChange={handleChange}
      />
      <label className='checkbox__label' htmlFor={props.shape.name}>
        <span className='checkbox__checkbox'></span>
        <span className='checkbox__text'>{props.shape.name}</span>
      </label>
    </div>
  );
};

export default DownloadCheckbox;
