import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

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

  const [open, setOpen] = React.useState(false)

  const [scroll, setScroll] =React.useState()

  const handleOpen = () => {
    setOpen(true)
    setScroll('body')
  }

  const handleClose = () => setOpen(false)

  return (
    <ThemeProvider theme={theme}>

      {/* for laptop/desktop displays (horizontal layout) */}
      
      <Laptop>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              zero: 'column',
              laptopSmall: 'row-reverse'
            },
            justifyContent: {
              zero: 'center',
              laptopSmall: 'space-between'
            },
            alignItems: 'center',
            alignContent: 'center',
            // Below adjusts spacing between picture/text area and toolbox button on bottom
            marginBottom: {
              zero: '1.75rem',
              mobile: '2.25rem',
              tabletSmall: '2.5rem',
              laptopSmall: '2.75rem',
              laptopLarge: '3rem'
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
                zero: '85%',
                mobile: '80%',
                tabletSmall: '60%',
                laptopSmall: '40%',
                laptopLarge: '35%'
              },
              // Below adds spacing between picture and text when in vertical layout
              marginBottom: {
                zero: '2rem',
                laptopSmall: '0rem'
              },
              // Below adds horizontal spacing around picture when in horizontal layout
              marginX: {
                laptopSmall: '2rem'
              }
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: {
                zero: '100%',
                mobile: '95%',
                tabletSmall: '85%',
                laptopSmall: '60%',
                laptopLarge: '65%'
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                display: {
                  zero: 'none',
                  laptopSmall: 'block'
                },
                fontSize: {
                  laptopSmall: '2.75rem',
                  laptopLarge: '4.75rem'
                },
                marginBottom: {
                  laptopSmall: '0.25rem',
                  laptopLarge: '0.75rem'
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
                  zero: 'column',
                  laptopLarge: 'row'
                },
                alignItems: {
                  zero: 'center',
                  laptopLarge: 'flex-start'
                },
                marginX: {
                  zero: '0.25rem',
                  laptopLarge: '1.25rem'
                }
              }}
            >
              <Typography
                sx={{
                  fontWeight: '300',
                  textAlign: 'justify',
                  width: '100%',
                  fontSize: {
                    zero: '1.15rem',
                    mobile: '1.35rem',
                    tabletSmall: '1.4rem',
                    laptopSmall: '1.25rem',
                    laptopLarge: '1.5rem'
                  },
                  lineHeight: {
                    zero: '1.35rem',
                    mobile: '1.75rem',
                    tabletSmall: '1.8rem',
                    laptopSmall: '1.7rem',
                    laptopLarge: '2rem'
                  },
                  letterSpacing: {
                    zero: '0rem',
                    mobile: '0.055rem',
                    tabletSmall: '0rem',
                    laptopSmall: '0.006rem',
                    laptopLarge: '0.09rem'
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
                    zero: '1.15rem',
                    mobile: '1.35rem',
                    tabletSmall: '1.4rem',
                    laptopSmall: '1.25rem',
                    laptopLarge: '1.5rem'
                  },
                  lineHeight: {
                    zero: '1.35rem',
                    mobile: '1.75rem',
                    tabletSmall: '1.8rem',
                    laptopSmall: '1.7rem',
                    laptopLarge: '2rem'
                  },
                  letterSpacing: {
                    zero: '0rem',
                    mobile: '0.055rem',
                    tabletSmall: '0rem',
                    laptopSmall: '0.006rem',
                    laptopLarge: '0.01rem'
                  },
                  marginTop: {
                    zero: '1.5rem',
                    laptopLarge: '0rem'
                  },
                  marginLeft: {
                    zero: '0rem',
                    laptopLarge: '4.5rem'
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
              zero: '175px',
              tabletSmall: '225px',
              laptopSmall: '250px'
            },
            marginX: 'auto',
            marginBottom: {
              zero: '3.25rem',
              tabletSmall: '3.5rem',
              laptopSmall: '4rem'
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
                  zero: '1.75rem',
                  tabletSmall: '2.25rem',
                  laptopSmall: '2.5rem'
                }
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  zero: '1.25rem',
                  tabletSmall: '1.5rem',
                  laptopSmall: '1.75rem'
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
                    zero: '1.25rem',
                    tabletSmall: '1.75rem'
                  }
                }}
              >
                - Close -
              </Button>
          </DialogActions>
        </Dialog>
      </Laptop>

      {/* for tablet displays (vertical layout) */}
      
      <Tablet>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              zero: 'column',
              laptopSmall: 'row-reverse'
            },
            justifyContent: {
              zero: 'center',
              laptopSmall: 'space-between'
            },
            alignItems: 'center',
            alignContent: 'center',
            // Below adjusts spacing between picture/text area and toolbox button on bottom
            marginBottom: {
              zero: '1.75rem',
              mobile: '2.25rem',
              tabletSmall: '2.5rem',
              laptopSmall: '2.75rem',
              laptopLarge: '3rem'
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
                zero: '85%',
                mobile: '80%',
                tabletSmall: '60%',
                laptopSmall: '40%',
                laptopLarge: '35%'
              },
              // Below adds spacing between picture and text when in vertical layout
              marginBottom: {
                zero: '2rem',
                laptopSmall: '0rem'
              },
              // Below adds horizontal spacing around picture when in horizontal layout
              marginX: {
                laptopSmall: '2rem'
              }
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: {
                zero: '100%',
                mobile: '95%',
                tabletSmall: '85%',
                laptopSmall: '60%',
                laptopLarge: '65%'
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                display: {
                  zero: 'none',
                  laptopSmall: 'block'
                },
                fontSize: {
                  laptopSmall: '2.75rem',
                  laptopLarge: '4.75rem'
                },
                marginBottom: {
                  laptopSmall: '0.25rem',
                  laptopLarge: '0.75rem'
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
                  zero: 'column',
                  laptopLarge: 'row'
                },
                alignItems: {
                  zero: 'center',
                  laptopLarge: 'flex-start'
                },
                marginX: {
                  zero: '0.25rem',
                  laptopLarge: '1.25rem'
                }
              }}
            >
              <Typography
                sx={{
                  fontWeight: '300',
                  textAlign: 'justify',
                  width: '100%',
                  fontSize: {
                    zero: '1.15rem',
                    mobile: '1.35rem',
                    tabletSmall: '1.4rem',
                    laptopSmall: '1.25rem',
                    laptopLarge: '1.5rem'
                  },
                  lineHeight: {
                    zero: '1.35rem',
                    mobile: '1.75rem',
                    tabletSmall: '1.8rem',
                    laptopSmall: '1.7rem',
                    laptopLarge: '2rem'
                  },
                  letterSpacing: {
                    zero: '0rem',
                    mobile: '0.055rem',
                    tabletSmall: '0rem',
                    laptopSmall: '0.006rem',
                    laptopLarge: '0.09rem'
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
                    zero: '1.15rem',
                    mobile: '1.35rem',
                    tabletSmall: '1.4rem',
                    laptopSmall: '1.25rem',
                    laptopLarge: '1.5rem'
                  },
                  lineHeight: {
                    zero: '1.35rem',
                    mobile: '1.75rem',
                    tabletSmall: '1.8rem',
                    laptopSmall: '1.7rem',
                    laptopLarge: '2rem'
                  },
                  letterSpacing: {
                    zero: '0rem',
                    mobile: '0.055rem',
                    tabletSmall: '0rem',
                    laptopSmall: '0.006rem',
                    laptopLarge: '0.01rem'
                  },
                  marginTop: {
                    zero: '1.5rem',
                    laptopLarge: '0rem'
                  },
                  marginLeft: {
                    zero: '0rem',
                    laptopLarge: '4.5rem'
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
              zero: '175px',
              tabletSmall: '225px',
              laptopSmall: '250px'
            },
            marginX: 'auto',
            marginBottom: {
              zero: '3.25rem',
              tabletSmall: '3.5rem',
              laptopSmall: '4rem'
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
                  zero: '1.75rem',
                  tabletSmall: '2.25rem',
                  laptopSmall: '2.5rem'
                }
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  zero: '1.25rem',
                  tabletSmall: '1.5rem',
                  laptopSmall: '1.75rem'
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
                    zero: '1.25rem',
                    tabletSmall: '1.75rem'
                  }
                }}
              >
                - Close -
              </Button>
          </DialogActions>
        </Dialog>
      </Tablet>

      {/* for mobile displays (vertical layout) */}
      
      <Mobile>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              zero: 'column',
              laptopSmall: 'row-reverse'
            },
            justifyContent: {
              zero: 'center',
              laptopSmall: 'space-between'
            },
            alignItems: 'center',
            alignContent: 'center',
            // Below adjusts spacing between picture/text area and toolbox button on bottom
            marginBottom: {
              zero: '1.75rem',
              mobile: '2.25rem',
              tabletSmall: '2.5rem',
              laptopSmall: '2.75rem',
              laptopLarge: '3rem'
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
                zero: '85%',
                mobile: '80%',
                tabletSmall: '60%',
                laptopSmall: '40%',
                laptopLarge: '35%'
              },
              // Below adds spacing between picture and text when in vertical layout
              marginBottom: {
                zero: '2rem',
                laptopSmall: '0rem'
              },
              // Below adds horizontal spacing around picture when in horizontal layout
              marginX: {
                laptopSmall: '2rem'
              }
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: {
                zero: '100%',
                mobile: '95%',
                tabletSmall: '85%',
                laptopSmall: '60%',
                laptopLarge: '65%'
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                display: {
                  zero: 'none',
                  laptopSmall: 'block'
                },
                fontSize: {
                  laptopSmall: '2.75rem',
                  laptopLarge: '4.75rem'
                },
                marginBottom: {
                  laptopSmall: '0.25rem',
                  laptopLarge: '0.75rem'
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
                  zero: 'column',
                  laptopLarge: 'row'
                },
                alignItems: {
                  zero: 'center',
                  laptopLarge: 'flex-start'
                },
                marginX: {
                  zero: '0.25rem',
                  laptopLarge: '1.25rem'
                }
              }}
            >
              <Typography
                sx={{
                  fontWeight: '300',
                  textAlign: 'justify',
                  width: '100%',
                  fontSize: {
                    zero: '1.15rem',
                    mobile: '1.35rem',
                    tabletSmall: '1.4rem',
                    laptopSmall: '1.25rem',
                    laptopLarge: '1.5rem'
                  },
                  lineHeight: {
                    zero: '1.35rem',
                    mobile: '1.75rem',
                    tabletSmall: '1.8rem',
                    laptopSmall: '1.7rem',
                    laptopLarge: '2rem'
                  },
                  letterSpacing: {
                    zero: '0rem',
                    mobile: '0.055rem',
                    tabletSmall: '0rem',
                    laptopSmall: '0.006rem',
                    laptopLarge: '0.09rem'
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
                    zero: '1.15rem',
                    mobile: '1.35rem',
                    tabletSmall: '1.4rem',
                    laptopSmall: '1.25rem',
                    laptopLarge: '1.5rem'
                  },
                  lineHeight: {
                    zero: '1.35rem',
                    mobile: '1.75rem',
                    tabletSmall: '1.8rem',
                    laptopSmall: '1.7rem',
                    laptopLarge: '2rem'
                  },
                  letterSpacing: {
                    zero: '0rem',
                    mobile: '0.055rem',
                    tabletSmall: '0rem',
                    laptopSmall: '0.006rem',
                    laptopLarge: '0.01rem'
                  },
                  marginTop: {
                    zero: '1.5rem',
                    laptopLarge: '0rem'
                  },
                  marginLeft: {
                    zero: '0rem',
                    laptopLarge: '4.5rem'
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
              zero: '175px',
              tabletSmall: '225px',
              laptopSmall: '250px'
            },
            marginX: 'auto',
            marginBottom: {
              zero: '3.25rem',
              tabletSmall: '3.5rem',
              laptopSmall: '4rem'
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
                  zero: '1.75rem',
                  tabletSmall: '2.25rem',
                  laptopSmall: '2.5rem'
                }
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  zero: '1.25rem',
                  tabletSmall: '1.5rem',
                  laptopSmall: '1.75rem'
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
                    zero: '1.25rem',
                    tabletSmall: '1.75rem'
                  }
                }}
              >
                - Close -
              </Button>
          </DialogActions>
        </Dialog>
      </Mobile>

    </ThemeProvider>
  )
}