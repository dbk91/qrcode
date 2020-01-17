import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import WifiForm from '../components/WifiForm'
import QRCodeCanvas from '../components/QRCodeCanvas'

function HomePage() {
  const [qrCodeText, setQrCodeText] = React.useState<string>('')

  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={12}>
          <QRCodeCanvas text={qrCodeText} />
        </Grid>
        <Box m={2} />
        <Grid item xs={12}>
          <WifiForm onSuccess={setQrCodeText} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
