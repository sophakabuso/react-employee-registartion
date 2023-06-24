import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Search employees"
          value={searchQuery}
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
