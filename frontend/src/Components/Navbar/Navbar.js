import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { Button } from '../Button';
import { FaBars } from 'react-icons/fa';




const NavLink = css`
    color: white;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: black;
    }

`;
const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;


`;
const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0rem;
    z-index: 100;
    background: #A5A58D;
    position: fixed;
    width: 100%;

`;

const MenuBars = styled(FaBars)`
    display: none;


    @media screen and (max-width : 768px){
        display: block;
    }

`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width : 768px){
        display: none;
    }


`;
const NavMenuLinks = styled(Link)`
    ${NavLink}
`;


const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;



    @media screen and (max-width : 768px){
        display: none;
    }


`;
const AdminBtn = styled.div`
    display: flex;
    align-items: center;
    padding-right: 100px;
`;
class Navbar extends Component {


    handleLogout = () => {
        localStorage.clear();

        this.props.setUser(null);

    }


    render() {
        let buttons;
        if (this.props.user) {

            buttons = (

                <>
                    <AdminBtn>
                        <NavMenuLinks to="/admin/users"> Add Users</NavMenuLinks>
                        <NavMenuLinks to="/admin/users"> Add Rooms</NavMenuLinks>
                    </AdminBtn>

                    <Button to="/" onClick={this.handleLogout} primary="true" >
                        Logout
                    </Button>


                </>
            )
        } else {
            buttons = (

                <>
                    <Button to="/Login" primary="true" >
                        Login
                    </Button>
                    &nbsp;
                    &nbsp;
                    <Button to="/Register" primary="true">
                        Register
                    </Button>

                </>

            )

        }
        return (
            <>


                <Nav>
                    <Logo to="/" >Dream Home</Logo>
                    <MenuBars />

                    <NavMenu>
                        <NavMenuLinks to="/"> Home</NavMenuLinks>
                        <NavMenuLinks to="/Rooms"> Rooms</NavMenuLinks>

                    </NavMenu>

                    <NavBtn>

                        {buttons}
                    </NavBtn>


                </Nav>
            </>

        )
    }
}
export default Navbar
