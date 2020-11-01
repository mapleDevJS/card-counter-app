import logo from './logo.svg';
import './App.css';
import React from "react";
import NavBar from './components/navbar';
import Counters from './components/counters';

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </>
  );
}

export default App;
