import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';



const mock = [
  {
    image: './images/i1.jpg',


    title: 'TIMEZONE DETECTION',
    author: {
      name: 'additional description',

    },

  },
  {
    image: './images/i2.jpg',
    title: 'CUSTOM FILTERS',

    author: {
      name: 'additional description',

    },

  },
  {
    image: './images/i3.png',


    title: 'URL SHORTNER',
    author: {
      name: 'additional description',
    },

  },
  {
    image: './images/i4.jpg',


    title: 'URL ROTATION',
    author: {
      name: 'additional description',

    },

  },
  {
    image: './images/i5.jpeg',


    title: 'ANTI-FRAUD PROTECTION',
    author: {
      name: 'additional description',

    },

  },
  {
    image: './images/i6.jpg',


    title: 'AFFILIATE LINK CLOAKING',
    author: {
      name: 'additional description',

    },

  },
  {
    image: './images/i7.png',


    title: 'TOKENS PASSING',
    author: {
      name: 'additional description',

    },

  },
  {
    image: './images/i8.jpeg',


    title: 'SUPPORT ALL NETWORKS',
    author: {
      name: 'additional description',

    },

  },
  {
    image: './images/19.jpeg',


    title: 'DETAILED ANALYTICS',
    author: {
      name: 'additional description',

    },

  },
];



const About = () => {

  const theme = useTheme();
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}

      >
        <Box>
          <Typography variant={'h2'} gutterBottom textAlign={'center'} justifyContent={'center'} sx={{
            fontFamily: 'Playfair Display',
            fontWeight: 'bold'
          }}>
            Our Features
          </Typography>

        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>

        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={5} md={4} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={0}
                sx={{ bgcolor: 'transparent', backgroundImage: 'none' }}
              >
                <CardMedia
                  title={item.title}
                  image={item.image}
                  sx={{
                    width: { xs: 250, md: 500 },
                    height: { xs: 150, md: 150 },
                    position: 'relative',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
                <Box
                  width={'90%'}
                  margin={'0 auto'}
                  display={'flex'}
                  flexDirection={'column'}
                  boxShadow={3}
                  borderRadius={2}
                  bgcolor={'background.paper'}
                  position={'relative'}
                  zIndex={3}
                  sx={{ transform: 'translateY(-30px)' }}
                >
                  <Box component={CardContent} position={'relative'}>
                    <Typography fontSize={22} gutterBottom sx={{
                      fontFamily: 'Playfair Display', // Replace YourFontFamily with the appropriate font family
                      fontWeight: 'bold',
                    }}>
                      {item.title}
                    </Typography>

                  </Box>
                  <Box flexGrow={1} />
                  <Box padding={2} display={'flex'} flexDirection={'column'}>
                    <Box marginBottom={1}>
                      <Divider />
                    </Box>
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Box display={'flex'} alignItems={'center'}>

                        <Typography color={'text.secondary'} sx={{

                          fontFamily: 'Playfair Display', // Replace YourFontFamily with the appropriate font family
                          fontWeight: 'bold',
                        }} >
                          {item.author.name}
                        </Typography>
                      </Box>
                      <Typography color={'text.secondary'}>

                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default About;
