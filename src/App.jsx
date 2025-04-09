/**
 * FILE: App.jsx
 * PURPOSE: Root component of the Star Wars Starships React app.
 * - Loads starship data from SWAPI when the app mounts
 * - Manages global state for all starships and search term
 * - Handles search functionality and passes data to child components
 */
// 1-4 = steps to creating a component
 // 1. Import dependencies
 import { useEffect, useState } from 'react'; // (useState) allows component to hold state. (useEffect) runs code AFTER the component mounts. Using this to fetch data on load
 import StarshipCard from './StarshipCard';  // importing (StarshipCard COMPONENT) from its origin. This component is uesed to display a chosen ships info      
 import StarshipSearchForm from './StarshipSearchForm'; // importing StarshipSearchForm COMPONENT, this containst the 'search' input and submit btn
 import './App.css'; // importing my super cool styling (css is so much fun)

 // 1.2. Define the component
 const App = () => { // defining the MAIN FUNCTIONAL COMPONENT of the app. Everything INSIDE this function controls display & how the app behaves
   // 1.3 Define state

   // line 24 = // defines a piece of state named (fullStarshipList). value starts as an empty array[]- it holds all the starships FETCHED f/ api,
                // (setFullStarshipList) is the function being used to UPDATE the value. Idea is to keep this seperate so i always have the original list, even after filtering
   // line 25 = // this defines another state variable- (starships) this holds the CURRENT starships whether they are filtered or not, this is whats looping over and displaying in browser
   // line 26 = // this holds the value that the user types into the SEARCH, this starts as an EMPTY STRING, 
   //           // and is updated everytime the user types, using the (setSearchTerm) function - aka controlled input            
   const [fullStarshipList, setFullStarshipList] = useState([]); 
   const [starships, setStarships] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
 
   
   
   // 2. Define logic and fetch data
   useEffect(() => { // this React hook, allows code to run AFTER the COMPONENT rendered, so'when the component mounts, do this...'
     const getStarships = async () => { // this async function called (getStarships) is being defined INSIDE the effect. Using async because were using AWAIT for an API response
       try { // start of a try/catch block to handle errors from the fetch request (if necessary)
         const res = await fetch('https://swapi.dev/api/starships/'); // this is making a GET request to the API's starships, using AWAIT so the code waits for the response before continuing
         const data = await res.json(); // this parses the API response from JSON format into a JS object, see (results)
         setFullStarshipList(data.results); //storing the UNFLITERED list in (FullStarshipList)
         setStarships(data.results); // also storing the same list in (Starships) which is what the user will see. Now, (Starships) can be filtered without losing the original full list
         console.log(data.results); // this logs the array of starships in the CONSOLE - *i need to use this more for debugging*
       } catch (err) { // if anything does not work during the fetch, display the error message below (this is part of the try/catch logic)
         console.error("Failed to fetch starships", err);
       }
     };
 
     getStarships(); // calling the (getStarships) function AFTER defining it so the fetch runs properly
   }, []); // empty array is saying only run this once, on the inital render - no dependencies are being watched 
 

  // line 51 = // (handleSearchChange) is triggered whenever the user TYPES into the input field.
  // line 52   // It captures the value they typed (event.target.value) and updates the (searchTerm) state.
  //  52...    // Because the input field is tied to this state, it’s a CONTROLLED INPUT.
   const handleSearchChange = (event) => {
     setSearchTerm(event.target.value);
   };
 
  // line 60 = // (handleSearchSubmit) is the function that runs when the SEARCH FORM is submitted by the user
  //           // this function handles the search logic for filtering starships based on the (searchTerm)
  // line 61 = // (preventDefault) stops the form's default behavior of refreshing the page when submitted
  //           // this is important so the React app can handle the search in-place without reloading
   
   const handleSearchSubmit = (event) => {
     event.preventDefault();
 
  // line 68 = // using the (.filter) array method to loop through every item in (fullStarshipList)
  // line 69 = // checking if the (ship.name) includes the (searchTerm) — both converted to lowercase for case-insensitive matching
  // line 71 = // updating the (starships) state to reflect the filtered results
  //           // which shows the list of starships on the page to update

     const filtered = fullStarshipList.filter((ship) =>
       ship.name.toLowerCase().includes(searchTerm.toLowerCase())
     );
     setStarships(filtered);
   };
 
// 3. Return JSX
  // line 91 =  // the return statement defines what appears visually in the browser
  // line 92 =  // opens the outermost <div> container for all page content
  // line 93 =  // renders the main heading for the app title
  // line 94 =  // displays the (StarshipSearchForm) component
  // line 95 =  // passes (searchTerm) as a prop — the current input value
  // line 96 =  // passes (onSearchChange) — updates state as user types
  // line 97 =  // passes (onSearchSubmit) — filters starships on form submit
  // line 99 =  // displays how many starships are currently shown after filtering
  // line 101 = // opens container div for displaying all starship cards
  // line 102 = // uses (.map) to loop over each item in (starships)
  // line 103 = // renders one (StarshipCard) for each starship object
  //  104–107 = // passes props to (StarshipCard): name, model, class, manufacturer
  // line 108 = // passes the (starship_class) property from each starship object as a prop to (StarshipCard)
  //  108...    // allows each card to display the ship’s type/class 
  // line 109 = // closes the starship cards container <div>
  
   return (         
     <div>
       <h1>Star Wars Galactic Starships</h1>
       <StarshipSearchForm
         searchTerm={searchTerm}
         onSearchChange={handleSearchChange}
         onSearchSubmit={handleSearchSubmit}
       />
       <p>Currently showing {starships.length} starships</p>
 
       {/* 3.2 Render Starship Cards */}
       <div>
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
     </div>
   );
 };
 
 // 4. Export the component (exports my app COMPONENT as the default export from app.jsx) it makes this component avaialable to other files in the project
 export default App;
 
// its being imported into the main.jsx file, which is the ENTRY POINT of the react app

