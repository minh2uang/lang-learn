import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: { default: "#FAF9F6" },
  },
});

const ThemeContextProvider = ({ children }: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
export default ThemeContextProvider;
