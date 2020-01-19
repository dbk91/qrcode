import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

const createTheme = (type: ThemeType) =>
  createMuiTheme({
    palette: {
      type,
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    overrides: {
      MuiButton: {
        label: {
          textTransform: 'capitalize',
        },
      },
      MuiTab: {
        root: {
          textTransform: 'capitalize',
          textAlign: 'left',
        },
      },
    },
  })

export default createTheme
