import React, { useState } from 'react';
import logo from './outsidetheboxlogo.png'; // Ensure this path is correct
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={logo} 
          className="App-logo" 
          alt="logo" 
          onClick={toggleButtons} 
          style={{ cursor: 'pointer' }}
        />

      </header>
    </div>
  );
}

export default App;
