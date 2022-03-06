import React from 'react'
import Link from 'next/link'

const Index =() => {
  return (
    <div>
      <p className='mt-12 text-center'>
        Visando a melhoria dos nossos serviços, gostariamos de saber a sua opnião sobre nossa equipe e serviços.<br/>
        Sua opnião é importante pra lhe atender melhor na sua visita a nossa cidade.
      </p>
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='bg-blue-800 px-6 py-4 font-bold rounded-lg shadow-lg text-gray-100'>De opnião ou sugestão !</a>
        </Link>
      </div>
      <p className='my-6 text-center'>
        Mensagem do desconto !
      </p>
    </div>
  )
}

export default Index