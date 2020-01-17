import React from 'react'
import { Formik, Form } from 'formik'
import QRCode from 'qrcode'
import Button from '@material-ui/core/Button'

import TextField from '../components/TextField'
import ButtonGroup from '../components/ButtonGroup'
import Checkbox from '../components/Checkbox'

interface WifiFormProps {
  onSuccess: (text: string) => void
}

function WifiForm(props: WifiFormProps) {
  const handleSubmit = React.useCallback((values, { setSubmitting }) => {
    let text = ''

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

    props.onSuccess(text)
    setSubmitting(false)
  }, [])

  return (
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
          <TextField id="ssid" name="ssid" label="Wi-Fi Network Name" fullWidth />
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
              id="password"
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
  )
}

export default WifiForm
