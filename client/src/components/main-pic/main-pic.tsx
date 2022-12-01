import { Box } from '@mui/material';
import { DefaultPath } from '../../const/const';

export const MainPic = ({src, alt} : {src: string | null; alt: string}) => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    {/* <img src={DefaultPath.ComedianAvatar} alt={alt} width={'70%'}/> */}

    <img src={src || DefaultPath.ComedianAvatar} alt={alt} width={'70%'}/>
  </Box>

);
