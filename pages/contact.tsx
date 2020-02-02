import React from 'react'

import ContactForm from '../components/ContactForm'

interface ContactPageProps {
  setQrCodeText: () => void
}

function ContactPage(props: ContactPageProps) {
  return <ContactForm onSuccess={props.setQrCodeText} />
}

export default ContactPage
