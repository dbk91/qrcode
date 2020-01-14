import React from 'react'
import QRCode from 'qrcode'
import { Formik, Form } from 'formik'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

import TextField from '../components/TextField'
import ButtonGroup from '../components/ButtonGroup'
import Checkbox from '../components/Checkbox'

const qrcodeAttributes = ['WIFI', 'T', 'S', 'P', 'H', ';']

function HomePage() {
  const canvasEl = React.useRef(null)
  const handleSubmit = React.useCallback((values, { setSubmitting }) => {

    if (values.authType !== 'nopass') {
      if (values.isHidden) {
        text = `WIFI:T:${values.authType};S:${values.ssid};P:${values.password};H:true;`
      } else {
        text = `WIFI:T:${values.authType};S:${values.ssid};P:${values.password};;`
      }
    } else {
      if (values.isHidden) {
        text = `WIFI:T:${values.authType};S:${values.ssid};H:true;`
      } else {
        text = `WIFI:T:${values.authType};S:${values.ssid};;`
      }
    }

    if (canvasEl.current !== null) {
      QRCode.toCanvas(canvasEl.current, text, function(error) {
        if (error) {
          throw error;
        }
      })
    } else {
      throw new Error('Oops')
    }

    setSubmitting(false)
  });

  return (
    <Container maxWidth="xs">
      <Formik
        initialValues={{
          ssid: '',
          password: '',
          authType: 'WPA',
          isHidden: false,
        }}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <TextField
              name="ssid"
              label="Wi-Fi Network Name"
              fullWidth
            />
            <ButtonGroup
              name="authType"
              margin="normal"
              fullWidth
              options={[
                { value: 'nopass', label: 'None' },
                { value: 'WEP', label: 'WEP' },
                { value: 'WPA', label: 'WPA' },
              ]}
            />
            {values.authType !== 'nopass' && (
              <TextField
                name="password"
                label="Wi-Fi Network Password"
                type="password"
                fullWidth
              />
            )}
            <Checkbox name="isHidden" id="is-hidden-network" label="Is Hidden Network" />
            <Button variant="contained" color="primary" type="submit" size="small">
              Generate QRCode
            </Button>
          </Form>
        )}
      </Formik>
      <canvas ref={canvasEl} />
    </Container>
  )
}

export default HomePage
