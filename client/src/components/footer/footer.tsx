import { Container, Typography, Paper, Box } from '@mui/material';


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
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            my:1,
            color: 'white'
          }}
        >
          <div>
            {/* <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" /> */}
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            mb: 2,
          }}
        >
          <Typography variant="caption">
              Copyright ©2022. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
