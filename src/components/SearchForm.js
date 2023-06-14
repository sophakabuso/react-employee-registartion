import React, { useState } from 'react';

function SearchForm ({ onSearch }) {
  const [searchId, setSearchId] = useState('');

  const handleSearch = (e) => {
    setSearchId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchId);
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input type="text" value={searchId} onChange={handleSearch} placeholder="Enter ID" /><br/>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
