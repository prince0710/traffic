import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, ThemeProvider } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} >
        <Grid item xs={12} md={4} >
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Box
              component="a"
              href="/"
              title="theFront"
              width={80}
              mb={1}
            >
              {/* Your image goes here */}
            </Box>
            <Typography
              style={{ fontFamily: 'Playfair Display', fontSize: 40, fontWeight: 700, textDecoration: 'none', color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
              variant="h3"
              align="center"
            >
              TrafficAnalytics
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Typography style={{  fontFamily: 'Playfair Display', color: theme.palette.mode === 'dark' ? 'white' : 'black' , fontWeight: 'bold' }} variant="h4" >Main Office</Typography>
            <Typography style={{  fontFamily: 'Playfair Display', color: theme.palette.mode === 'dark' ? 'white' : 'black' , fontWeight: 'bold'}} variant="body1" >123 Anywhere St.<br />Any City, State<br />Any Country<br />(123) 456 7890</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Typography variant="h4" style={{ fontFamily: 'Playfair Display', color: theme.palette.mode === 'dark' ? 'white' : 'black' , fontWeight: 'bold'}} >Social Media</Typography>
            <Typography variant="body1" style={{ fontFamily: 'Playfair Display', color: theme.palette.mode === 'dark' ? 'white' : 'black' , fontWeight: 'bold'}} >
              Facebook<br />
              Instagram<br />
              Twitter
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography align={'center'} style={{ fontFamily: 'Lato, sans-serif', color: theme.palette.mode === 'dark' ? 'white' : 'black' , fontWeight: 'bold' }} variant={'subtitle2'} gutterBottom>
            &copy; TrafficAnalytic 2021, Maccarian. All rights reserved
          </Typography>
          <Typography align={'center'} style={{ fontFamily: 'Lato, sans-serif', color: theme.palette.mode === 'dark' ? 'white' : 'black' , fontWeight: 'bold' }} variant={'caption'} component={'p'}>
            When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Footer;
