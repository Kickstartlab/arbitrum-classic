import React, { useState } from 'react'
import logo from '../assets/logo.png';



export default function Menu() {

  const [show, setShow] = useState(false);


  return (

    <header>

      <div className="lg:flex hidden items-center justify-between font-montserat h-28">
        <a href="/" className="logo lg:my-12">
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-8 pt-4 items-center text-white-100">
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="text-white-50 hover:text-white-100">About</a></li>
            <li><a href="#about" className="text-white-50 hover:text-white-100">Buy</a></li>
            <li><a href="/" className="text-white-50 hover:text-white-100">Whitepaper</a></li>
            <li><a href="/" className='text-white-50 hover:text-white-100'>Dapp</a></li>
          </ul>

          <div className='border-b pt-6 line-gradient'>

          </div>
          <div className='border-b border-green-50 opacity-50 line'>

          </div>
        </nav>

        <a href="/">
        <div className='border-b-2 border-green-50 opacity-50 line_2 -mb-0.5'> </div>
          <button className="border-custom py-3 lg:px-8 px-4 font-semibold text-white-100">
            Connect wallet
          </button>
          <div className='border-b-2 -mt-0.5 border-green-50 opacity-50 line_1'> </div>
        </a>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-montserat">
        <a href="/" className="text-white-100">
          <img src={logo} alt="Logo" className='w-9/12' />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 left-0 p-2 w-3/4 overflow-y-auto text-center font-inter font-semibold bg-green-100 z-20">

          <div className="mt-3 px-3 mb-12">
            <a href="/" className="text-white-100">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer  text-white-100">
            <a href="/" className="text-lg ml-4 font-semibold">Home</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#about" className="text-lg ml-4 font-semibold">About</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="/" className="text-lg ml-4 font-semibold">Buy</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="/" className="text-lg ml-4 font-semibold">Whitepaper</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="/" className="text-lg ml-4 font-semibold">Dapp</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100 bg-black-50">
            <a href="/" className="text-lg ml-4 font-semibold">Connect Wallet</a>
          </button>
        </div> : null
      }


    </header >
  )
}
