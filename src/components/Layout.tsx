import * as React from 'react'
import Router, { useRouter } from 'next/router'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import NoSsr from '@material-ui/core/NoSsr'
import GithubIcon from '@material-ui/icons/GitHub'
import LightThemeIcon from '@material-ui/icons/Brightness7'
import DarkThemeIcon from '@material-ui/icons/Brightness4'
import makeStyles from '@material-ui/core/styles/makeStyles'

import createTheme, { ThemeType } from 'theme'
import useLocalStorage from 'useLocalStorage'

const useStyles = makeStyles(theme => ({
  tabs: {
    marginBottom: theme.spacing(2),
  },
  toolbar: {
    flexGrow: 1,
  },
}))

export default function Layout({ children }) {
  const router = useRouter()
  const classes = useStyles()

  const [themeType, setThemeType] = useLocalStorage<ThemeType>('theme', ThemeType.LIGHT)
  const theme = React.useMemo(() => createTheme(themeType), [themeType])

  const onTabChange = React.useCallback((event, value) => {
    event.preventDefault()
    Router.push(value)
  }, [])

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="inherit" elevation={0}>
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
      <Tabs
        centered
        indicatorColor="primary"
        value={router.pathname}
        onChange={onTabChange}
        className={classes.tabs}
      >
        <Tab label="Wi-Fi Network" value="/" />
        <Tab label="Contact Card" value="/contact" />
      </Tabs>
      <main>
        {children}
      </main>
    </ThemeProvider>
  )
}
