import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Box,
  Button,
  Container,
  createTheme,
  Stack,
  ThemeProvider,
  Typography
} from '@mui/material';

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

const icons = [
  {
    link: 'https://www.linkedin.com/in/josh-hawk-6591a3230/',
    image: 'fab fa-fw fa-linkedin-in'
  },
  {
    link: 'https://github.com/hawkjosh',
    image: 'fab fa-fw fa-github'
  },
  {
    link: 'https://stackoverflow.com/users/19513873/hawkjosh?tab=profile',
    image: 'fab fa-fw fa-stack-overflow'
  }
]

export default function App() {
  return (
    <ThemeProvider theme={theme}>
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
          height: {
            xxs: 'auto',
            lg: '10vh'
          }
        }}>
        <Container
          sx={{
            display: {
              xxs: 'none',
              lg: 'block'
            }
          }}>
          <Typography
            sx={{
              fontSize: {
                lg: '1.5rem',
                xl: '1.75rem',
                xxl: '2rem'
              }
            }}>
            © 2022 Joshua Wilde Hawk
          </Typography>
        </Container>
        <Stack
          className='footer-link-container'
          direction='row'
          spacing={2}
          sx={{
            paddingY: '0.25rem'
          }}>
          {icons.map((icon) => (
            <Button
              href={icon.link}
              target='_blank'
              rel='noreferrer'>
              <FontAwesomeIcon
                className='footer-link-icon'
                icon={icon.image} />
            </Button>
          ))}
        </Stack>
      </Box>
    </ThemeProvider>
  );
}