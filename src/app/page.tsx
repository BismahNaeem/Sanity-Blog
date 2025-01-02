import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <>
 
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <Image
        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="/images/pic3.png"
      />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4  text-gray-900">
        The AI Revolution: Transforming Our World
        </h1>
        <p className="mb-8  leading-relaxed">
        We are living in an era where artificial intelligence is no longer just a concept but a reality thats reshaping our world. This blog explores the exciting developments innovations and advancements in AI and their far-reaching implications for humanity.
        </p>
        <div className="flex justify-center">
        <Link href="/blogpage">
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Start Exploring
          
        </button>
        </Link>
         
        </div>
      </div>
    </div>
  </section>
  
</>

    </div>
  )
}

export default Home