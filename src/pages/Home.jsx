import * as React from 'react'

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
      xxs: 0,
      xs: 375,
      sm: 425,
      md: 768,
      md1: 832,
      md2: 896,
      md3: 960,
      // Breakpoints below change to horizontal layout
      lg: 1024,
      xl: 1440,
      xxl: 1620
    }
  }
})

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box style={{ textAlign: 'center' }}>
        <Box
          component='img'
          src={myAvatar}
          alt='Josh Hawk Avatar'
          sx={{
            width: {
              xxs: '70%',
              xs: '60%',
              sm: '55%',
              md: '35%',
              lg: '30%',
              xl: '25%',
              xxl: '27.5%'
            },
          }}
        />
  
        <Typography
          sx={{
            fontSize: {
              xxs: '2.25rem',
              xs: '2.75rem',
              sm: '3.25rem',
              md: '4.25rem',
              lg: '5.5rem',
              xl: '6rem'
            },
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginTop: {
              xxs: '1.5rem',
              sm: '0.75rem',
              lg: '1.5rem',
              xl: '0rem'
            }
          }}
        >
          Josh Hawk
        </Typography>
  
        <Divider
          sx={{
            background: 'white',
            borderBottomWidth: 2,
            marginX: {
              xxs: '9%',
              sm: '8%',
              md: '10%',
              lg: '5%'
            },
            marginTop: {
              xxs: '1.75rem',
              sm: '1.25rem',
              md: '1rem',
              lg: '1.5rem',
              xl: '1rem',
              xxl: '3rem'
            },
            marginBottom: {
              xxs: '2.5rem',
              sm: '2.25rem',
              md: '0.5rem',
              lg: '3rem',
              xl: '2.5rem',
              xxl: '4rem'
            }
          }}
        />
  
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginX: {
              xxs: '2.5%',
              xs: '5%',
              md: '12.5%',
              lg: '5%'
            },
            marginBottom: '3.5rem',
            flexDirection: {
              xxs: 'column',
              md: 'row'
            }
          }}
        >
          <Box
            sx={{
              marginLeft: {
                xxs: '0rem',
                xs: '2rem',
                md: '0rem',
                lg: '2rem'
              },
              marginRight: {
                xxs: '0rem',
                xs: '2rem',
                md: 'auto',
                lg: '2rem'
              },
              marginTop: {
                xxs: '0rem',
                md: '2rem',
                lg: '0rem'
              }
            }}
          >
            <Typography
              sx={{
                fontWeight: '300',
                fontSize: {
                  xxs: '1.2rem',
                  sm: '1.3rem',
                  md: '1.4rem',
                  lg: '1.55rem',
                  xl: '1.75rem',
                  xxl: '2rem'
                },
                lineHeight: {
                  xxs: '2.5rem',
                  lg: '2.75rem',
                  xl: '3rem',
                  xxl: '3.5rem'
                }
              }}
            >
              Emerging Developer
            </Typography>
            <Box
              sx={{
                color: 'var(--secondary)',
                fontSize: {
                  xxs: '1.6rem',
                  sm: '1.85rem',
                  md: '2.5rem',
                  lg: '3.25rem',
                  xl: '3.5rem',
                  xxl: '4.5rem'
                }
              }}
            >
              <FontAwesomeIcon icon='laptop-code' />
            </Box>
          </Box>
          <Box
            sx={{
              marginLeft: {
                xxs: '2rem',
                md: 'auto',
                lg: '2rem'
              },
              marginRight: {
                xxs: '2rem',
                md: '0rem',
                lg: '2rem'
              },
              marginTop: {
                xxs: '1.5rem',
                sm: '1.25rem',
                md: '2rem',
                lg: '0rem'
              }
            }}
          >
            <Typography
              sx={{
                fontWeight: '300',
                fontSize: {
                  xxs: '1.2rem',
                  sm: '1.3rem',
                  md: '1.4rem',
                  lg: '1.55rem',
                  xl: '1.75rem',
                  xxl: '2rem'
                },
                lineHeight: {
                  xxs: '2.5rem',
                  lg: '2.75rem',
                  xl: '3rem',
                  xxl: '3.5rem'
                }
              }}
            >
              Super Dad/Husband
            </Typography>
            <Box
              sx={{
                color: 'var(--secondary)',
                fontSize: {
                  xxs: '1.6rem',
                  sm: '1.85rem',
                  md: '2.5rem',
                  lg: '3.25rem',
                  xl: '3.5rem',
                  xxl: '4.5rem'
                }
              }}
            >
              <FontAwesomeIcon icon='people-roof' />
            </Box>
          </Box>
          <Box
            sx={{              
              marginX: {
                xxs: '2rem',
                md: '8.7rem',
                lg: '2rem'
              },
              marginTop: {
                xxs: '1.5rem',
                sm: '1.25rem',
                md: '0.75rem',
                md1: '-0.75rem',
                md2: '-2.25rem',
                md3: '-3.75rem',
                lg: '0rem'
              }
            }}
          >
            <Typography
              sx={{
                fontWeight: '300',
                fontSize: {
                  xxs: '1.2rem',
                  sm: '1.3rem',
                  md: '1.4rem',
                  lg: '1.55rem',
                  xl: '1.75rem',
                  xxl: '2rem'
                },
                lineHeight: {
                  xxs: '2.5rem',
                  lg: '2.75rem',
                  xl: '3rem',
                  xxl: '3.5rem'
                }
              }}
            >
              Lifetime Braves Fan
            </Typography>
            <Box
              sx={{
                color: 'var(--secondary)',
                fontSize: {
                  xxs: '1.6rem',
                  sm: '1.85rem',
                  md: '2.5rem',
                  lg: '3.25rem',
                  xl: '3.5rem',
                  xxl: '4.5rem'
                }
              }}
            >
              <FontAwesomeIcon icon='baseball-bat-ball' />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}