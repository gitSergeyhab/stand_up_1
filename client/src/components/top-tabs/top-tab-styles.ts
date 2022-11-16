import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const TabPanelUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: #300606; 
  width: 100%;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;


type TabProps = { active: boolean };

export const TabLi = styled.li<TabProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
  padding-top: 16px;
  background: ${({ active }) => active ? 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(48,6,6,1) 100%)' : ''};
`;


export const TabLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    width: 100%;
    color: #ff9b05;
    &:hover {
      color: #f57215;
    }
`;
