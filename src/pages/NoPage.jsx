import * as React from 'react';

import {
  Alert,
  Box,
  createTheme,
  ThemeProvider,
} from '@mui/material';

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
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
        <Alert variant='outlined' severity='error'>
          404 Error Page
        </Alert>
      </Box>
    </ThemeProvider>
  );
}