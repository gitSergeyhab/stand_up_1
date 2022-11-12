import { GridCardType } from '../../types/types';
import { GridCard } from '../grid-card/grid-card';


import styled from 'styled-components';

export const CardContainerUl = styled.ul`
  width: 100%;
  list-style: none;
	box-sizing: border-box;
	display: grid;
	place-content: center;
	gap: 3px;
	grid-template-columns: repeat(3, 30%);
	margin: 0;
	padding: 2px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 47%);
  }

  @media (max-width: 900px) {
    grid-template-columns: 90%;
  }
`;

export const CardContainer = ({cards} : {cards: GridCardType[]}) => {
  const cardElements = cards.map((item) => <GridCard key={item.id} card={item} />);
  return (
    <CardContainerUl>
      {cardElements}  {cardElements}
    </CardContainerUl>
  );
};
