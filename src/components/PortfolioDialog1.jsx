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
      zero: 0,
      mobile: 428,
      tabletSmall: 768,
      tabletLarge: 820,
      // Breakpoints below change to horizontal layout
      laptopSmall: 1263,
      laptopLarge: 1519
    }
  }
})

const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({ minWidth: 1000 })
  return isLaptop ? children : null
}

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 551, maxWidth: 999 })
  return isTablet ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 550 })
  return isMobile ? children : null
}

export default function PortfolioDialog1() {

  return (
    <ThemeProvider theme={theme}>

      {/* for laptop/desktop displays (horizontal layout) */}

      <Laptop>
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
              marginBottom: '0.75rem',
              width: { laptopSmall: '65%', laptopLarge: '60%' }
            }}
          />
          <Typography
            sx={{
              color: 'white',
              width: { laptopSmall: '65%', laptopLarge: '60%' },
              marginTop: '1.25rem',
              textAlign: 'justify',
              fontWeight: '300',
              fontSize: { laptopSmall: '1.35rem', laptopLarge: '1.45rem' },
              lineHeight: { laptopSmall: '1.65rem', laptopLarge: '1.75rem' },
              letterSpacing: { laptopSmall: '0.3rem', laptopLarge: '0.4rem' }
            }}
            >
            An efficient and polished full-stack social network app that uses React.js on the client-side with Tailwind frameworks for styling. The server-side is built with Express.js including MongoDB as the ODM, GraphQL for runtime API's, and JWT for authentication.
          </Typography>
        </Box>
      </Laptop>

      {/* for tablet displays (vertical layout) */}

      <Tablet>
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
              marginBottom: '0.75rem',
              width: '75%'
            }}
          />
          <Typography
            sx={{
              color: 'white',
              width: '75%',
              marginTop: '1.25rem',
              textAlign: 'justify',
              fontWeight: '300',
              fontSize: '1.25rem',
              lineHeight: '1.5rem',
              letterSpacing: '0.25rem'
            }}
            >
            An efficient and polished full-stack social network app that uses React.js on the client-side with Tailwind frameworks for styling. The server-side is built with Express.js including MongoDB as the ODM, GraphQL for runtime API's, and JWT for authentication.
          </Typography>
        </Box>
      </Tablet>

      {/* for mobile displays (vertical layout) */}

      <Mobile>
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
              width: '90%'
            }}
          />
          <Typography
            sx={{
              color: 'white',
              width: '90%',
              marginTop: '1.25rem',
              textAlign: 'justify',
              fontWeight: '300',
              fontSize: { zero: '0.9rem', mobile: '1.1rem' },
              lineHeight: { zero: '1.25rem', mobile: '1.45rem' },
              letterSpacing: { zero: '0.07rem', mobile: '0.22rem' }
            }}
            >
            An efficient and polished full-stack social network app that uses React.js on the client-side with Tailwind frameworks for styling. The server-side is built with Express.js including MongoDB as the ODM, GraphQL for runtime API's, and JWT for authentication.
          </Typography>
        </Box>
      </Mobile>

    </ThemeProvider>
  )
}