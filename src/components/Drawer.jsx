import * as React from 'react'

import { Outlet } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

const drawerWidth = 200

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
        sx={{
          display: 'flex'
        }}
      >
        <CssBaseline />
        <AppBar
          position='fixed'
          open={open}
        >
          <Toolbar
            sx={{
              bgcolor: 'var(--secondary)'
            }}
          >
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{
                mr: 2,
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
              <FontAwesomeIcon icon="square-h" />
              <Typography
                noWrap
                component='div'
                sx={{
                  textTransform: 'uppercase',
                  fontSize: {
                    xxs: '1.25rem',
                    xs: '1.5rem',
                    sm: '1.75rem',
                    md: '2rem',
                    lg: '2.25rem',
                    xl: '2.5rem',
                    xxl: '2.75rem'
                  }
                }}
              >
                The Hawk's Nest
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='persistent'
          anchor='left'
          open={open}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <DrawerHeader sx={{ bgcolor: 'var(--secondary)' }}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon sx={{ color: 'white' }} />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {menu.map((menu) => (
              <ListItem disablePadding>
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