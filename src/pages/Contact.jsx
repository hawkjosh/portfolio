import * as React from 'react';

import {
  createTheme,
  ThemeProvider,
  Typography
} from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440,
      xxl: 1515
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Contact Page</Typography>
    </ThemeProvider>
  );
}