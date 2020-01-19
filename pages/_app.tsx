import React from 'react'
import App from 'next/app'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { ThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import makeStyles from '@material-ui/core/styles/makeStyles'
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

const useStyles = makeStyles(theme => ({
  toolbar: {
    flexGrow: 1,
  },
}))

function MyApp({ Component, pageProps }) {
  const theme = React.useMemo(() => createTheme(ThemeType.LIGHT), [])
  const classes = useStyles(pageProps)

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <div className={classes.toolbar} />
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
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
