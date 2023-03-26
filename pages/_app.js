import React from 'react'
import { Layout } from '../components/'
import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/navbar.css'
import '../styles/home.css'
import '../styles/about.css'
import '../styles/contact.css'
import '../styles/footer.css'
import '../styles/shop.css'
import '../styles/cart.css'
import '../styles/access.css'
import '../styles/details.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-tabs/style/react-tabs.css';
import { useStateContext } from '../context/StateContext'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>


  )
}
