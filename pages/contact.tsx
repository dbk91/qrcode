import React from 'react'

import PageLayout from '../components/PageLayout'
import ContactForm from '../components/ContactForm'

function ContactPage() {
  return <PageLayout render={({ setQrCodeText }) => <ContactForm onSuccess={setQrCodeText} />} />
}

export default ContactPage
