import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import GithubIcon from '@material-ui/icons/Github'

import createTheme, { ThemeType } from '../src/theme'

const useStyles = makeStyles(theme => ({
  toolbar: {
    flexGrow: 1,
  },
}))

function MyApp({ Component, pageProps }) {
  const theme = React.useMemo(() => createTheme(ThemeType.LIGHT), [])
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
    </>
  )
}

export default MyApp
