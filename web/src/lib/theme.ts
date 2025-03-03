import { createTheme } from "@mui/material";
import colors from "tailwindcss/colors";

export const theme = createTheme({
  palette: {
    //mode: 'dark',
    primary: {
      light: colors.neutral[700],
      //main: colors.neutral[700],
      main:  '#FF499E',
      dark: colors.neutral[700],
      contrastText: colors.white,
    },
    secondary: {
      light: colors.white,
      main: '#FF499E',
      dark: colors.neutral[700],
      contrastText: colors.white,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      'Inter',
      //'Roboto',
      'Avenir',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});