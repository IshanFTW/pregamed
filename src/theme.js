import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a5f7a",
      light: "#2c7a9a",
      dark: "#134b61",
    },
    secondary: {
      main: "#ffa726",
      light: "#ffb74d",
      dark: "#f57c00",
    },
    background: {
      default: "#f0f7ff",
      paper: "#ffffff",
    },
    text: {
      primary: "#2c3e50",
      secondary: "#34495e",
    },
  },
  // ... other theme properties
})

export default theme