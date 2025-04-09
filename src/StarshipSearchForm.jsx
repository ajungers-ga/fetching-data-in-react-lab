/**
 * FILE: StarshipSearchForm.jsx
 * PURPOSE: Controlled form for searching starships
 * Props received:
 * - searchTerm (input value)
 * - onSearchChange (callback for input change)
 * - onSearchSubmit (callback for form submit)
 */

// 1. Import dependencies (none needed here)

// 1.2 Define the component and receive props
const StarshipSearchForm = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
    // 3. Return JSX
    return (
      <form onSubmit={onSearchSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Search for a starship"
          />
          <button type="submit">Search</button>
        </div>
      </form>
    );
  };
  
  // 4. Export the component
  export default StarshipSearchForm;
  