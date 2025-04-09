/**
 * FILE: StarshipList.jsx
 * PURPOSE: Renders a list of StarshipCard components using the starships prop
 * Props received:
 * - starships (array of starship objects)
 */

// 1. Import dependencies
import StarshipCard from './StarshipCard';

// 1.2 Define the component and receive props
const StarshipList = ({ starships }) => {
  // 3. Return JSX
  return (
    <div className= "starship-list">
      {starships.map((ship, index) => (
        <StarshipCard
          key={index}
          name={ship.name}
          model={ship.model}
          starship_class={ship.starship_class}
          manufacturer={ship.manufacturer}
        />
      ))}
    </div>
  );
};

// 4. Export the component to app.jsx
export default StarshipList;
