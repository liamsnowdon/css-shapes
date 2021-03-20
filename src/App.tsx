import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { plainToClass } from 'class-transformer';

import './scss/app.scss';

import Shape from './models/Shape';

import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import MobileNavigationSlider from './components/Navigation/MobileNavigationSlider';
import Library from './components/Library/Library';
import Download from './components/Download/Download';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchShapes();
  }, []);

  async function fetchShapes() {
    setLoading(true);

    try {
      const response = await fetch('data/shapes.json');
      const json = await response.json();
      const shapes = plainToClass(Shape, json);

      setShapes(shapes);
    } catch (error) {
      console.error('There was a problem fetching shapes.', error);
    } finally {
      setLoading(false);
    }
  }

  function handleMobileNavToggle() {
    setMobileNavOpen(!mobileNavOpen);
  }

  return (
    <>
      {loading && <Loader />}

      <Navigation
        onHamburgerClick={handleMobileNavToggle}
        mobileNavOpen={mobileNavOpen}
      />
      <MobileNavigationSlider
        isOpen={mobileNavOpen}
        onClose={handleMobileNavToggle}
      />

      <main>
        <div className='content'>
          <Switch>
            <Route exact path='/about'>
              <About shapes={shapes} />
            </Route>
            <Route path='/library'>
              <Library shapes={shapes} />
            </Route>
            <Route exact path='/download'>
              <Download shapes={shapes} />
            </Route>
            <Route path='*'>
              <Redirect to='/library' />
            </Route>
          </Switch>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
