import React from "react";
import Link from "next/link";

const Footer = () => {
return (
<div className='bg-gray-700 p-4'>
  <div className='container mx-auto text-center font-semibold text-gray-100'>
    Projeto desenvolvido por:{' '}
    <a className='hover:underline' href='https://cretton.info'>Tércio Cretton</a> {' '}
    <a className='hover:underline' href='https://linkedin.com/in/tercio-cretton'>Linkedin</a>{' '}
    <a className='hover:underline' href='https://github.com/tcretton'>Github</a>
    <br></br>
    <a className='hover:underline' href='https://devpleno.com'> No curso FullStack Master - Devpleno.com</a>
    <img src=''></img>
  </div>
</div>
)
}

export default Footer
