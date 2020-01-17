import React from 'react'
import App from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

enum ThemeType {
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

function MyApp({ Component, pageProps }) {
  const theme = React.useMemo(() => createTheme(ThemeType.LIGHT), [])

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
