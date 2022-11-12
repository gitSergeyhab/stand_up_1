import { Link } from 'react-router-dom';
import styled from 'styled-components';


type NavProps = { shown: boolean }

export const Nav = styled.nav`
position: fixed;
width: 100%;
top: 0;
    @media (min-width: 900px) {
        /* padding: 3% 6%; */
        background: #300606;
    };
`;

export const MenuDesktop = styled.ul`
    list-style: none;
    display: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    
    @media (max-width: 900px) {
        display: none;
    };
`;

export const MenuMobile = styled.ul<NavProps>`
margin: 0;

    list-style: none;   
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* min-height: 100vh; */
    text-align: center;
    /* padding-top: 112px; */
    padding: 10px 0;
    background: #300606;
    z-index: 10;
    transition: all .4s ease-in-out;
    transform: translateY(-200%);

    ${({ shown }) => shown ? 'transform: translateY(0);' : '' };

    @media (min-width: 900px) {
        display: none;
    };

`;


export const MenuLink = styled(Link)`
    cursor: pointer;
    display: block;
    line-height: 2;
    padding: 25px 0;

    @media (min-width: 900px) {
        display: none;
    };
`;

export const Icon = styled.a<NavProps>`
    height: 32px;
    width: 43px;
    margin: 3%;
    position: absolute;
    top: 10px;
    right: 3%;
    display: inline-block;
    vertical-align: middle;
    z-index: 20;
    border: none;
    background-color: inherit;
    cursor: pointer;

    @media (min-width: 900px) {
        display: none;
    };
    
    &::before, &::after {
        content: "";
        display: block;
        background: rgb(255, 238, 0);;
        width: 100%;
        height: 4px;
        position: absolute;
        left: 0;
        transform-origin: center center;
        transform: rotate(0deg);
        transition: all 0.3s ease;
    }
    &::before {
        top: 2px;
        margin-top: -2px;
        ${({ shown }) => shown ? '  top: 50%;transform: rotate(45deg);' : '' }
    }

    &::after  {
        bottom: 2px;
        margin-bottom: -2px;
        ${({ shown }) => shown ? '  bottom: 50%;transform: rotate(-45deg);' : '' }
    }
`;

export const IconSpan = styled.span<NavProps>`
    display: block;
    background: rgb(255, 238, 0);
    width: 100%;
    height: 4px;
    margin-top: -2px;
    position: absolute;
    left: 0;
    top: 50%;

  background: ${({ shown }) => shown ? 'transparent;' : ''}; 
`;
