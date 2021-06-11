import React from 'react'
import Head from 'next/head'

import PageLayout from 'components/PageLayout'
import ContactForm from 'components/ContactForm'

function ContactPage() {
  return (
    <>
      <Head>
        <title>QR Code Generator - Contact</title>
      </Head>
      <PageLayout render={({ setQrCodeText }) => <ContactForm onSuccess={setQrCodeText} />} />
    </>
  )
}

export default ContactPage
