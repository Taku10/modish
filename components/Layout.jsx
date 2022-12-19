import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Modish</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
