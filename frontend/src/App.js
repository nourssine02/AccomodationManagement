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
import axios from 'axios';
import RoomDetails from './Components/RoomPage/RoomDetails';




class App extends Component {

  state = {};
  useEffect = (() => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },

    }
    axios.get(`http://localhost:4000/api/v1/admin/users`, config)
      .then((res) => {
        this.setUser(res.data);

      })
      .catch((err) => {
        console.log(err);
      })

  })

  setUser = user => {
    this.setState({
      user: user
    });

  }



  render() {


    return (


      <>

        <GlobalStyle />
        <Navbar user={this.state.user} setUser={this.setUser} />
        <Dropdown />

        <Routes>

          <Route exact path="/" element={<Home user={this.state.user} />} />
          <Route exact path="/rooms" element={<Rooms />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact element={Error} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login setUser={this.setUser} />} />
          <Route exact path="/roomDetails/:id" element={<RoomDetails />} />

          {/* <Route path="/admin/users" element={<AllUsers />} /> */}
          {/* <Route path="/admin/addUsers" element={<AddUsers />} />  */}
          {/* <Route exact path="/edit/:id" component={EditUser} />  */}
        </Routes>


        <Footer />
      </>




    );
  }
}

export default App;
