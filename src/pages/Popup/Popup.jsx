import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

const Popup = () => {
  const handleClick = ()=>{
      chrome.tabs.create({})
  }

  return (
    <div className="App" onClick={handleClick}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Click to open a new tab
        </p>
      </header>
    </div>
  );
};

export default Popup;
