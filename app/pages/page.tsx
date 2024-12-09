import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const SingleProductPage = () => {
  return (
    <div id='pages' className="bg-white">
      <section className="bg-white text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={require("@/public/image/Image (2).png")}
        width={675}
        height={607}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      
        <h1 className="text-[#272343] text-4xl title-font font-bold mb-1">
        Library Stool <br/>
        Chair
        </h1>
        <br/>
        <div className="flex mb-4">
          
         
           
          
           
         
            <button className="bg-[#029FAE] hover:bg-[#029FAE] rounded-full border-0 py-2 px-3 focus:outline-non text-lg inline-flex text-white ml-3">$20.00 USD</button>
        </div>
        <hr />
        <br />
        <p className="leading-relaxed">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
          cornhole raw denim forage brooklyn.
        </p>
       
          <br/>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
  
 <Image
 src={require('@/public/image/Button (2).png')}
 alt=""
 width={180}
 className='rounded'
 height={63}/>
    
</button>

      </div>
    </div>
  </div>
</section>



<section className="text-gray-600 bg-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <span><h1 className='mr-5 text-black font-bold text-3xl border-l-8 pl-3 ml-1'>FEATURED PRODUCTS</h1></span>
    <nav className="md:ml-auto flex flex-wrap items-center text-xl font-semibold text-black justify-center">
      <Link href={''} className='underline text-black font-semibold mr-5'>View all</Link>
    </nav>
  </div>
     
      
      
      <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
        <div className="text-center">
          <Image
            src={require('@/public/image/Group 112 (1).png')}
            alt="1"
            width={263}
            height={306}
            className="object-cover mx-auto"
          />
          
        </div>
        <div className="text-center">
          <Image
            src={require('@/public/image/Group 113.png')}
            alt="2"
            width={263}
            height={306}
            className="object-cover mx-auto"
          />
          
        </div>
        <div className="text-center">
          <Image
            src={require('@/public/image/Group 114.png')}
            alt="3"
            width={263}
            height={306}
            className="object-cover mx-auto"
          />
         
        </div>
        <div className="text-center">
          <Image
            src={require('@/public/image/Group 115.png')}
            alt="3"
            width={263}
            height={306}
            className="object-cover mx-auto"
          />
          </div>
          <div className="text-center">
          <Image
            src={require('@/public/image/Group 116.png')}
            alt="3"
            width={263}
            height={306}
            className="object-cover mx-auto"
          />
          </div>
      </div>
      </div>

      </div>
      </div>
      </section>
</div>




    
  )
}

export default SingleProductPage
