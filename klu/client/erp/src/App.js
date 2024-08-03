import React from 'react';
import './App.css';
import Header from './components/Header';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Student from './components/Student';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Faculty />
        <Student />
        <Courses />
      </main>
      <Footer />
    </div>
  );
}

export default App;