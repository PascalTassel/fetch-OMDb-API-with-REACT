import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#84c001",
      light: "rgb(156, 204, 51)",
      dark: "rgb(92, 134, 0)",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    secondary: {
      main: "#0074d9",
      light: "rgb(51, 143, 224)",
      dark: "rgb(0, 81, 151)",
      contrastText: "#fff"
    },
    background: {
      paper: "#040231",
      default: "#020119"
    }
  },
  typography: {
    h1: {
      fontSize: "2.5rem"
    },
    h2: {
      fontSize: "2rem"
    },
    h3: {
      fontSize: "1.75rem"
    },
    h4: {
      fontSize: "1.5rem"
    },
    h5: {
      fontSize: "1.25rem"
    },
    h6: {
      fontSize: "1rem"
    }
  }
});

export default responsiveFontSizes(theme);
