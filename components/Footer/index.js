import React from "react";
import Link from "next/link";

const Footer = () => {
return (
<div className='bg-gray-700'>
  <div className='container mx-auto text-center font-semibold text-gray-100'>
    Projeto desenvolvido por:
    <a href='https://cretton.info'>Tércio Cretton / </a> 
    <a href='https://linkedin.com/in/tercio-cretton'>Linkedin / </a>
    <a href='https://github.com/tcretton'>/ Github</a>
    <a href='https://devpleno.com'> Durante o curso FullStack Master - Devpleno.com</a>
  </div>
</div>
)
}

export default Footer
