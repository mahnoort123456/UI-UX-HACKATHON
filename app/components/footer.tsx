import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       <Image
       src={require('@/public/image/Logo Icon.png')} alt=''/>
        <span className="ml-3 text-xl font-semibold">Comforty</span>
      </a>
      
      <p className="mt-2 text-sm text-gray-500 font-medium">
        Vivamus tristique odio sit amet velit,<br/>
        eu posuere turpis interdum.<br/>
        Cras egestas purus
      </p>
      <br/>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      <Link href={''} className="ml-3 text-gray-400 ">
      <FaFacebook className='text-2xl hover:text-[#029FAE] hover:rounded'/>
      </Link>

      <Link href={''} className="ml-3 text-gray-400">
      <FaTwitter className='text-2xl hover:text-[#029FAE]'/>
      </Link>

      

      <Link href={''} className="ml-3 text-gray-400">
      <FaInstagram className='text-2xl hover:text-[#029FAE]'/>
      </Link>

      <Link href={''} className="ml-3 text-gray-400">
      <FaPinterest className='text-2xl hover:text-[#029FAE]'/>
      </Link>

      <Link href={''} className="ml-3 text-gray-400">
      <FaYoutube className='text-2xl hover:text-[#029FAE]'/>
      </Link>
      </span>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
          CATEGORY
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-black hover:text-[#007580] hover:underline">Sofa</a>
          </li>
          <li>
            <a className="text-black hover:text-[#007580] hover:underline">Armchair</a>
          </li>
          <li>
            <a className="text-black hover:text-[#007580] hover:underline">Wing Chair</a>
          </li>
          <li>
            <a className="text-black hover:text-[#007580] hover:underline">Desk Chair</a>
            <li>
            <a className="text-black hover:text-[#007580] hover:underline">wooden Chair</a>
          </li>
          <li>
            <a className="text-black hover:text-[#007580] hover:underline">Park Bench</a>
          </li>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
          SUPPORT
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={'faqs'} className="text-black hover:text-[#007580] hover:underline">Help & Support</Link>
          </li>
          <li>
            <Link href={'/faqs'} className="text-black hover:text-[#007580] hover:underline">Terms & Conditions</Link>
          </li>
          <li>
            <Link href={'/faqs'} className="text-black hover:text-[#007580] hover:underline">Privacy Policy</Link>
          </li>
          <li>
            <Link href={'/faqs'} className="text-black hover:text-[#007580] hover:underline">Help</Link>
          </li>
        </nav>
      </div>
    
     
     
      <div className=" border-gray-200">
  <div className="lg:w-1/4 md:w-1/2 w-full px-4">
 
</div>

    <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
      <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
        <label
          htmlFor="footer-field"
          className="leading-7 text-sm text-gray-400"
        >
          NEWSLETTER
         
        </label>
        <br/>
        <input
          type="text"
          id="footer-field"
          name="footer-field"
          placeholder='Your email'
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-[#029FAE] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button className="inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#029FAE] rounded">
        Subscribe
      </button>
     

     </div>
   
  
</div>




    </div>
  </div>
  
  <div className="bg-white">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left">
        @ 2021 - Biogy - Designed & Develop by <span className='text-black'>Zakirsoft</span>
       
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Image
        src={`require('@/public/image/Group 13.png')`}
        alt=''
        className='bg-white'/>
        
            
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
