import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import socialNetwork from '../assets/img/portfolio/social_network.png'

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
      xxs: 0,     // Change to 'zero'
      xs: 375,     // DELETE THIS ONE
      sm: 428,     // Change to 'mobile'
      md: 768,     // Change to 'tabletSmall'
      tabletLarge: 820,     // ADD THIS ONE
      // Breakpoints below change to horizontal layout
      lg: 1024,     // Change to 'laptopSmall: 1263'
      xl: 1440,     // Change to 'laptopLarge: 1519'
      xxl: 1620     // DELETE THIS ONE
    }
  }
})

// const Laptop = ({ children }) => {
//   const isLaptop = useMediaQuery({ minWidth: 1000 })
//   return isLaptop ? children : null
// }

// const Tablet = ({ children }) => {
//   const isTablet = useMediaQuery({ minWidth: 551, maxWidth: 999 })
//   return isTablet ? children : null
// }

// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 550 })
//   return isMobile ? children : null
// }

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
          src={socialNetwork}
          alt="Social Network App"
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
          An efficient and polished full-stack social network app that uses React.js on the client-side with Tailwind frameworks for styling. The server-side is built with Express.js including MongoDB as the ODM, GraphQL for runtime API's, and JWT for authentication.
        </Typography>
      </Box>
    </ThemeProvider>
  )
}