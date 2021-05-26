import React from 'react'

import PageLayout from 'components/PageLayout'
import WifiForm from 'components/WifiForm'

const HomePage = () => {
  return <PageLayout render={({ setQrCodeText }) => <WifiForm onSuccess={setQrCodeText} />} />
}

export default HomePage
