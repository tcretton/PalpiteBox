import React from "react"
import Link from "next/link"

const Header =  () => {
  return ( 
  <React.Fragment>
    <div className='bg-gray-200 p-4 shadow-lg'>
      <div className='container mx-auto'>
        <img className='mx-auto' src='/logo_palpitebox.png' alt='PalpiteBox'></img>
      </div>
    </div>
    <div className='bg-gray-300 p-4 shadow-lg text-center'>
      <Link href='/sobre'>
        <a className='px-2'>Sobre</a>
      </Link>
      <Link href='/contato'>
        <a>Contato</a>
      </Link>
      <Link href='/pesquisa'>
        <a>Pesquisa</a>
      </Link>
    </div>
  </React.Fragment>
  )
}

export default Header