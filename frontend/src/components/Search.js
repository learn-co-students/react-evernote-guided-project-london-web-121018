import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input 
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        onChange={event => props.handleSearchInput(event.target.value)}
      />
    </div>
  );
}

export default Search;
