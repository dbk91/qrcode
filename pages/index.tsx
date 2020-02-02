import React from 'react'

import WifiForm from '../components/WifiForm'

interface HomePageProps {
  setQrCodeText: () => void
}

const HomePage = (props: HomePageProps) => {
  return <WifiForm onSuccess={props.setQrCodeText} />
}

export default HomePage
