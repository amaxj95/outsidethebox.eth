import React, { useState } from 'react';

function ZipCodeSearch({ onSearch }) {
  const [zipCode, setZipCode] = useState('');

  const handleSearch = () => {
    onSearch(zipCode);
  };

  return (
    <div>
      <input
        type="text"
        className="zip-code-input"
        placeholder="Enter your zip code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default ZipCodeSearch;

