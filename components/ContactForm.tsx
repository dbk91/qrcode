import React from 'react'
import { Formik, Form, FormikErrors } from 'formik'
import QRCode from 'qrcode'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import TextField from '../components/TextField'
import ButtonGroup from '../components/ButtonGroup'
import Checkbox from '../components/Checkbox'

interface ContactFormProps {
  onSuccess: (text: string) => void
}

function ContactForm(props: ContactFormProps) {
  const handleSubmit = React.useCallback((values, { setSubmitting }) => {
    const text = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${values.lastName};${values.firstName};;;`,
      `FN:${values.firstName} ${values.lastName}`,
      `TITLE:${values.title}`,
      `ORG:${values.company}`,
      'PHOTO;VALUE=URI;TYPE=JPEG:https://avatars0.githubusercontent.com/u/7128101?s=460&v=4',
      `TEL;WORK;VOICE:${values.phone}`,
      `EMAIL;TYPE=WORK:${values.email}`,
      `URL;TYPE=Homepage:${values.homepage}`,
      `ADR;TYPE=WORK:${values.address.split('\n').join(';')};;`,
      'END:VCARD',
    ].join('\n')

    props.onSuccess(text)
    setSubmitting(false)
  }, [])

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        title: '',
        company: '',
        email: '',
        phone: '',
        address: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                id="first-name"
                name="firstName"
                label="First Name"
                fullWidth
                autoFocus
                margin="none"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="last-name" name="lastName" label="Last Name" fullWidth margin="none" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="title" name="title" label="Title" fullWidth margin="none" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="company" name="company" label="Company" fullWidth margin="none" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="email" name="email" label="E-mail" fullWidth margin="none" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="phone" name="phone" label="Phone" fullWidth margin="none" />
            </Grid>
            <Grid item xs>
              <TextField id="address" name="address" label="Address" fullWidth multiline rows={4} />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit" size="small">
            Generate QRCode
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
