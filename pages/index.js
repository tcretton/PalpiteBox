import React from 'react'
import Link from 'next/link'

const Index =() => {
  return (
    <div>
      <p className='mt-12 text-center'>
        O restaurante X sempre busca atender melhor seus clientes.<br/>
        Sua opnião é muito importante para nós.
      </p>
      <div className='text-center'>
        <Link href='/pesquisa'>
          <a className='bg-blue-700 px-6 py-4'>De opnião ou sugestão !</a>
        </Link>
      </div>
    </div>
  )
}

export default Index