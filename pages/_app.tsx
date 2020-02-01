import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import NoSsr from '@material-ui/core/NoSsr'
import GithubIcon from '@material-ui/icons/Github'
import LightThemeIcon from '@material-ui/icons/Brightness7'
import DarkThemeIcon from '@material-ui/icons/Brightness4'

import createTheme, { ThemeType } from '../src/theme'
import useLocalStorage from '../src/useLocalStorage'

const useStyles = makeStyles(theme => ({
  appBar: {
    marginBottom: theme.spacing(2),
  },
  toolbar: {
    flexGrow: 1,
  },
}))

function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = useLocalStorage<ThemeType>('theme', ThemeType.LIGHT)
  const theme = React.useMemo(() => createTheme(themeType), [themeType])
  const classes = useStyles(pageProps)

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <style global jsx>{`
          @media print {
            * {
              visibility: hidden;
            }

            #qrcode-canvas {
              visibility: visible;
            }
          }
        `}</style>
        <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6">QR Code Generator</Typography>
            <div className={classes.toolbar} />
            <NoSsr>
              <IconButton
                color="inherit"
                onClick={() =>
                  void setThemeType(t => (t === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT))
                }
              >
                {themeType === ThemeType.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />}
              </IconButton>
            </NoSsr>
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
    </>
  )
}

export default MyApp
