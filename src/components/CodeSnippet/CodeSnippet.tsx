import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton';
import Warning from '../InfoBox/InfoBox';
import Shape from '../../models/Shape';

import './Prism.css';
import './CodeSnippet.scss';

interface CodeSnippetProps {
  shape?: Shape;
  code: string;
  title: string;
  prismLanguage: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = (props) => {
  const prismEl = useRef<HTMLElement>(null);

  useEffect(() => {
    Prism.highlightElement(prismEl.current!);
  });

  return (
    <div className='snippet'>
      <h3 className='snippet__title'>{props.title}</h3>

      {props.shape &&
        props.shape.scssMixinUsesMultiplier &&
        props.title === 'Sass/SCSS' && (
          <Warning
            className='mb-20'
            text="Since this shape's properties would not normally be edited individually, this mixin uses a multiplier instead."
          />
        )}

      <div className='snippet__inner'>
        <CopyToClipboardButton text={props.code} />

        <pre>
          <code ref={prismEl} className={`language-${props.prismLanguage}`}>
            {props.code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
