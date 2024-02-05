/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {  useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
                fontFamily: 'Playfair Display', 
              }}
            >
              Guard Your Online World: {' '}
              <Typography
                component={'span'}
                variant={'inherit'}
                color={'primary'}
                fontStyle={'italic'}

               
              >
                AI-Driven Traffic Filtering.
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{
                fontWeight: 'bold'
              }}
            >
              Effortlessly block bots and proxies, ensuring simple, effective, and reliable online security.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              component={'a'}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              href={'https://mui.com/store/items/the-front-landing-page/'}
              target={'_blank'}
            >
              Get Started
            </Button>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            >

            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={1} width={1} maxWidth={700} border>
            <Box
              component={'img'}
              src={'./images/hero-img.png'}
              width={1}
              height={1}
              border={2}
              borderRadius={10}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
                transition: 'transform 0.3s, opacity 0.3s', // Adding transition for smooth animation
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly scale up on hover
                  opacity: 0.9, // Reduce opacity on hover
                },
              }}
            />


          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
