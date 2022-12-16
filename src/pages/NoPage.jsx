import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import {
  Alert,
  AlertTitle,
  Box,
  createTheme,
  ThemeProvider
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
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh'
        }}
      >
        <Alert
          variant='outlined'
          severity='error'
          sx={{
            width: '50%',
            fontSize: '1.5rem'
          }}
        >
          <AlertTitle
            sx={{
              fontSize: '2.5rem',
              textAlign: 'center'
            }}
          >
            404 Error
          </AlertTitle>
          Something seems to have gone wrong, sorry about that! Please click <a href='/' style={{color: 'red'}}>HERE</a> to return to my portfolio.
        </Alert>
      </Box>
    </ThemeProvider>
  )
}