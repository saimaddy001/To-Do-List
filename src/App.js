// App.js
import React from 'react';
import Navbar from './compo/Navbar'; // Import your Navbar component
import Home from './compo/Home'

const App = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <Home/> {/* Render the Home component */}
    </div>
  );
};

export default App;

