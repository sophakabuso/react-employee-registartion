import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchId, setSearchId] = useState('');

  const handleSearch = (e) => {
    setSearchId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchId);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="input-group mb-3">
        <input
          type="text"
          value={searchId}
          onChange={handleSearch}
          placeholder="Enter ID"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
