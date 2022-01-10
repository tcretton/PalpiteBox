import React from 'react'
import '../css/styles.css'

const MyApp = ({Component, pageProps}) => {
  return(
    <div>
      <h1 className='bg-red-900'>My App</h1>
      <Component {...pageProps}></Component> 
    </div>
  )
}

export default MyApp