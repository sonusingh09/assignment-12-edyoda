import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './topbar/topbar';
import Banner from  './banner/banner';
import Cards from './usersection/usersection';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Banner/> 
      <Cards/>
    </div>
  );
}

export default App;
