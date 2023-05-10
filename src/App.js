// import logo from './logo.svg';
import './App.css';
import AppBody from './Componate/AppBody';
import ContactUs from './Componate/ContactUs';
import NavBar from './Componate/NavBar';
// import React, { useState } from 'react'

function App() {

  return (
    <>
      {/* <NavBar title="NAVBAR" home="" about="ABOUT" servics="SERVICS" contact="CONTACT US"/> */}
      <NavBar title="NAVBAR" />
      <AppBody />
      <ContactUs  title="Enter Text" Blod="blod"/>
    </>
  );
}

export default App;
