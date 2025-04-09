/**
 * FILE: StarshipCard.jsx
 * PURPOSE: Displays details for a single starship
 * Props received:
 * - name
 * - model
 * - starship_class
 * - manufacturer
 */

// 1. Import dependencies (none needed here)

// 1.2 Define the component and receive props
const StarshipCard = ({ name, model, starship_class, manufacturer }) => {
    // 3. Return JSX
    return (
      <div className="starship-card">
        <h2>{name}</h2>
        <p><strong>Model:</strong> {model}</p>
        <p><strong>Class:</strong> {starship_class}</p>
        <p><strong>Manufacturer:</strong> {manufacturer}</p>
      </div>
    );
  };
  
  // 4. Export the component
  export default StarshipCard;
  