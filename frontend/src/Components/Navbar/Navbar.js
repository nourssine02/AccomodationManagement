import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { Button } from '../Button';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/userActions'



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

const Navbar = () => {


    const dispatch = useDispatch();
    const { user, loading } = useSelector(state => state.auth)


    const handleLogout = () => {
        dispatch(logout())
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
                    {
                        user ? (
                            <>

                                {user && user.role !== 'admin' ? (
                                    <>


                                        <AdminBtn>
                                            <NavMenuLinks to="/bookings/me"> Bookings</NavMenuLinks>

                                        </AdminBtn>


                                    </>

                                ) : user.role === 'admin' && (
                                    <>

                                        <AdminBtn>


                                            <NavMenuLinks to="/admin/users"> Add Users</NavMenuLinks>
                                            <NavMenuLinks to="/admin/rooms"> Add Rooms</NavMenuLinks>
                                            <NavMenuLinks to="/admin/bookings"> All Bookings</NavMenuLinks>
                                        </AdminBtn>

                                    </>

                                )}
                                <span>You are logged as {user && user.name}</span>&nbsp;

                                <Button to="/" primary="true" onClick={handleLogout}>
                                    Logout
                                </Button>




                            </>


                        ) : !loading && (
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
                </NavBtn>


            </Nav>
        </>



    )
}

export default Navbar
