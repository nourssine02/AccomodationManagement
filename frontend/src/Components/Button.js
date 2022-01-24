import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? "#6B705C" : '#FFF')};

    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    border-radius: 20px 0 20px 0;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    color: ${({ primary }) => (primary ? "#FFF" : "#6B705C")};
    font-size: ${({ big }) => (big ? '20px' : '14px')};


    &:hover{
        transform: translate(-2px);
        color: black;
    }

`;
