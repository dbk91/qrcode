import React from 'react'
import Head from 'next/head'

import Layout from 'components/Layout'
import PageLayout from 'components/PageLayout'
import ContactForm from 'components/ContactForm'

import type { ReactElement } from 'react'

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

ContactPage.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default ContactPage
