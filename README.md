You can see this app at: https://ajungers-ga.github.io/fetching-data-in-react-lab/

# Star Wars Starships App

This React app was built as part of the **Fetching Data in React Lab** during my software engineering course. It connects to the [Star Wars API (SWAPI)](https://swapi.dev/) and displays a list of starships. Users can search for ships by name using a form. The project applies most of what i learned in the fetching data lessons, including making API calls with `fetch()`, using react hooks (`useState`, `useEffect`), and managing search input through controlled forms.

To make this project more readable (for you and me!), i explain how the COMPONENTS work under the hood using detailed comments in the app.jsx file and am following the 4 key steps when building a COMPONENT.

//1. Import dependencies  
//1.2 Define the component and state  
//2. Define logic (like fetching and handlers)  
//3. Return some JSX  
//4. Export the component so it can be used in main.jsx

S/o to the awesome classmates who have helped my understanding of React so far in breakout rooms: John, Connor, Brice, Diana & Christian!

---

##  What This App Does

- Fetches and displays a list of starships from SWAPI on page load
- Shows the number of visible results
- Lets users search by starship name with a search form
- Filters the list based on the user's input
- All functionality updates the UI **without reloading the page**

---

##  What I Practiced From the Lessons

###  `useEffect()`
- Used to fetch data when the component first mounts
- Only runs once using an empty dependency array (`[]`)

###  `useState()`
- Used to hold:
  - The full list of starships (`fullStarshipList`)
  - The currently displayed list (`starships`)
  - The user input from the search field (`searchTerm`)

###  Controlled Form Inputs
- Search bar is tied to state (`searchTerm`)
- Updates every time the user types

###  Filtering Logic
- Filters are applied **in place**, using `.filter()` on the original array
- Searches are case-insensitive using `.toLowerCase()`

###  Reusable Components
- `StarshipCard` handles the layout of a single starship's info
- `StarshipSearchForm` contains the search input and submit logic



#  How to Run This App Locally
BELOW FROM TERMINAL

git clone the link in the url
cd fetching-data-in-react
npm install
npm run dev

Visit http://localhost:5173 in your browser