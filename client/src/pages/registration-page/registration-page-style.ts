import styled from 'styled-components';


export const RegForm = styled.form`
background-color: #1a0e0d;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: 1rem;
`;

export const RegInput = styled.input`
width: 90%;
margin-bottom: 1rem;
padding: 0.2rem 1rem;
background-color: #310c07;
color: goldenrod;
border: 2px solid #000000;

    @media (min-width: 500px) {
        width: 70%;
    };

    @media (min-width: 900px) {
        width: 40%;
    };
`;

export const Header = styled.h1`
    color: #300606;
`;


export const RegButton = styled.button.attrs({ type: 'submit' })`
width: 100%;
background-color: #300606;
color: goldenrod;
padding: 0.4rem;
cursor: pointer;
transition: all 0.3s ease;

  &:hover, &:focus {
    color: gold;

    background-color: #130101;
    box-shadow: 4px 4px 8px 0px #300606;
    transition: all 0.3s ease;
  }
`;


export const ErrorBlockUl = styled.ul`
background-color: #F0E68C;
color: #300606;
font-size: 13px;
border: 2px solid #000000;
`;
