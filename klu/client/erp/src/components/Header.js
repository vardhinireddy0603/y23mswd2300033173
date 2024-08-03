// src/components/Header.js
import React from 'react';
import download  from '../components/download.png'; // adjust the path as necessary

function Header() {
  return (
    <header>
      <img src={download} alt="download" />
      <h1>Koneru Lakshmaiah Education Foundation
             (Deemed to be University)</h1>
    </header>
  );
}

export default Header;