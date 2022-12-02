import * as React from 'react'

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

const paperSX = {
  width: {
    xxs: '100%',
    lg: '75%',
    xl: '65%'
  },
  marginBottom: '4rem',
  marginX: 'auto',
  padding: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const textSX = {
  marginBottom: '1.5rem'
}

const buttonSX = {
  bgcolor: 'var(--secondary)',
  '&:hover':{
    bgcolor: 'var(--primary)',
    borderColor: 'var(--secondary)'
  }
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
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          fontSize: {
            xxs: '2rem',
            xs: '2.5rem',
            sm: '3rem',
            md: '3.5rem',
            lg: '4rem',
            xl: '4.5rem',
            xxl: '5rem'
          }
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
    </ThemeProvider>
  )
}