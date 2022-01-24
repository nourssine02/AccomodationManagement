import React, { Component } from 'react';
import Dropdown from './Components/Navbar/Dropdown';
import Navbar from './Components/Navbar/Navbar';

import GlobalStyle from './Styles/GlobalStyle';
import Home from './Components/Main/Home';
import Rooms from './Components/RoomPage/Rooms'
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import SearchPage from "./Components/Search/SearchPage";
import Register from "./Components/User/Register";
import Login from './Components/User/Login';
import RoomDetails from './Components/RoomPage/RoomDetails';
import AllUsers from './Components/Admin/AllUsers'
import { loadUser } from './Redux/Actions/userActions'
import store from './store'
import AddRooms from './Components/Admin/AddRooms';
import AllBookings from './Components/Admin/AllBookings';
import AllRooms from './Components/Admin/AllRooms';
import UpdateRoom from './Components/Admin/UpdateRoom';
import AddUsers from './Components/Admin/AddUsers';
import UpdateUser from './Components/Admin/UpdateUser';
import MyBookings from './Components/Main/MyBookings';




class App extends Component {

  state = {};
  useEffect = (() => {
    store.dispatch(loadUser())

  }, [])



  render() {


    return (


      <>

        <GlobalStyle />
        <Navbar />
        <Dropdown />

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/rooms" element={<Rooms />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact element={Error} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/roomDetails/:id" element={<RoomDetails />} />


          <Route path="/admin/users" element={<AllUsers />} />
          <Route path="/admin/addUsers" element={<AddUsers />} />
          <Route path="/admin/updateUser/:id" element={<UpdateUser />} />

          <Route path="/admin/bookings" element={<AllBookings />} />
          <Route path="/bookings/me" element={<MyBookings />} />

          <Route path="/admin/rooms" element={<AllRooms />} />
          <Route path="/admin/addRooms" element={<AddRooms />} />
          <Route path="/admin/UpdateRoom/:id" element={<UpdateRoom />} />


        </Routes>


        <Footer />
      </>




    );
  }
}

export default App;
