ReadableStreamDefaultController
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const styles = {
    app: {
      textAlign: 'center',
      backgroundColor: '#1DF7E0', // Set your desired background color here
    },
    h1: {
      color: 'blue',
    },
    h2: {
      color: 'green',
    },
    h3: {
      color: 'red',
    },
    img: {
      width: '300px', // Set your desired width here
      height: '400px', // Set your desired height here
    },
  };

  return (
    <div className="App" style={styles.app}>
      <h1 style={styles.h1}>Welcome to ERP</h1>
      <h2 style={styles.h2}>Welcome to KLU University</h2>
      <h3 style={styles.h3}>Welcome to T.Vardhini Reddy</h3>
      <img src={require('C:/Users/vardh/OneDrive/Desktop/logo.klu.png')} alt="logo.klu" style={styles.img} />
    </div>
  );
}

export default App;


  <Home/>