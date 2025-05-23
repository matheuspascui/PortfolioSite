import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#4f8e3e",
    },
    warning: {
      main: '#f79256'
    }
  },
  typography: {
    fontFamily: "sans-serif",
    // -apple-system,
    // BlinkMacSystemFont,
    //Segoe UI
    //Roboto,
    //Arial
    //sans-serif
    //Helvetica Neue
    //Apple Color Emoji
    //Segoe UI Emoji
    //Segui UI Symbol

  }
});

theme = responsiveFontSizes(theme);

export default theme;