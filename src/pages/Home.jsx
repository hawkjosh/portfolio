import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import myAvatar from '../assets/img/my-avatar.svg'
import laptop from '../assets/img/laptop.svg'
import family from '../assets/img/family.svg'
import tennessee from '../assets/img/tennessee.svg'

import {
  Box,
  createTheme,
  Divider,
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
  const isTablet = useMediaQuery({ minWidth: 550, maxWidth: 1000 })
  return isTablet ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 550 })
  return isMobile ? children : null
}

export default function App() {

  return (
    <ThemeProvider theme={theme}>

      {/* for laptop/desktop displays (horizontal layout) */}

      <Laptop>
        <Box
          style={{ textAlign: 'center' }}
          >
          <Box
            component='img'
            src={myAvatar}
            alt='Josh Hawk Avatar'
            sx={{ width: '25%' }}
          />
        
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              margin: '0rem 2.5% 3rem'
            }}
            >
            <Box>
              <Box
                component='img'
                src={laptop}
                alt='Laptop Icon'
                sx={{ width: '30%' }}
              />
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.75rem',
                  lineHeight: '3rem'
                }}
                >
                Emerging Developer
              </Typography>
            </Box>
            <Box sx={{ marginTop: '3.25rem'}}>
              <Box
                component='img'
                src={family}
                alt='Family Icon'
                sx={{ width: '30%' }}
              />
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.75rem',
                  lineHeight: '3rem'
                }}
                >
                Super Dad/Husband
              </Typography>
            </Box>
            <Box>
              <Box
                component='img'
                src={tennessee}
                alt='UT Icon'
                sx={{ width: '30%' }}
              />
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.75rem',
                  lineHeight: '3rem'
                }}
                >
                Vol For Life
              </Typography>
            </Box>
          </Box>
        </Box>
      </Laptop>

      {/* for tablet displays (vertical layout) */}

      <Tablet>
        <Box
          style={{ textAlign: 'center' }}
          >
          <Box
            component='img'
            src={myAvatar}
            alt='Josh Hawk Avatar'
            sx={{ width: '50%'}}
          />
    
          <Divider
            sx={{
              background: 'white',
              borderBottomWidth: 1.15,
              margin: '2.5rem 10%'
            }}
          />
    
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0rem 12.5% 3rem',
            }}
            >
            <Box
              sx={{ marginTop: '0rem ' }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.85rem',
                  lineHeight: '2.25rem'
                }}
                >
                Emerging Developer
              </Typography>
              <Box
                component='img'
                src={laptop}
                alt='Laptop Icon'
                sx={{  marginTop: '0.75rem', width: '30%' }}
              />
            </Box>
            <Box
              sx={{ marginTop: '2.5rem ' }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.85rem',
                  lineHeight: '2.25rem'
                }}
                >
                Super Dad/Husband
              </Typography>
              <Box
                component='img'
                src={family}
                alt='Family Icon'
                sx={{  marginTop: '0.75rem', width: '30%' }}
              />
            </Box>
            <Box
              sx={{ marginTop: '2.5rem ' }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.85rem',
                  lineHeight: '2.25rem'
                }}
                >
                Vol For Life
              </Typography>
              <Box
                component='img'
                src={tennessee}
                alt='UT Icon'
                sx={{  marginTop: '0.75rem', width: '30%' }}
              />
            </Box>
          </Box>
        </Box>
      </Tablet>

      {/* for mobile displays (vertical layout) */}

      <Mobile>
        <Box
          style={{ textAlign: 'center' }}
          >
          <Box
            component='img'
            src={myAvatar}
            alt='Josh Hawk Avatar'
            sx={{ width: '65%' }}
          />
        
          <Divider
            sx={{
              background: 'white',
              borderBottomWidth: 1.15,
              margin: '2rem 8%'
            }}
          />
    
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0rem 2.5% 3rem'
            }}
            >
            <Box
              sx={{ marginTop: '0rem ' }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.5rem',
                  lineHeight: '2.75rem'
                }}
                >
                Emerging Developer
              </Typography>
              <Box
                component='img'
                src={laptop}
                alt='Laptop Icon'
                sx={{  marginTop: '0.5rem', width: '35%' }}
              />
            </Box>
            <Box
              sx={{
                marginTop: '2.75rem'
              }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.5rem',
                  lineHeight: '2.75rem'
                }}
                >
                Super Dad/Husband
              </Typography>
              <Box
                component='img'
                src={family}
                alt='Family Icon'
                sx={{  marginTop: '0.5rem', width: '35%' }}
              />
            </Box>
            <Box
              sx={{
                marginTop: '2.75rem'
              }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.5rem',
                  lineHeight: '2.75rem'
                }}
                >
                Vol For Life
              </Typography>
              <Box
                component='img'
                src={tennessee}
                alt='UT Icon'
                sx={{  marginTop: '0.5rem', width: '35%' }}
              />
            </Box>
          </Box>
        </Box>
      </Mobile>

    </ThemeProvider>
  )
}