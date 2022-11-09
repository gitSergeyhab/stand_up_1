import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DefaultPath } from '../../const/const';
import { GridCardType } from '../../types/types';

import './grid-card.css';


export const GridCard = ( {card}: {card: GridCardType} ) => {

  const {type, id, name, date, status, picture, extName, extId, extType} = card;
  const image = picture ? picture : DefaultPath.Any;
  const to = `/${type}/${id}/info`;
  const toExt = `/${extType}/${extId || ''}/info`;

  const extLink = extId ? <Link to={toExt}><Typography variant="body1">{extName}</Typography></Link> : null;
  return (
    // <Link to={to}>
    <Grid item xs={12} sm={6} md={4}>

      <Card className='grid-card'>
        <Link to={to}>
          <CardMedia
          // image={image}
            component="img"
            height="140"
            image={'/img/test/abr.jpg'}

            title={name}
          />
        </Link>
        <CardContent className='grid-card__content'>
          <Typography variant="h6">
            {name}
          </Typography>
          <Typography variant="body1">
            {date}
          </Typography>
          <Typography variant="body1">
            {status}
          </Typography>
          {extLink}

        </CardContent>
      </Card>

    </Grid>
    // {/* </Link> */}
  );
};
