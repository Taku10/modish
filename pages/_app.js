import React from 'react'
import {Layout} from '../components'
import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/navbar.css'
import '../styles/home.css'


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}
