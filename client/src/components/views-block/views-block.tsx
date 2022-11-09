import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';

type ViewsProps = {
  views: string | null;
  totalViews: string| null;
}

export const ViewsBlock = ({totalViews, views}: ViewsProps) => (

  <Box sx={{ display: 'flex' }}>

    <VisibilityIcon/>
    <Typography component={'p'} fontSize={13} fontWeight={'400'}>
      {views} (за неделю);   {totalViews} (за вме время)
    </Typography>
  </Box>
);
