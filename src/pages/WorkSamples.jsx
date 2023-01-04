import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import socialNetwork from '../assets/img/portfolio/social_network.png'
import messageForum from '../assets/img/portfolio/message_forum.png'
import songSearch from '../assets/img/portfolio/song_search.png'
import noteTaker from '../assets/img/portfolio/note_taker.png'
import weatherDashboard from '../assets/img/portfolio/weather_dashboard.png'
import workdayScheduler from '../assets/img/portfolio/workday_scheduler.png'

import {
  Box,
  Button,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  ThemeProvider,
  Typography
} from '@mui/material'

import GroupIcon from '@mui/icons-material/Group'
import ChatIcon from '@mui/icons-material/Chat'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import CreateIcon from '@mui/icons-material/Create'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CloseIcon from '@mui/icons-material/Close'

import PortfolioDialog1 from '../components/PortfolioDialog1.jsx'
import PortfolioDialog2 from '../components/PortfolioDialog2.jsx'
import PortfolioDialog3 from '../components/PortfolioDialog3.jsx'
import PortfolioDialog4 from '../components/PortfolioDialog4.jsx'
import PortfolioDialog5 from '../components/PortfolioDialog5.jsx'
import PortfolioDialog6 from '../components/PortfolioDialog6.jsx'

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

const buttonSX = {
  color: 'white',
  borderColor: 'white',
  marginX: { zero: '0.5rem', tabletSmall: '2rem', laptopSmall: '4rem', },
  fontSize: { zero: '0.65rem', mobile: '1.25rem', tabletSmall: '1.75rem', laptopSmall: '2rem', laptopLarge: '2.25rem' },
  '&:hover':{ color: 'var(--primary)', borderColor: 'var(--primary)' }
}

export default function App() {

  const [openDialog1, setOpenDialog1] = React.useState(false)

  const [openDialog2, setOpenDialog2] = React.useState(false)

  const [openDialog3, setOpenDialog3] = React.useState(false)

  const [openDialog4, setOpenDialog4] = React.useState(false)

  const [openDialog5, setOpenDialog5] = React.useState(false)

  const [openDialog6, setOpenDialog6] = React.useState(false)
  
  const [scrollDialog1, setScrollDialog1] =React.useState()

  const [scrollDialog2, setScrollDialog2] =React.useState()

  const [scrollDialog3, setScrollDialog3] =React.useState()

  const [scrollDialog4, setScrollDialog4] =React.useState()

  const [scrollDialog5, setScrollDialog5] =React.useState()

  const [scrollDialog6, setScrollDialog6] =React.useState()

  const handleOpenDialog1 = () => {
    setOpenDialog1(true)
    setScrollDialog1('body')
  }

  const handleOpenDialog2 = () => {
    setOpenDialog2(true)
    setScrollDialog2('body')
  }

  const handleOpenDialog3 = () => {
    setOpenDialog3(true)
    setScrollDialog3('body')
  }

  const handleOpenDialog4 = () => {
    setOpenDialog4(true)
    setScrollDialog4('body')
  }

  const handleOpenDialog5 = () => {
    setOpenDialog5(true)
    setScrollDialog5('body')
  }

  const handleOpenDialog6 = () => {
    setOpenDialog6(true)
    setScrollDialog6('body')
  }

  const handleCloseDialog1 = () => setOpenDialog1(false)

  const handleCloseDialog2 = () => setOpenDialog2(false)

  const handleCloseDialog3 = () => setOpenDialog3(false)

  const handleCloseDialog4 = () => setOpenDialog4(false)

  const handleCloseDialog5 = () => setOpenDialog5(false)

  const handleCloseDialog6 = () => setOpenDialog6(false)

  const samples = [
    {
      full: 'Social Network App',
      short: 'Social Network',
      source: socialNetwork,
      click: handleOpenDialog1,
      icon: GroupIcon
    },
    {
      full: 'Message Forum App',
      short: 'Message Forum',
      source: messageForum,
      click: handleOpenDialog2,
      icon: ChatIcon
    },
    {
      full: 'Song Search App',
      short: 'Song Search',
      source: songSearch,
      click: handleOpenDialog3,
      icon: LibraryMusicIcon
    },
    {
      full: 'Note Taker App',
      short: 'Note Taker',
      source: noteTaker,
      click: handleOpenDialog4,
      icon: CreateIcon
    },
    {
      full: 'Weather Dashboard App',
      short: 'Weather Dashboard',
      source: weatherDashboard,
      click: handleOpenDialog5,
      icon: ThunderstormIcon
    },
    {
      full: 'Workday Scheduler App',
      short: 'Workday Scheduler',
      source: workdayScheduler,
      click: handleOpenDialog6,
      icon: CalendarMonthIcon
    }
  ]

  const windows = [
    {
      name: 'Social Network App',
      open: openDialog1,
      close: handleCloseDialog1,
      scroll: scrollDialog1,
      link: PortfolioDialog1,
      website: 'https://stayintouchnetwork.herokuapp.com/',
      github: 'https://github.com/hawkjosh/Social-Network'
    },
    {
      name: 'Message Forum App',
      open: openDialog2,
      close: handleCloseDialog2,
      scroll: scrollDialog2,
      link: PortfolioDialog2,
      website: 'https://glacial-tor-15581.herokuapp.com/',
      github: 'https://github.com/hawkjosh/Message-Forum'
    },
    {
      name: 'Song Search App',
      open: openDialog3,
      close: handleCloseDialog3,
      scroll: scrollDialog3,
      link: PortfolioDialog3,
      website: 'https://hawkjosh.github.io/Song-Search',
      github: 'https://github.com/hawkjosh/Song-Search'
    },
    {
      name: 'Note Taker App',
      open: openDialog4,
      close: handleCloseDialog4,
      scroll: scrollDialog4,
      link: PortfolioDialog4,
      website: 'https://secure-ravine-29968.herokuapp.com/',
      github: 'https://github.com/hawkjosh/Note-Taker'
    },
    {
      name: 'Weather Dashboard App',
      open: openDialog5,
      close: handleCloseDialog5,
      scroll: scrollDialog5,
      link: PortfolioDialog5,
      website: 'https://hawkjosh.github.io/Weather-Dashboard',
      github: 'https://github.com/hawkjosh/Weather-Dashboard'
    },
    {
      name: 'Workday Scheduler App',
      open: openDialog6,
      close: handleCloseDialog6,
      scroll: scrollDialog6,
      link: PortfolioDialog6,
      website: 'https://hawkjosh.github.io/Workday-Scheduler',
      github: 'https://github.com/hawkjosh/Workday-Scheduler'
    }
  ]
  
  return (
    <ThemeProvider theme={theme}>

      {/* for laptop/desktop displays (horizontal layout) */}

      <Laptop>
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            fontSize: { laptopSmall: '4rem', laptopLarge: '4.5rem' }
          }}
          >
          Work Samples
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '5rem'
          }}
          gap={4}
          >
          {samples.map((sample, index) => (
            <Box
              key={index}
              onClick={sample.click}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                display: 'block',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                marginX: 'auto',
                maxWidth: { laptopSmall: '47.5%', laptopLarge: '31%' }
              }}
              >
              <Box
                component='img'
                src={sample.source}
                alt='Social Network App'
                sx={{
                  border: '0.35rem solid var(--secondary)',
                  borderRadius: '0.35rem',
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
              <Button
                sx={{
                  textAlign: 'center',
                  fontSize: 25,
                  width: '100%',
                  color: 'var(--secondary)',
                  border: '0.25rem solid var(--secondary)',
                  bgcolor: 'white',
                  borderRadius: '2rem'
                }}
                >
                {sample.full}
              </Button>
              <Box className='work-sample-img'>
                <Box
                  sx={{
                    textAlign: 'center',
                    fontSize: '1.5rem'
                  }}
                  >
                  <sample.icon
                    sx={{
                      color: 'var(--secondary)',
                      marginBottom: '1.5rem',
                      fontSize: 225
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontSize: 40
                    }}
                    >
                    {sample.short}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Laptop>

      {/* for tablet displays (vertical layout) */}

      <Tablet>
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            fontSize: '3.5rem'
          }}
          >
          Work Samples
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '5rem'
          }}
          gap={4}
          >
          {samples.map((sample, index) => (
            <Box
              key={index}
              onClick={sample.click}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                display: 'block',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                marginX: 'auto',
                maxWidth: '47.5%'
              }}
              >
              <Box
                component='img'
                src={sample.source}
                alt='Social Network App'
                sx={{
                  border: '0.35rem solid var(--secondary)',
                  borderRadius: '0.35rem',
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
              <Button
                sx={{
                  textAlign: 'center',
                  fontSize: 15,
                  width: '100%',
                  color: 'var(--secondary)',
                  border: '0.25rem solid var(--secondary)',
                  bgcolor: 'white',
                  borderRadius: '2rem'
                }}
                >
                {sample.full}
              </Button>
              <Box className='work-sample-img'>
                <Box
                  sx={{
                    textAlign: 'center',
                    fontSize: '1.5rem'
                  }}
                  >
                  <sample.icon
                    sx={{
                      color: 'var(--secondary)',
                      marginBottom: '1.5rem',
                      fontSize: 175
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontSize: 30
                    }}
                    >
                    {sample.short}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Tablet>

      {/* for mobile displays (vertical layout) */}

      <Mobile>
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            fontSize: { zero: '2rem', mobile: '3rem' }
          }}
          >
          Work Samples
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '5rem'
          }}
          gap={4}
          >
          {samples.map((sample, index) => (
            <Box
              key={index}
              onClick={sample.click}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                display: 'block',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                marginX: 'auto',
                maxWidth: '95%'
              }}
              >
              <Box
                component='img'
                src={sample.source}
                alt='Social Network App'
                sx={{
                  border: '0.35rem solid var(--secondary)',
                  borderRadius: '0.35rem',
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
              <Button
                sx={{
                  textAlign: 'center',
                  fontSize: 15,
                  width: '100%',
                  color: 'var(--secondary)',
                  border: '0.25rem solid var(--secondary)',
                  bgcolor: 'white',
                  borderRadius: '2rem'
                }}
                >
                {sample.full}
              </Button>
              <Box className='work-sample-img'>
                <Box
                  sx={{
                    textAlign: 'center',
                    fontSize: '1.5rem'
                  }}
                  >
                  <sample.icon
                    sx={{
                      color: 'var(--secondary)',
                      marginBottom: '1.5rem',
                      fontSize: { zero: 125, mobile: 175 }
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontSize: { zero: 20, mobile: 30 }
                    }}
                    >
                    {sample.short}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Mobile>

      {windows.map((window, index) => (
        <Dialog
          key={index}
          open={window.open}
          onClose={window.close}
          scroll={window.scroll}
          maxWidth='lg'
          >
          <Box
            sx={{ bgcolor: 'var(--secondary)' }}
            >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
              >
              <IconButton
                onClick={window.close}
                sx={{ color: 'white' }}
                >
                <CloseIcon />
              </IconButton>
            </Box>
            <DialogTitle
              sx={{
                textAlign: 'center',
                color: 'white',
                fontSize: { zero: '1.25rem', mobile: '1.75rem', tabletSmall: '2rem', laptopSmall: '2.25rem', laptopLarge: '2.5rem' }
              }}
              >
              {window.name}
            </DialogTitle>
            <DialogContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              >
              <window.link />
            </DialogContent>
            <DialogActions
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
              >
              <Button
                variant='outlined'
                href={window.website}
                target='_blank'
                rel='noreferrer'
                sx={buttonSX}
                >
                Web App
              </Button>
              <Button
                variant='outlined'
                href={window.github}
                target='_blank'
                rel='noreferrer'
                sx={buttonSX}
                >
                GitHub Repo
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
      ))}

    </ThemeProvider>
  )
}