import React from 'react'
import {Layout} from '../components/'
import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/navbar.css'
import '../styles/home.css'
import '../styles/about.css'
import '../styles/contact.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-tabs/style/react-tabs.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}
