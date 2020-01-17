import React from 'react'
import QRCode from 'qrcode'
import { Formik, Form } from 'formik'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import WifiForm from '../components/WifiForm'

function HomePage() {
  const canvasEl = React.useRef(null)
  const handleSuccess = React.useCallback(text => {
    if (canvasEl.current !== null) {
      QRCode.toCanvas(canvasEl.current, text, function(error) {
        if (error) {
          throw error
        }
      })
    } else {
      throw new Error('Oops')
    }
  }, [])

  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={12}>
          <WifiForm onSuccess={handleSuccess} />
        </Grid>
        <Grid item xs={12}>
          <canvas ref={canvasEl} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
