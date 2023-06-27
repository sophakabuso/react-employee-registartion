import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchId, setsearchId] = useState('');

  const handleInputChange = (e) => {
    setsearchId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchId);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Search employees"
          value={searchId}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
