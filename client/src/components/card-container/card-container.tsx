import { Grid } from '@mui/material';
import { GridCardType } from '../../types/types';
import { GridCard } from '../grid-card/grid-card';

export const CardContainer = ({cards} : {cards: GridCardType[]}) => {
  const cardElements = cards.map((item) => <GridCard key={item.id} card={item} />);
  return (
    <Grid container spacing={1} px={2}>
      {cardElements}     {cardElements}

    </Grid>
  );
};
