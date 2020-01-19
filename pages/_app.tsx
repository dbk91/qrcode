import React from 'react'
import App from 'next/app'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { ThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import GithubIcon from '@material-ui/icons/Github'

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
  const [padding, setPadding] = React.useState(0)
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const measureAppBar = React.useCallback(
    node => {
      if (node) {
        setPadding(node.clientHeight + 8)
      }
    },
    [matches],
  )

  return (
    <ThemeProvider theme={theme}>
      <AppBar innerRef={measureAppBar} elevation={0}>
        <Toolbar>
          <Box display="flex" flexGrow={1} />
          <Link
            href="https://github.com/dbk91/qrcode"
            target="_blank"
            rel="noopener"
            component={IconButton}
            edge="end"
            color="inherit"
          >
            <GithubIcon />
          </Link>
        </Toolbar>
      </AppBar>
      <Box m={`${padding}px`} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
