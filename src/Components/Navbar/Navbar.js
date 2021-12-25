import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { MenuData } from '../../Data/MenuData';
import { Button } from '../Button';
import {FaBars} from 'react-icons/fa'


const NavLink = css`
    color: white;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

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
    background: green;
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

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/" >Dream Home</Logo>
            <MenuBars  onClick={toggle}/>
            <NavMenu>
                {MenuData.map((item, index) => (

                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
            <Button  to="/SignIn" primary="true">
            Sign In
            </Button>
            &nbsp;
            &nbsp;
            <Button  to="/SignUp" primary="true">
            Sign Up
            </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
