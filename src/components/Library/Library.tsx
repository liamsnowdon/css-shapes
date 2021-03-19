import React, { useState } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import Shape from '../../models/Shape';

import LibraryCards from './LibraryCards';
import Panels from '../Panels/Panels';
import SearchInput from './SearchInput';

interface LibraryProps {
  shapes: Shape[];
}

const Library: React.FC<LibraryProps> = (props) => {
  const { path } = useRouteMatch();
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearchTermChange(term: string) {
    setSearchTerm(term);
  }

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <h1 className='text-center'>Library</h1>

          <SearchInput
            term={searchTerm}
            onTermChange={handleSearchTermChange}
          />

          <div className='library'>
            <LibraryCards term={searchTerm} shapes={props.shapes} />
          </div>
        </Route>

        <Route
          path='/library/:id'
          children={<Panels shapes={props.shapes} />}
        ></Route>

        <Route path='*'>
          <Redirect to={path} />
        </Route>
      </Switch>
    </>
  );
};

export default Library;
