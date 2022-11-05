import { Container, Typography, Paper, Box } from '@mui/material';
import { Color } from '../../const';

export default function Footer() {
  return (
    <Paper sx={{marginTop: 'calc(10% + 60px)',
      width: '100%',
      position: 'fixed',
      marginRight: 'auto',
      bottom: 0,
      background: '#300606',
      color: 'white'
    }} component="footer" square variant="outlined"
    >
      <Container maxWidth="lg" component={'footer'}>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
          // mb: 2,
          }}
        >
          <Typography variant="caption" color={Color.Gold}>
              Copyright ©2022. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
