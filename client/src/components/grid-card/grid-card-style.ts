

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.li`
  transition: 0.5s;
  min-height: 100px;
  width: 100%;
  background-color: #300606;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover, &:focus{
    scale: 1.02;
    transition: 0.5s;
  }
`;

export const Img = styled.img`width: 100%;`;

export const CardLink = styled(Link)`
  background-color: inherit;
  display: block;
  width: 100%;
  color: wheat;
  text-decoration: none;
`;

// .grid-card {
//   transition: 0.5s;
// }

// .grid-card:hover,
// .grid-card:focus
//  {
//   scale: 1.02;
//   transition: 0.5s;
//  }

// .grid-card__link,
// .grid-card__link
// {
// color: wheat;
// text-decoration: none;
// }

// .grid-card__link:hover,
// .grid-card__link:focus
//  {
//   border: orange 2px solid;
//   color: orange;
//   opacity: 0.95;
//   transition: 0.5s;
// }

export const CardContent = styled.div`
  background-color: #300606;
  color: white;
`;

// .grid-card:hover .grid-card__content{
//   background-color: #1b0202;
//   transition: 0.5s;
// }
