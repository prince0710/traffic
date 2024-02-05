import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Button, Divider, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Slider from 'react-slick';

// import styled from 'styled-components';

const Services = () => {
  const buttonStyles = [
    { backgroundColor: 'primary', borderRadius: '12px', color: 'white', margin: '3rem' },
    { backgroundColor: 'maroon', borderRadius: '12px', color: 'white', margin: '4rem' },
    { backgroundColor: 'green', borderRadius: '12px', color: 'white', margin: '3rem' },
    { backgroundColor: 'primary', borderRadius: '12px', color: 'white', margin: '3rem' },
    { backgroundColor: 'maroon', borderRadius: '12px', color: 'white', margin: '4rem' },
    { backgroundColor: 'green', borderRadius: '12px', color: 'white', margin: '3rem' },

  ];
  // slidesToShow:isMd ? 3 : 1,
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: isMd ? 3 : 1,
  };


  return (
    <Box sx={{
      height: { xs: 'auto', md: 1 },
      '& .slick-slide img': {
        objectFit: 'cover',
      },
      '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div': {
        height: { xs: 'auto', md: 1 },
      },
      '& .slick-prev, & .slick-next': {

        transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
        marginLeft: theme.spacing(-2),
        width: 20,
        height: 32,
        '&:before': {
          fontSize: 32,
          color: 'black',
        },
      },
      '& .slick-prev': {
        marginLeft: theme.spacing(-7),
      },
    }}>
      <Typography variant='h2' sx={{
        fontFamily: 'Playfair Display',
        fontWeight: 'bold'
      }}> Our Platform</Typography>
      <Slider {...settings}>

        <div>
          <Grid item xs={6} sm={4} lg={2} margin={3} >
            <Card sx={{ border: '1px solid black', width: '20rem', height: '28rem', bgcolor: 'white', borderTopLeftRadius: '45px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '45px', padding: '0px' }}>
              <CardContent margin={20}>
                <Card sx={{ borderTopLeftRadius: '45px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '45px', marginTop: '0px' }}>
                  <img src="./images/i7.png" alt="image" height={130} width={300}
                  />
                </Card>
                <Typography fontSize={30} color="black" fontWeight="bold" gutterBottom sx={{
                  fontFamily: 'Playfair Display',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}>
                  IPv4 and IPv6
                </Typography>
                <Typography color="black" fontSize={20} gutterBottom sx={{
                  fontWeight: 'bold',
                  textAlign: 'center'

                }}>
                  Cutting Edge Detection
                </Typography>
                <Divider color="black" />
                <Typography fontsize={15} color="darkblue" sx={{ textAlign: 'center', fontWeight: 'bold', marginTop:'5px'}} >
                  TrafficShield is compatible with both the conventional IPv4 and the cutting-edge IPv6 addressing protocols.
                </Typography>
                <Button variant='contained' sx={{ px: 6 }} style={buttonStyles[0]}>
                  Find Out More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>

        <div>
          <Grid item xs={6} sm={4} lg={2} margin={3}>
            <Card sx={{ border: '1px solid black', width: '20rem', height: '28rem', bgcolor: 'lightpink', borderTopLeftRadius: '45px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '45px' }}>
              <CardContent>
                <Card sx={{ borderTopLeftRadius: '45px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '45px', marginTop: '0px' }}>
                  <img src="./images/i7.png" alt="image" height={130} width={300}
                  />
                </Card>
                <Typography fontSize={30} color="black" fontWeight="bold" gutterBottom sx={{
                  fontFamily: 'Playfair Display',
                  fontWeight: 'bold'
                }}>
                  Realtime Reporting
                </Typography>
                <Typography color="black" fontSize={20} gutterBottom sx={{
                  fontWeight: 'bold'
                }}>
                  Detailed Clicklogs
                </Typography>
                <Divider color="black" />
                <Typography fontsize={15} color="black" fontStyle='italic'>
                  Trafficshield can handle millions of clicks daily without hassle and accurate in generating realtime logs
                </Typography>
                <Button variant='contained' sx={{ px: 4 }} style={buttonStyles[1]}>Find Out More</Button>
              </CardContent>
            </Card>
          </Grid>
        </div>

        <div>
          <Grid item xs={6} sm={4} lg={2} margin={3}>
            <Card sx={{ border: '1px solid black', width: '20rem', height: '28rem', bgcolor: 'lightgreen', borderTopLeftRadius: '45px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '45px' }}>
              <CardContent>
                <Card sx={{ borderTopLeftRadius: '45px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '45px', marginTop: '0px' }}>
                  <img src="./images/i7.png" alt="image" height={130} width={300}
                  />
                </Card>
                <Typography fontSize={30} color="black" fontWeight="bold" gutterBottom sx={{
                  fontFamily: 'Playfair Display',
                  fontWeight: 'bold'
                }}>
                  Campaign Scheduling
                </Typography>
                <Typography color="black" fontSize={20} gutterBottom sx={{
                  fontWeight: 'bold'
                }}>
                  Hassel Free Handling
                </Typography>
                <Divider color="black" />
                <Typography fontsize={15} color="black" fontStyle='italic'>
                  Use our Traffic Scheduling option to schedule your cloaking campaigns by a given time zone, days of the week, hours & minutes.
                </Typography>
                <Button variant='contained' sx={{ px: 6 }} style={buttonStyles[2]}>Find Out More</Button>
              </CardContent>
            </Card>
          </Grid>
        </div>

        <div>
          <Grid item xs={6} sm={4} lg={2} margin={3} >
            <Card sx={{ border: '1px solid black', width: '20rem', height: '28rem', bgcolor: 'lightblue', borderTopLeftRadius: '45px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '45px' }}>
              <CardContent >
                <Card sx={{ borderTopLeftRadius: '45px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '45px', marginTop: '0px' }}>
                  <img src="./images/i7.png" alt="image" height={130} width={300}
                  />
                </Card>
                <Typography fontSize={30} color="black" fontWeight="bold" gutterBottom sx={{
                  fontFamily: 'Playfair Display',
                  fontWeight: 'bold'
                }}>
                  IPv4 and IPv6
                </Typography>
                <Typography color="black" fontSize={20} gutterBottom sx={{
                  fontWeight: 'bold'
                }}>
                  Cutting Edge Detection
                </Typography>
                <Divider color="black" />
                <Typography fontsize={15} color="black" fontStyle='italic'>
                  TrafficShield is compatible with both the conventional IPv4 and the cutting-edge IPv6 addressing protocols.
                </Typography>
                <Button variant='contained' sx={{ px: 6 }} style={buttonStyles[3]}>Find Out More</Button>
              </CardContent>
            </Card>
          </Grid>
        </div>

        <div>
          <Grid item xs={6} sm={4} lg={2} margin={3}>
            <Card sx={{ border: '1px solid black', width: '20rem', height: '28rem', bgcolor: 'lightpink', borderTopLeftRadius: '45px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '45px' }}>
              <CardContent>
                <Card sx={{ borderTopLeftRadius: '45px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '45px', marginTop: '0px' }}>
                  <img src="./images/i7.png" alt="image" height={130} width={300}
                  />
                </Card>
                <Typography fontSize={30} color="black" fontWeight="bold" gutterBottom sx={{
                  fontFamily: 'Playfair Display',
                  fontWeight: 'bold'
                }}>
                  Realtime Reporting
                </Typography>
                <Typography color="black" fontSize={20} gutterBottom sx={{
                  fontWeight: 'bold'
                }}>
                  Detailed Clicklogs
                </Typography>
                <Divider color="black" />
                <Typography fontsize={15} color="black" fontStyle='italic'>
                  Trafficshield can handle millions of clicks daily without hassle and accurate in generating realtime logs
                </Typography>
                <Button variant='contained' sx={{ px: 4 }} style={buttonStyles[4]}>Find Out More</Button>
              </CardContent>
            </Card>
          </Grid>
        </div>

        <div>
          <Grid item xs={6} sm={4} lg={2} margin={3}>
            <Card sx={{ border: '1px solid black', width: '20rem', height: '28rem', bgcolor: 'lightgreen', borderTopLeftRadius: '45px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '45px' }}>
              <CardContent>
                <Card sx={{ borderTopLeftRadius: '45px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '45px', marginTop: '0px' }}>
                  <img src="./images/i7.png" alt="image" height={130} width={300}
                  />
                </Card>
                <Typography fontSize={30} color="black" fontWeight="bold" gutterBottom sx={{
                  fontFamily: 'Playfair Display',
                  fontWeight: 'bold'
                }}>
                  Campaign Scheduling
                </Typography>

                <Typography color="black" fontSize={20} gutterBottom sx={{
                  fontWeight: 'bold'
                }}>
                  Hassel Free Handling
                </Typography>
                <Divider color="black" />
                <Typography fontsize={15} color="black" fontStyle='italic' sx={{

                }}>
                  Use our Traffic Scheduling option to schedule your cloaking campaigns by a given time zone, days of the week, hours & minutes.
                </Typography>
                <Button variant='contained' sx={{ px: 6 }} style={buttonStyles[5]}>Find Out More</Button>
              </CardContent>
            </Card>
          </Grid>
        </div>


      </Slider >

    </Box>


  );
};

export default Services;
