import React from 'react';
import { Link } from 'react-router-dom';

import Shape from '../../models/Shape';
import Pod from '../Pod/Pod';

import './About.scss';

interface AboutProps {
  shapes: Shape[];
}

const About: React.FC<AboutProps> = (props) => {
  return (
    <div className='about'>
      <h1>About</h1>

      <Pod>
        <div className='about__pages'>{props.shapes.length}</div>

        <p>
          CSS Shapes is a library of shapes that can be created entirely with an
          HTML element and CSS. Using <code>::before</code> and{' '}
          <code>::after</code> pseudo-elements in combination with properties
          like <code>border</code> and <code>box-shadow</code>, a variety of
          shapes can be rendered on the page.
        </p>

        <p>
          Each shape has code snippets to copy and paste the required HTML, CSS
          and Sass/SCSS to render the shape. The{' '}
          <Link to='/download'>download</Link> page allows selecting multiple
          shapes and downloading a stylesheet containing all the rules you need.
        </p>

        <br />

        <p>
          The <Link to='/library'>library</Link> currently contains{' '}
          {props.shapes.length} shapes.
        </p>
      </Pod>
    </div>
  );
};

export default About;
