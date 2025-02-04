import React from 'react';

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Plants..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default Search;
