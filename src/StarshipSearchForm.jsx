// 1. Import dependencies
import React from 'react';

// 1.2. Define the component
const StarshipSearchForm = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  // 1.3 Define state (none needed here)

  // 2. Define logic (all passed in as props)

  // 3. Return JSX
  return (
    <form onSubmit={onSearchSubmit} style={{ marginBottom: '20px' }}>
      <label>
        Search for a starship:{' '}
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="e.g. Falcon"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

// 4. Export the component
export default StarshipSearchForm;
