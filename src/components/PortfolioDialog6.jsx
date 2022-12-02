import * as React from 'react'

import workdayScheduler from '../assets/img/portfolio/workday_scheduler.png'

import {
  Box,
  createTheme,
  ThemeProvider,
  Typography
} from '@mui/material'

const theme = createTheme({
  breakpoints: {
    values: {
      // Breakpoints below use vertical layout
      xxs: 0,
      xs: 375,
      sm: 425,
      md: 768,
      // Breakpoints below change to horizontal layout
      lg: 1024,
      xl: 1440,
      xxl: 1620
    }
  }
});

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          component='img'
          src={workdayScheduler}
          alt="Workday Scheduler App"
          sx={{
            border: '4px solid white',
            borderRadius: '10px',
            marginBottom: {
              md: '0.75rem'
            },
            width: {
              xxs: '90%',
              md: '75%',
              lg: '65%',
              xl: '60%'
            }
          }}
        />
        <Typography
          sx={{
            color: 'white',
            width: {
              xxs: '90%',
              md: '75%',
              lg: '65%',
              xl: '60%'
            },
            marginTop: '1.25rem',
            textAlign: 'justify',
            fontWeight: '300',
            fontSize: {
              xxs: '0.9rem',
              xs: '1rem',
              sm: '1.1rem',
              md: '1.25rem',
              lg: '1.35rem',
              xl: '1.45rem',
              xxl: '1.5rem'
            },
            lineHeight: {
              xxs: '1.25rem',
              xs: '1.35rem',
              sm: '1.45rem',
              md: '1.5rem',
              lg: '1.65rem',
              xl: '1.75rem',
              xxl: '1.85rem'
            },
            letterSpacing: {
              xxs: '0.07rem',
              xs: '0.15rem',
              sm: '0.22rem',
              md: '0.25rem',
              lg: '0.3rem',
              xl: '0.4rem',
              xxl: '0.45rem'
            }
          }}
        >
          A simple calendar/planner app that runs in the browser and features dynamically updated HTML and CSS powered by jQuery.
        </Typography>
      </Box>
    </ThemeProvider>
  )
}