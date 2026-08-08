"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const theme = (0, material_1.createTheme)({
    palette: {
        background: { default: "#FAF9F6" },
    },
});
const ThemeContextProvider = ({ children }) => (<material_1.ThemeProvider theme={theme}>
    <material_1.CssBaseline />
    {children}
  </material_1.ThemeProvider>);
exports.default = ThemeContextProvider;
