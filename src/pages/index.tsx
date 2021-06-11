import React from 'react'
import Head from 'next/head'

import PageLayout from 'components/PageLayout'
import WifiForm from 'components/WifiForm'

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

export default HomePage
