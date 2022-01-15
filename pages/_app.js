import React from 'react'
import '../css/styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp = ({Component, pageProps}) => {
  return(
  <div>
    <Header></Header>
    <div className='container mx-auto'>
      <Component {...pageProps}></Component>
    </div>
    <Footer></Footer>
  </div>
  )
}

export default MyApp