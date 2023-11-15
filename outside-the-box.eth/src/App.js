//CHAT_API_KEY=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

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
      <h1>Welcome to Outside the Box!</h1><br></br>
      <nav className="App-nav">
        <nav className="App-nav">
            <a href="https://junk-ez.net">Junk Hauling Services</a>
            <a href="https://discord.gg/Q6hyCATE">The Discord</a>
            <a href="https://github.com/amaxj95/outsidethebox.eth">The Source</a>
            <a href="">Leave a Review!</a>
          </nav>
        </nav><br></br><br></br><br></br>
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
