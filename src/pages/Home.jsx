import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import myAvatar from '../assets/img/my_avataaars.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  const isTablet = useMediaQuery({ minWidth: 551, maxWidth: 999 })
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
    
          <Typography
            sx={{
              fontSize: { laptopSmall: '5.5rem', laptopLarge: '6rem' },
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginTop: { laptopSmall: '1.5rem', laptopLarge: '0rem' }
            }}
            >
            Josh Hawk
          </Typography>
    
          <Divider
            sx={{
              background: 'white',
              borderBottomWidth: 2,
              marginX: '5%',
              marginTop: { laptopSmall: '1.5rem', laptopLarge: '1rem' },
              marginBottom: { laptopSmall: '3rem', laptopLarge: '2.5rem' }
            }}
          />
    
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginX: '5%',
              marginBottom: '3.5rem',
              flexDirection: 'row'
            }}
            >
            <Box
              sx={{ margin: '0rem 2rem' }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: { laptopSmall: '1.55rem', laptopLarge: '1.75rem' },
                  lineHeight: { laptopSmall: '2.75rem', laptopLarge: '3rem' }
                }}
                >
                Emerging Developer
              </Typography>
              <Box
                sx={{
                  color: 'var(--secondary)',
                  fontSize: { laptopSmall: '3.25rem', laptopLarge: '3.5rem' }
                }}
                >
                <FontAwesomeIcon icon='laptop-code' />
              </Box>
            </Box>
            <Box
              sx={{ margin: '0rem 2rem' }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: { laptopSmall: '1.55rem', laptopLarge: '1.75rem' },
                  lineHeight: { laptopSmall: '2.75rem', laptopLarge: '3rem' }
                }}
                >
                Super Dad/Husband
              </Typography>
              <Box
                sx={{
                  color: 'var(--secondary)',
                  fontSize: { laptopSmall: '3.25rem', laptopLarge: '3.5rem' }
                }}
                >
                <FontAwesomeIcon icon='people-roof' />
              </Box>
            </Box>
            <Box
              sx={{ margin: '0rem 2rem'}}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: { laptopSmall: '1.55rem', laptopLarge: '1.75rem' },
                  lineHeight: { laptopSmall: '2.75rem', laptopLarge: '3rem' }
                }}
                >
                Lifetime Braves Fan
              </Typography>
              <Box
                sx={{
                  color: 'var(--secondary)',
                  fontSize: { laptopSmall: '3.25rem', laptopLarge: '3.5rem' }
                }}
                >
                <FontAwesomeIcon icon='baseball-bat-ball' />
              </Box>
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
            sx={{ width: '35%'}}
          />
    
          <Typography
            sx={{
              fontSize: '4.25rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginTop: '0.75rem'
            }}
            >
            Josh Hawk
          </Typography>
    
          <Divider
            sx={{
              background: 'white',
              borderBottomWidth: 2,
              marginX: '10%',
              marginTop: '1rem',
              marginBottom: '0.5rem'
            }}
          />
    
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginX: '12.5%',
              marginBottom: '3.5rem',
              flexDirection: 'row'
            }}
            >
            <Box
              sx={{ margin: '2rem auto 0rem 0rem' }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.4rem',
                  lineHeight: '2.5rem'
                }}
                >
                Emerging Developer
              </Typography>
              <Box
                sx={{
                  color: 'var(--secondary)',
                  fontSize: '2.5rem'
                }}
                >
                <FontAwesomeIcon icon='laptop-code' />
              </Box>
            </Box>
            <Box
              sx={{ margin: '2rem 0rem 0rem auto' }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.4rem',
                  lineHeight: '2.5rem'
                }}
                >
                Super Dad/Husband
              </Typography>
              <Box
                sx={{
                  color: 'var(--secondary)',
                  fontSize: '2.5rem'
                }}
                >
                <FontAwesomeIcon icon='people-roof' />
              </Box>
            </Box>
            <Box
              sx={{              
                marginX: '8.7rem',
                marginTop: '0.75rem'
              }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.4rem',
                  lineHeight: '2.5rem'
                }}
                >
                Lifetime Braves Fan
              </Typography>
              <Box
                sx={{
                  color: 'var(--secondary)',
                  fontSize: '2.5rem'
                }}
                >
                <FontAwesomeIcon icon='baseball-bat-ball' />
              </Box>
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
            sx={{ width: { zero: '70%', mobile: '55%' } }}
          />
    
          <Typography
            sx={{
              fontSize: { zero: '2.25rem', mobile: '3.25rem' },
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginTop: { zero: '1.5rem', mobile: '0.75rem' }
            }}
            >
            Josh Hawk
          </Typography>
    
          <Divider
            sx={{
              background: 'white',
              borderBottomWidth: 2,
              marginX: { zero: '9%', mobile: '8%' },
              marginTop: { zero: '1.75rem', mobile: '1.25rem' },
              marginBottom: { zero: '2.5rem', mobile: '2.25rem' }
            }}
          />
    
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginX: '2.5%',
              marginBottom: '3.5rem',
              flexDirection: 'column'
            }}
            >
            <Box
              sx={{ margin: '0rem ' }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: { zero: '1.2rem', mobile: '1.3rem' },
                  lineHeight: '2.5rem'
                }}
                >
                Emerging Developer
              </Typography>
              <Box
                sx={{
                  color: 'var(--secondary)',
                  fontSize: { zero: '1.6rem', mobile: '1.85rem' }
                }}
                >
                <FontAwesomeIcon icon='laptop-code' />
              </Box>
            </Box>
            <Box
              sx={{
                marginX: '2rem',
                marginTop: { zero: '1.5rem', mobile: '1.25rem' }
              }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: { zero: '1.2rem', mobile: '1.3rem' },
                  lineHeight: '2.5rem'
                }}
                >
                Super Dad/Husband
              </Typography>
              <Box
                sx={{
                  color: 'var(--secondary)',
                  fontSize: { zero: '1.6rem', mobile: '1.85rem' }
                }}
                >
                <FontAwesomeIcon icon='people-roof' />
              </Box>
            </Box>
            <Box
              sx={{              
                marginX: '2rem',
                marginTop: { zero: '1.5rem', mobile: '1.25rem' }
              }}
              >
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: { zero: '1.2rem', mobile: '1.3rem' },
                  lineHeight: '2.5rem'
                }}
                >
                Lifetime Braves Fan
              </Typography>
              <Box
                sx={{
                  color: 'var(--secondary)',
                  fontSize: { zero: '1.6rem', mobile: '1.85rem' }
                }}
                >
                <FontAwesomeIcon icon='baseball-bat-ball' />
              </Box>
            </Box>
          </Box>
        </Box>
      </Mobile>

    </ThemeProvider>
  )
}