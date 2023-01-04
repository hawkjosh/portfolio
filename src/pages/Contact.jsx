import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import {
  Button,
  createTheme,
  Paper,
  ThemeProvider,
  TextField,
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

const paperSX = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: { zero: '100%', laptopSmall: '75%', laptopLarge: '65%' },
  margin: '0rem auto 4rem',
  padding: 3
}

const textSX = {
  marginBottom: '1.5rem'
}

const buttonSX = {
  bgcolor: 'var(--secondary)',
  '&:hover': { bgcolor: 'var(--primary)', borderColor: 'var(--secondary)' }
}

export default function App() {

  const [formValues, setFormValues] = React.useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

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
          Contact Me
        </Typography>
        <Paper
          component='form'
          onSubmit={handleSubmit}
          sx={paperSX}
          >
          <TextField
            fullWidth
            id='name-input'
            name='name'
            label='Name'
            type='text'
            margin='dense'
            value={formValues.name}
            onChange={handleInputChange}
            sx={textSX}
          />
          <TextField
            fullWidth
            id='email-input'
            name='email'
            label='Email'
            type='text'
            margin='dense'
            value={formValues.email}
            onChange={handleInputChange}
            sx={textSX}
          />
          <TextField
            fullWidth
            multiline
            rows={7}
            id='message-input'
            name='message'
            label='Message'
            type='text'
            margin='dense'
            value={formValues.message}
            onChange={handleInputChange}
            sx={textSX}
          />
          <Button
            variant='contained'
            size='large'
            type='submit'
            sx={buttonSX}
            >
            Submit
          </Button>
        </Paper>
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
          Contact Me
        </Typography>
        <Paper
          component='form'
          onSubmit={handleSubmit}
          sx={paperSX}
          >
          <TextField
            fullWidth
            id='name-input'
            name='name'
            label='Name'
            type='text'
            margin='dense'
            value={formValues.name}
            onChange={handleInputChange}
            sx={textSX}
          />
          <TextField
            fullWidth
            id='email-input'
            name='email'
            label='Email'
            type='text'
            margin='dense'
            value={formValues.email}
            onChange={handleInputChange}
            sx={textSX}
          />
          <TextField
            fullWidth
            multiline
            rows={7}
            id='message-input'
            name='message'
            label='Message'
            type='text'
            margin='dense'
            value={formValues.message}
            onChange={handleInputChange}
            sx={textSX}
          />
          <Button
            variant='contained'
            size='large'
            type='submit'
            sx={buttonSX}
            >
            Submit
          </Button>
        </Paper>
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
          Contact Me
        </Typography>
        <Paper
          component='form'
          onSubmit={handleSubmit}
          sx={paperSX}
          >
          <TextField
            fullWidth
            id='name-input'
            name='name'
            label='Name'
            type='text'
            margin='dense'
            value={formValues.name}
            onChange={handleInputChange}
            sx={textSX}
          />
          <TextField
            fullWidth
            id='email-input'
            name='email'
            label='Email'
            type='text'
            margin='dense'
            value={formValues.email}
            onChange={handleInputChange}
            sx={textSX}
          />
          <TextField
            fullWidth
            multiline
            rows={7}
            id='message-input'
            name='message'
            label='Message'
            type='text'
            margin='dense'
            value={formValues.message}
            onChange={handleInputChange}
            sx={textSX}
          />
          <Button
            variant='contained'
            size='large'
            type='submit'
            sx={buttonSX}
            >
            Submit
          </Button>
        </Paper>
      </Mobile>

    </ThemeProvider>
  )
}