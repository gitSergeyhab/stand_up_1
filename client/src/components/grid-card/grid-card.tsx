
import { DefaultPath } from '../../const/const';
import { GridCardType } from '../../types/types';
import { getFormatDate } from '../../utils/date-utils';
import { Card, CardContent, CardLink, DateCard, ExtLink, Img, StatusCard, TitleCard } from './grid-card-style';


export const GridCard = ( {card}: {card: GridCardType} ) => {

  const {type, id, name, date, status, picture, extName, extId, extType} = card;
  const image = picture ? picture : DefaultPath.Any;
  const to = `/${type}/${id}/info`;
  const toExt = extType ? `/${extType}/${extId || ''}/info` : '';


  const titleElement = name ? <TitleCard> { name } </TitleCard> : null;
  const dateElement = date ? <DateCard> { getFormatDate(date, 'DD.MM.YYYY') } </DateCard> : null;
  const statusElement = status ? <StatusCard> { status } </StatusCard> : null;
  const extLink = extId ? <ExtLink to={toExt}>{extName}</ExtLink> : null;


  return (
    <Card className='grid-card'>
      <CardLink to={to} className='grid-card__link'>
        <Img src={image}/>

      </CardLink>
      <CardContent className='grid-card__content'>
        {titleElement}
        {dateElement}
        {statusElement}
        {extLink}

      </CardContent>
    </Card>
  );
};
