import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DefaultPath } from '../../const';
import { GridCardType } from '../../types/types';


export const GridCard = ( {card}: {card: GridCardType} ) => {

  const {type, id, name, date, status, picture, extName, extId} = card;
  const image = picture ? picture : DefaultPath.Any;
  const to = `/${type}/${id}`;
  return (
    <Link to={to}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            image={image}
            title={name}
          />
          <CardContent>
            <Typography variant="h3">
              {name}
            </Typography>
          </CardContent>
        </Card>

      </Grid>
    </Link>
  );
};
