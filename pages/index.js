import React from 'react'
import Link from 'next/link'

const Index =() => {
  return (
    <div>
      <p className='mt-12 text-center'>
        O restaurante X sempre busca atender melhor seus clientes.<br/>
        Sua opnião é muito importante para nós.
      </p>
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='bg-blue-800 px-6 py-4 font-bold rounded-lg shadow-lg'>De opnião ou sugestão !</a>
        </Link>
      </div>
      <p className='mt-12 text-center'>
       Mensagem do desconto !
      </p>
    </div>
  )
}

export default Index