import React from 'react'
import Link from 'next/link'

const Index =() => {
  return (
    <div>
      <p className='mt-6 text-center'>
        O restaurante X sempre busca atender melhor seus clientes.<br/>
        Sua opnião é muito importante para nós.
      </p>
      <div>
        <Link href='/pesquisa'>
          <a>Dar opnião ou sugestão</a>
        </Link>
      </div>
    </div>
  )
}

export default Index