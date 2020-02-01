import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import WifiForm from '../components/WifiForm'
import QRCodeCanvas from '../components/QRCodeCanvas'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  divider: {
    alignSelf: 'stretch',
    height: 'auto',
    margin: theme.spacing(0, 2),
  },
}))

function HomePage(props) {
  const [qrCodeText, setQrCodeText] = React.useState<string>('')
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('sm'))
  const classes = useStyles(props)

  return (
    <Container maxWidth="md">
      <Paper className={classes.paper}>
        <Grid container alignItems="center" direction={match ? 'row' : 'column'}>
          <Grid item xs>
            <WifiForm onSuccess={setQrCodeText} />
          </Grid>
          <Divider
            orientation={match ? 'vertical' : 'horizontal'}
            className={match ? classes.divider : ''}
          />
          <Grid item xs>
            <QRCodeCanvas text={qrCodeText} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default HomePage
