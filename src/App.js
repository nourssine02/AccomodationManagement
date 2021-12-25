import React, { useState } from 'react';
import Dropdown from './Components/Navbar/Dropdown';
import Navbar from './Components/Navbar/Navbar';

import GlobalStyle from './Styles/GlobalStyle';
import Home from './Components/Home';

import { Route, Routes } from 'react-router-dom';
import Property from './Components/Property';



function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (


    <div className="App">

      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
      </Routes>

    </div>




  );
}

export default App;
