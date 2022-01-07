import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
    background-color: #A5A58D;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`;


const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    @media screen and (max-width:820px){
        padding-top: 32px;
    }

`;
const FooterLinksWrapper = styled.div`
    display: flex;
    @media screen and (max-width:820px){
        flex-direction: column;

    }
`;
const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width:420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }

`;
const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`;
const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover{
        color: black;
        transition: 0.3 ease-out;

    }

`;
const Footer = () => {
    return (
        <FooterContainer>
            
<FooterLinksContainer>
    <FooterLinksWrapper>
        <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
        </FooterLinksItems>
        <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
        </FooterLinksItems>
        <FooterLinksItems>
            <FooterLinkTitle>Properties</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
        </FooterLinksItems>
        <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
        </FooterLinksItems>
        
    </FooterLinksWrapper>
</FooterLinksContainer>

        </FooterContainer>
    )
}

export default Footer
