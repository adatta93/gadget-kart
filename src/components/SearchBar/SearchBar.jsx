import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [filterText, setFilterText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setFilterText(e.target.value);
    onSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filterText);
  };

  return (
    <div className="input-group search-container mb-3">
      <input
        type="search"
        className="search-box"
        placeholder="Search Product by Name"
        value={filterText}
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button className="btn btn-search" type="button" onClick={handleSubmit}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
