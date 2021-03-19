import React from 'react';
import Shape from '../../models/Shape';

import CodeSnippet from '../CodeSnippet/CodeSnippet';
import Pod from '../Pod/Pod';

interface SnippetsProps {
  shape: Shape;
}

const Snippets: React.FC<SnippetsProps> = (props) => {
  return (
    <Pod>
      <CodeSnippet
        shape={props.shape}
        code={props.shape.html}
        title='HTML'
        prismLanguage='markup'
      />
      <CodeSnippet
        shape={props.shape}
        code={props.shape.css}
        title='CSS'
        prismLanguage='css'
      />
      <CodeSnippet
        shape={props.shape}
        code={props.shape.scss}
        title='Sass/SCSS'
        prismLanguage='css'
      />
    </Pod>
  );
};

export default Snippets;
