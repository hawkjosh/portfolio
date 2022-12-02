import * as React from 'react'

import ProfilePic from '../assets/img/profile_photo.jpg'

import {
  Box,
  Button,
  createTheme,
  Dialog,
  DialogActions,
  ThemeProvider,
  Typography
} from '@mui/material'

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'

import Toolbox from '../components/Toolbox.jsx'

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
})

export default function App() {

  const [open, setOpen] = React.useState(false)

  const [scroll, setScroll] =React.useState()

  const handleOpen = () => {
    setOpen(true)
    setScroll('body')
  }

  const handleClose = () => setOpen(false)

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xxs: 'column',
            lg: 'row-reverse'
          },
          justifyContent: {
            xxs: 'center',
            lg: 'space-between'
          },
          alignItems: 'center',
          alignContent: 'center',
          // Below adjusts spacing between picture/text area and toolbox button on bottom
          marginBottom: {
            xxs: '1.75rem',
            xs: '2rem',
            sm: '2.25rem',
            md: '2.5rem',
            lg: '2.75rem',
            xl: '3rem',
            xxl: '3.25rem'
          }
        }}
        >
        <Box
          component='img'
          src={ProfilePic}
          alt='Josh Hawk Avatar'
          sx={{
            alignSelf: 'center',
            borderRadius: '1.5rem',
            aspectRatio: '1/1',
            // Below adjust picture size at different breakpoints
            width: {
              xxs: '85%',
              sm: '80%',
              md: '60%',
              lg: '40%',
              xl: '35%'
            },
            // Below adds spacing between picture and text when in vertical layout
            marginBottom: {
              xxs: '2rem',
              lg: '0rem'
            },
            // Below adds horizontal spacing around picture when in horizontal layout
            marginX: {
              lg: '2rem'
            }
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: {
              xxs: '100%',
              sm: '95%',
              md: '85%',
              lg: '60%',
              xl: '65%'
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              display: {
                xxs: 'none',
                lg: 'block'
              },
              fontSize: {
                lg: '2.75rem',
                xl: '4.75rem',
                xxl: '5rem'
              },
              marginBottom: {
                lg: '0.25rem',
                xl: '0.75rem',
                xxl: '1.5rem'
              }
            }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: {
                xxs: 'column',
                xl: 'row'
              },
              alignItems: {
                xxs: 'center',
                xl: 'flex-start'
              },
              marginX: {
                xxs: '0.25rem',
                xl: '1.25rem'
              }
            }}
          >
            <Typography
              sx={{
                fontWeight: '300',
                textAlign: 'justify',
                width: '100%',
                fontSize: {
                  xxs: '1.15rem',
                  xs: '1.3rem',
                  sm: '1.35rem',
                  md: '1.4rem',
                  lg: '1.25rem',
                  xl: '1.5rem',
                  xxl: '1.55rem'
                },
                lineHeight: {
                  xxs: '1.35rem',
                  xs: '1.7rem',
                  sm: '1.75rem',
                  md: '1.8rem',
                  lg: '1.7rem',
                  xl: '2rem',
                  xxl: '2.2rem'
                },
                letterSpacing: {
                  xxs: '0rem',
                  xs: '0.05rem',
                  sm: '0.055rem',
                  md: '0rem',
                  lg: '0.006rem',
                  xl: '0.09rem',
                  xxl: '0.13rem'
                }
              }}
            >
              Welcome to my portfolio! My name is Josh Hawk and I have been an educator for the past 15 years. I recently decided to forge a new path into the exciting world of programming and web development. Having very little background in coding, I enrolled in a full stack web development boot camp through Georgia Tech to jumpstart this career change.
            </Typography>
            <Typography
              sx={{
                fontWeight: '300',
                textAlign: 'justify',
                width: '100%',
                fontSize: {
                  xxs: '1.15rem',
                  xs: '1.3rem',
                  sm: '1.35rem',
                  md: '1.4rem',
                  lg: '1.25rem',
                  xl: '1.5rem',
                  xxl: '1.55rem'
                },
                lineHeight: {
                  xxs: '1.35rem',
                  xs: '1.7rem',
                  sm: '1.75rem',
                  md: '1.8rem',
                  lg: '1.7rem',
                  xl: '2rem',
                  xxl: '2.2rem'
                },
                letterSpacing: {
                  xxs: '0rem',
                  xs: '0.05rem',
                  sm: '0.055rem',
                  md: '0rem',
                  lg: '0.006rem',
                  xl: '0.01rem',
                  xxl: '0.05rem'
                },
                marginTop: {
                  xxs: '1.5rem',
                  xl: '0rem'
                },
                marginLeft: {
                  xxs: '0rem',
                  xl: '4.5rem',
                  xxl: '5rem'
                }
              }}
            >
              Please check out some of my favorite work samples while you're here. I've included various projects I created throughout the boot camp, as well as a few personal projects. You can also see the skills I've acquired in my toolbox link below. Feel free to reach out to me with any questions or comments. I hope you like what you see, and thanks for stopping by!
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            xxs: '175px',
            md: '225px',
            lg: '250px'
          },
          marginX: 'auto',
          marginBottom: {
            xxs: '3.25rem',
            md: '3.5rem',
            lg: '4rem'
          }
        }}
      >
        <Box
          className='toolbox-btn'
          onClick={handleOpen}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '0.15rem solid white',
            borderRadius: '0.5rem',
            padding: '0.25rem'
          }}
          gap={2}
        >
          <HomeRepairServiceIcon
            sx={{
              fontSize: {
                xxs: '1.75rem',
                md: '2.25rem',
                lg: '2.5rem'
              }
            }}
          />
          <Typography
            sx={{
              fontSize: {
                xxs: '1.25rem',
                md: '1.5rem',
                lg: '1.75rem'
              }
            }}
          >
            My Toolbox
          </Typography>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        maxWidth='lg'
      >
        <Toolbox />
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Button
              onClick={handleClose}
              sx={{
                color: 'var(--secondary)',
                fontSize: {
                  xxs: '1.25rem',
                  md: '1.75rem'
                }
              }}
            >
              - Close -
            </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  )
}