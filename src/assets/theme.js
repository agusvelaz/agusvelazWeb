import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#202020',
      main: '#000000',
      dark: '#131211',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffff59',
      main: '#e0ff00',
      dark: '#959595',
      contrastText: '#000000',
    },

  },
});


export default theme;