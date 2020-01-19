import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/core/styles/makeStyles'

import WifiForm from '../components/WifiForm'
import QRCodeCanvas from '../components/QRCodeCanvas'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  qrCodeCanvas: {
    backgroundColor: theme.palette.background.default,
  },
}))

function HomePage(props) {
  const [qrCodeText, setQrCodeText] = React.useState<string>('')
  const classes = useStyles(props)

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12}>
            <WifiForm onSuccess={setQrCodeText} />
          </Grid>
          <Grid item xs={12} className={classes.qrCodeCanvas}>
            <QRCodeCanvas text={qrCodeText} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default HomePage
