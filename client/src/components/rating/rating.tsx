import { styled } from '@mui/material/styles';
import { Rating as MR } from '@mui/material/';
import { SentimentSatisfiedAlt, EmojiEmotions } from '@mui/icons-material/';
import { Color } from '../../const/const';
import { Box, Typography } from '@mui/joy';
import { ChangeEventHandler, SyntheticEvent } from 'react';


const StyledRating = styled(MR)({
  '& .MuiRating-iconFilled': {
    color: Color.Gold,
  },
  '& .MuiRating-iconHover': {
    color: Color.GoldD,
  },

  '& .MuiRating-iconDisabled': {
    color: Color.GoldD,
  },
});


export const Rating = ({avgRate, numberOfRate} : {avgRate: number | null; numberOfRate: string | null}) => {


  const defaultValue = Math.round((avgRate || 0) * 10) / 10;
  const num = numberOfRate || '0';

  const handleChangeRate: ChangeEventHandler<HTMLInputElement> = (evt) => console.log(evt.currentTarget.value);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <StyledRating

        onChange={(handleChangeRate as unknown) as ((event: SyntheticEvent<Element, Event>) => void)}
        name="customized-color"
        defaultValue={defaultValue}
        precision={1}
        icon={<EmojiEmotions fontSize="inherit" />}
        emptyIcon={<SentimentSatisfiedAlt fontSize="inherit" />}
        max={10}
      />
      <Typography fontSize={20} fontWeight='700'>
        &nbsp;{defaultValue}&nbsp;
      </Typography>
      <Typography fontSize={14}>
      (оценили: {num})
      </Typography>

    </Box>

  );};
