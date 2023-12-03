
import React, { useState } from 'react';
import logo from './outsidetheboxlogo.png'; // Ensure this path is correct
import './App.css';
import ZipCodeSearch from './ZipCodeSearch';
import isValidZipCode from './ZipCodeSearch';
import ItemListForm from './ItemListForm';
import Calendar from './Calendar';

function App() {
  const [step, setStep] = useState(1);
  const [zipCode, setZipCode] = useState('');
  const [googleMapsUrl, setGoogleMapsUrl] = useState('');
  const [items, setItems] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleZipCodeSearch = (zip) => {
    setZipCode(zip);
    if (isValidZipCode(zip)) { // Assuming you have a function to validate the zip code
      setGoogleMapsUrl(`https://www.google.com/maps/search/?api=1&query=${zip}`);
    }
    setStep(2);
  };
  
  const handleItemsSubmit = (itemList) => {
    setItems(itemList);
    setStep(3);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Further actions or submission
  };
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
            <a href="">Thrifts & Threads</a>
          </nav>
        </nav><br></br><br></br><br></br>
        <img 
          src={logo} 
          className="App-logo" 
          alt="logo" 
          onClick={toggleButtons} 
          style={{ cursor: 'pointer' }}
        />
        <br></br>
        {step === 1 && <ZipCodeSearch onSearch={handleZipCodeSearch} />}
        {isValidZipCode && 
          <a href={`https://www.google.com/maps/search/?api=1&query=${zipCode}`} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>}
        {step === 2 && <ItemListForm onSubmit={handleItemsSubmit} />}
        {step === 3 && <Calendar onDateSelect={handleDateSelect} />}
        <br></br><br></br><br></br>
          <blockquote class="twitter-tweet"><p lang="zxx" dir="ltr"><a href="https://t.co/oAF0Snh8vh">https://t.co/oAF0Snh8vh</a></p>&mdash; Aus10 | @junk_ez_eth (@aus10va) <a href="https://twitter.com/aus10va/status/1724577747345764546?ref_src=twsrc%5Etfw">November 14, 2023</a></blockquote>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </header>
    </div>
  );
}

export default App;


