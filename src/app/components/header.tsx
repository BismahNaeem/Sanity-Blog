import React from 'react'
import Image from 'next/image'


const header = () => {
  return (
    <div>
   
    <header className="text-gray-600 body-font bg-gray-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         <Image src="/images/pic1.png"  alt="blog-logo" height={50}width={50}/>
          <span className="ml-3 text-xl">BLOG</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
         <h2 className='font-semibold'>Where Technology Meets Tomorrow</h2>
        </nav>
     
      </div>
    </header>
    
  
  </div>
  )
}

export default header