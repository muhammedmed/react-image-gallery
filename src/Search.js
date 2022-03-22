import React from "react";

const Search = ({ photo, setPhoto, fetchPhoto }) => {
  const handleChange = (e) => {
    setPhoto(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="search"
        name="search"
        value={photo}
        onChange={handleChange}
      />

      <button type="submit" onClick={fetchPhoto}>
        Search
      </button>
    </div>
  );
};

export default Search;
