import React from 'react'
import Head from 'next/head'

import Layout from 'components/Layout'
import PageLayout from 'components/PageLayout'
import WifiForm from 'components/WifiForm'

import type { ReactElement } from 'react'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>QR Code Generator - Wi-Fi</title>
      </Head>
      <PageLayout render={({ setQrCodeText }) => <WifiForm onSuccess={setQrCodeText} />} />
    </>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default HomePage
