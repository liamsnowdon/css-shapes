import React from 'react';

import Pod from '../Pod/Pod';

import './SearchInput.scss';

interface SearchInputProps {
  term: string;
  onTermChange: (term: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onTermChange(event.target.value);
  }

  return (
    <Pod className='search'>
      <div className='search__input'>
        <input
          id='search'
          className='search__input-box'
          placeholder='Search for a shape'
          type='search'
          name='search'
          autoComplete='off'
          value={props.term}
          onChange={handleChange}
        />
        <label className='search__input-label' htmlFor='search'>
          Search for a shape
        </label>
      </div>
    </Pod>
  );
};

export default SearchInput;
