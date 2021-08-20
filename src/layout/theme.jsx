import { createTheme } from "@material-ui/core";

const defaultTheme = createTheme();
const { breakpoints } = defaultTheme;

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "2.5rem",
      },
    },
  },
};

export default theme;
