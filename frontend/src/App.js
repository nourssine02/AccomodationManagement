import React, { useState } from 'react';
import Dropdown from './Components/Navbar/Dropdown';
import Navbar from './Components/Navbar/Navbar';

import GlobalStyle from './Styles/GlobalStyle';
import Home from './Components/Home';
import Rooms from './Components/RoomPage/Rooms'
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import SearchPage from "./Components/Search/SearchPage";
import Register from "./Components/User/Register";
import Login from './Components/User/Login';



function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (


    <>

      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route exact path="/rooms/:id" component={RoomInfo}/> */}
        <Route element={Error} />
        <Route path="/Register" element={<Register /> } />
        <Route path="/Login" element={<Login />} />
      </Routes>




      <Footer />
    </>




  );
}

export default App;
