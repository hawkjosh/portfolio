import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import linkedin from '../assets/img/linkedin.svg'
import github from '../assets/img/github.svg'
import codepen from '../assets/img/codepen.svg'
import stackOverflow from '../assets/img/stack-overflow.svg'

import {
  Box,
  Button,
  Container,
  createTheme,
  Stack,
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

const icons = [
  {
    link: 'https://www.linkedin.com/in/josh-hawk-6591a3230/',
    image: linkedin
  },
  {
    link: 'https://github.com/hawkjosh',
    image: github
  },
  {
    link: 'https://codepen.io/hawkjosh',
    image: codepen
  },
  {
    link: 'https://stackoverflow.com/users/19513873/hawkjosh?tab=profile',
    image: stackOverflow
  }
]

export default function App() {

  return (
    <ThemeProvider theme={theme}>

      {/* for laptop/desktop displays (horizontal layout) */}

      <Laptop>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            bgcolor: 'var(--secondary)',
            position: 'fixed',
            bottom: '0rem',
            left: '0rem',
            width: '100vw',
            height: '10vh'
          }}
          >
          <Container>
            <Typography
              sx={{
                fontSize: { laptopSmall: '1.5rem', laptopLarge: '1.75rem' }
              }}
              >
              © 2022 Joshua Wilde Hawk
            </Typography>
          </Container>
          <Stack
            className='footer-link-container'
            direction='row'
            spacing={2}
            sx={{ paddingY: '0.25rem' }}
            >
            {icons.map((icon, index) => (
              <Button
                key={index}
                href={icon.link}
                target='_blank'
                rel='noreferrer'>
                <Box
                  component='img'
                  className='footer-icon'
                  src={icon.image}
                />
              </Button>
            ))}
          </Stack>
        </Box>
      </Laptop>

      {/* for tablet displays (vertical layout) */}

      <Tablet>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            bgcolor: 'var(--secondary)',
            position: 'fixed',
            bottom: '0rem',
            left: '0rem',
            width: '100vw'
          }}
          >
          <Stack
            className='footer-link-container'
            direction='row'
            spacing={2}
            sx={{ paddingY: '0.25rem' }}
            >
            {icons.map((icon, index) => (
              <Button
                key={index}
                href={icon.link}
                target='_blank'
                rel='noreferrer'>
                <Box
                  component='image'
                  className='footer-icon'
                  src={icon.image}
                />
              </Button>
            ))}
          </Stack>
        </Box>
      </Tablet>

      {/* for mobile displays (vertical layout) */}

      <Mobile>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            bgcolor: 'var(--secondary)',
            position: 'fixed',
            bottom: '0rem',
            left: '0rem',
            width: '100vw'
          }}
          >
          <Stack
            className='footer-link-container'
            direction='row'
            spacing={2}
            sx={{ paddingY: '0.25rem' }}
            >
            {icons.map((icon, index) => (
              <Button
                key={index}
                href={icon.link}
                target='_blank'
                rel='noreferrer'>
                <Box
                  component='img'
                  className='footer-icon'
                  src={icon.image}
                />
              </Button>
            ))}
          </Stack>
        </Box>
      </Mobile>

    </ThemeProvider>
  )
}