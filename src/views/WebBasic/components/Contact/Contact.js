import React from 'react';
import Slider from 'react-slick';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

const mock = [
  {
    heading: 'Affiliate Link Protection',
    newsTitle:
      'Safeguard Your Affiliate Links from Unauthorized Access and Click Fraud with Trafficanalytic Advancced Protection Features',
    avatar: './images/s1.png',
  },
  {
    heading: 'Geo Targeting',
    newsTitle:
      'Our platform accomodated global locations and countries, allowing yout to easily target specific locations of your choice',
    avatar: './images/s2.png',
  },
  {
    heading: 'Fingerprinting',
    newsTitle:
      'We gather extensive visitor information across network, Http, and Javascript contexts, forming browser fingerprints.',
    avatar: './images/s3.jpg',
  },
  {
    heading: 'Page Gaurd',
    newsTitle:
      'Protect your pages from spyware parsing and from un-authorized direct acess  forming browser fingerprints.',
    avatar: './images/s5.jpg',
  },
  {
    heading: 'Fraud Prevention',
    newsTitle:
      'Our platform efficiently filters out unwanted IPs including virtual servers, VPNs, and other non-genuine visitors',
    avatar: './images/s4.jpg',
  },
];

const LatestNews = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: !isMd,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: isMd,

  };

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position={'relative'} zIndex={2}   >

        <Box
          sx={{
            height: { xs: 'auto', md: 1 },
            '& .slick-slide img': {
              objectFit: 'cover',
            },
            '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div': {
              height: { xs: 'auto', md: 1 },
            },
            '& .slick-prev, & .slick-next': {
              zIndex: 2,
              bottom: 0,
              top: '100%',
              left: '100%',
              right: 0,
              transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
              marginLeft: theme.spacing(-2),
              width: 32,
              height: 32,
              '&:before': {
                fontSize: 32,
                color: 'black',
              },
            },
            '& .slick-prev': {
              marginLeft: theme.spacing(-7),
            },
          }}
        >
          <Slider {...sliderOpts}>
            {mock.map((item, i) => (
              <Box key={i}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    boxShadow: 0,
                    background: 'transparent',
                    
                  }}
                >
                  <CardMedia
                    image={item.avatar}
                    sx={{
                      height: 300,
                      width: '100%',
                      maxWidth: 400,
                      borderRadius: 2,
                      margin: { xs: '0 auto', md: 'none' },
                    }}
                  />
                  <CardContent
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      marginLeft: { sx: 0, md: 2 },
                    }}
                  >
                    <Box>
                      <Typography
                        color="text.primary"
                        variant={'h2'}
                    
                        sx={{
                          textAlign: { xs: 'center', md: 'left' },
                          fontFamily: 'Playfair Display', // Replace YourFontFamily with the appropriate font family
                          fontWeight: 'bold',
                        }}
                      >
                        {item.heading}
                      </Typography>
                      <Typography
                        color="text.primary"
                        variant={'h5'}
                        sx={{
                          textAlign: { xs: 'center', md: 'left' },
                          fontWeight: 'bold',
                        }}
                      >
                        {item.newsTitle}
                      </Typography>

                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default LatestNews;
