import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import { Outlet } from 'react-router-dom'

import { styled } from '@mui/material/styles'

import {
  Box,
  CssBaseline,
  createTheme,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography
} from '@mui/material'

import MuiAppBar from '@mui/material/AppBar'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone'
import FolderSpecialTwoToneIcon from '@mui/icons-material/FolderSpecialTwoTone'
import MenuIcon from '@mui/icons-material/Menu'
import DescriptionIcon from '@mui/icons-material/Description'

import Footer from './Footer.jsx'

import squareH from '../assets/img/square-h.svg'

const drawerWidth = 200

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

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0,
    })
  })
)

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))

const menu = [
  {
    title: 'Home',
    icon: HomeTwoToneIcon,
    link: '/',
  },
  {
    title: 'About Me',
    icon: InfoTwoToneIcon,
    link: '/about',
  },
  {
    title: 'My Work',
    icon: FolderSpecialTwoToneIcon,
    link: '/work-samples',
  },
  {
    title: 'Contact Me',
    icon: EmailTwoToneIcon,
    link: '/contact',
  }
]

export default function App() {

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => setOpen(true)

  const handleDrawerClose = () => setOpen(false)

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ display: 'flex' }}
        >
        <CssBaseline />

        {/* for laptop/desktop displays (horizontal layout) */}

        <Laptop>
          <AppBar
            position='fixed'
            open={open}
            >
            <Toolbar
              sx={{ bgcolor: 'var(--secondary)' }}
              >
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{
                  marginRight: 2,
                  ...(open && { display: 'none' })
                }}
                >
                <MenuIcon />
              </IconButton>
              <Box
                gap={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
                >
                <Box
                  component='img'
                  src={squareH}
                  alt='Square-H Icon'
                />
                <Typography
                  noWrap
                  component='div'
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: { laptopSmall: '2.25rem', laptopLarge: '2.5rem' }
                  }}
                  >
                  The Hawk's Nest
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
        </Laptop>

        {/* for tablet displays (vertical layout) */}

        <Tablet>
          <AppBar
            position='fixed'
            open={open}
            >
            <Toolbar
              sx={{ bgcolor: 'var(--secondary)' }}
              >
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{
                  marginRight: 2,
                  ...(open && { display: 'none' })
                }}
                >
                <MenuIcon />
              </IconButton>
              <Box
                gap={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
                >
                <Box
                  component='img'
                  src={squareH}
                  alt='Square-H Icon'
                />
                <Typography
                  noWrap
                  component='div'
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: '2rem'
                  }}
                  >
                  The Hawk's Nest
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
        </Tablet>

        {/* for mobile displays (vertical layout) */}

        <Mobile>
          <AppBar
            position='fixed'
            open={open}
            >
            <Toolbar
              sx={{ bgcolor: 'var(--secondary)' }}
              >
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{
                  marginRight: 2,
                  ...(open && { display: 'none' })
                }}
                >
                <MenuIcon />
              </IconButton>
              <Box
                gap={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
                >
                <Box
                  component='img'
                  src={squareH}
                  alt='Square-H Icon'
                />
                <Typography
                  noWrap
                  component='div'
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: { zero: '1.25rem', mobile: '1.75rem' }
                  }}
                  >
                  The Hawk's Nest
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
        </Mobile>

        <Drawer
          variant='persistent'
          anchor='left'
          open={open}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            }
          }}
          >
          <DrawerHeader sx={{ bgcolor: 'var(--secondary)' }}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon sx={{ color: 'white' }} />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {menu.map((menu, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton
                  component={Link}
                  href={menu.link}
                  >
                  <ListItemIcon>
                    <menu.icon />
                  </ListItemIcon>
                  <ListItemText primary={menu.title} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA'
                target='_blank'
                rel='noreferrer'
                >
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary='Resume' />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>

        <Main open={open}>
          <DrawerHeader />
          <Outlet />
          <Footer />
        </Main>

      </Box>
    </ThemeProvider>
  )
}