import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import makeStyles from '@material-ui/core/styles/makeStyles'

import WifiForm from '../components/WifiForm'
import QRCodeCanvas from '../components/QRCodeCanvas'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(4, 0),
  },
}))

function HomePage(props) {
  const [qrCodeText, setQrCodeText] = React.useState<string>('')
  const classes = useStyles(props)

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper}>
        <WifiForm onSuccess={setQrCodeText} />
        <Divider variant="middle" className={classes.divider} />
        <QRCodeCanvas text={qrCodeText} />
      </Paper>
    </Container>
  )
}

export default HomePage
