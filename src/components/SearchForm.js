import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchId, setSearchId] = useState('');

  const handleSearch = (e) => {
    setSearchId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchId} onChange={handleSearch} placeholder="Enter ID" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
