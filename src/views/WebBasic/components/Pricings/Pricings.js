import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const mock = [
  {
    title: 'Starter Plan',
    price: '$49',
    features: ['1 Campaign',
      ' 10k Clicks/Day',
      ' GCLID Tracker',
      ' Page Gaurd',
      'URL Shortener',
      'UTM Builder',
      ' PHP/JS/WP Integration',
      ' Realtime Traffic',
      'Page Builder',
      'Bots Check Tool'],
    isHighlighted: false,
  },
  {
    title: 'Advance Plan',
    price: '$99',
    features: [
      ' 5 Campaigns',
      'Unlimited Clicks',
      'GCLID Tracker',
      'Page Gaurd',
      ' URL Shortener',
      '  UTM Builder',
      ' PHP/JS/WP Integration',
      '  Realtime Traffic',
      '  Page Builder',
      '    Bots Check Tool',
    ],
    isHighlighted: true,
  },
  {
    title: 'Premium Plan',
    price: '$149',
    features: [
      ' Unlimited Campaigns',
      'Unlimited Clicks',
      'GCLID Tracker',
      'Page Gaurd',
      'URL Shortener',
      'UTM Builder',
      'PHP / JS / WP Integration',
      'Realtime Traffic',
      'Page Builder',
      'Bots Check Tool',
    ],
    isHighlighted: true,
  },
  {
    title: 'Special Plan',
    price: '**',
    features: [
      'All features',
      'Email support',
      'Google Ads',
      'SSO via Google',
      'API access',
      'Facebook Ads',
    ],
    isHighlighted: false,
  },
];

const Pricing = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Pricing
        </Typography>
        <Typography
          variant={'h4'}
          align={'center'}
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Flexible and transparent pricing
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          Our offers evolve according to your needs.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Box
              component={Card}
              height={1}
              display={'flex'}
              flexDirection={'column'}
              boxShadow={item.isHighlighted ? 4 : 0}
            >
              <CardContent
                sx={{
                  padding: 4,
                }}
              >
                <Box
                  marginBottom={4}
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <Typography variant={'h4'}>
                    <Box component={'span'} fontWeight={600}>
                      {item.title}
                    </Box>
                  </Typography>
                  <Box display={'flex'} alignItems={'baseline'}>
                    <Typography variant={'h4'} color={'primary'}>
                      <Box component={'span'} fontWeight={600}>
                        {item.price}
                      </Box>
                    </Typography>
                    <Typography variant={'subtitle2'} color={'text.secondary'}>
                      /mo
                    </Typography>
                  </Box>
                </Box>
                <Grid container spacing={1}>
                  {item.features.map((feature, j) => (
                    <Grid item xs={12} key={j}>
                      <Box
                        component={ListItem}
                        disableGutters
                        width={'auto'}
                        padding={0}
                      >
                        <Box
                          component={ListItemAvatar}
                          minWidth={'auto !important'}
                          marginRight={2}
                        >
                          <Box
                            component={Avatar}
                            bgcolor={theme.palette.secondary.main}
                            width={20}
                            height={20}
                          >
                            <svg
                              width={12}
                              height={12}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Box>
                        </Box>
                        <ListItemText primary={feature} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
              <Box flexGrow={1} />
              <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                <Button size={'large'} variant={'contained'}>
                  Buy Now
                </Button>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
