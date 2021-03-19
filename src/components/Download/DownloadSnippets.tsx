import React from 'react';

import Shape from '../../models/Shape';
import Pod from '../Pod/Pod';
import CodeSnippet from '../CodeSnippet/CodeSnippet';
import DownloadButton from './DownloadButton';

import {
  html as htmlComment,
  css as cssComment,
} from '../../constants/comments';

interface DownloadSnippetsProps {
  shapes: Shape[];
}

const DownloadSnippets: React.FC<DownloadSnippetsProps> = (props) => {
  const html = props.shapes.map((shape) => shape.html);
  const css = props.shapes.map((shape) => shape.css);
  const scss = props.shapes.map((shape) => shape.scss);

  const htmlSnippet = htmlComment + '\n' + html.join('\n\n');
  const cssSnippet = cssComment + '\n' + css.join('\n\n');
  const scssSnippet = cssComment + '\n' + scss.join('\n\n');

  return (
    <>
      {html.length > 0 && (
        <>
          <Pod className='mt-40'>
            <CodeSnippet
              title='HTML'
              code={htmlSnippet}
              prismLanguage='markup'
            />

            <DownloadButton
              buttonText='HTML'
              content={htmlSnippet}
              filename='css-shapes.html'
              contentType='text/html'
            />
          </Pod>

          <Pod className='mt-40'>
            <CodeSnippet title='CSS' code={cssSnippet} prismLanguage='css' />

            <DownloadButton
              buttonText='CSS'
              content={cssSnippet}
              filename='css-shapes.css'
              contentType='text/css'
            />
          </Pod>

          <Pod className='mt-40'>
            <CodeSnippet
              title='Sass/SCSS'
              code={scssSnippet}
              prismLanguage='css'
            />

            <DownloadButton
              buttonText='Sass/SCSS'
              content={scssSnippet}
              filename='css-shapes.scss'
              contentType='text/scss'
            />
          </Pod>
        </>
      )}
    </>
  );
};

export default DownloadSnippets;
