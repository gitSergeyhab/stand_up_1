import { Typography } from '@mui/material';


export const Titles = ({first = '', second = ''} : {first: string; second: string}) => (
  <>
    <Typography component={'h1'} fontSize={30} fontWeight={'700'} >
      {first}
    </Typography>
    <Typography component={'h2'} fontSize={27} fontWeight={'400'}>
      {second}
    </Typography>
  </>
);
