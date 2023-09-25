'use client';

import Navbar from '@/components/navbar'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faFilePen, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import bgimg from '../public/footer.png'
import Footer from '@/components/footer';

export default function Home() {
  const targetRef = useRef(null)
  return (
    <>
    <Navbar button={"Get Started"} url={targetRef}/>
    <div className="flex flex-col items-center justify-between p-2">
      <Image
              src="/logohome.svg"
              alt="home Logo"
              width={600}
              height={400}
              priority
            />
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-semibold'>Welcome to <span className='text-cyan-700'>Edutainment</span></h1>
        <p className='text-2xl mt-4'>Empowering Education with AI</p>
      </div>
      <button onClick={targetRef.current?.scrollIntoView({behavior:'smooth'})} className='mx-5 p-5 text-5xl'>
        <FontAwesomeIcon icon={faAnglesDown} beat />
      </button>
    </div>
    <section id ='getStarted' ref={targetRef}
        className="flex flex-col w-full h-screen bg-cover bg-fixed bg-center justify-center items-center"
        // style={{backgroundImage : `url(${bgimg.src})`}}
        >

        <h1 className=" text-5xl font-semibold my-20">
            Get Started With Us
        </h1>

        <div className="container mx-auto px-48">
          <div className="flex flex-wrap">
          <div className="pt-6 w-full md:w-6/12 px-12 text-center transform duration-300 hover:scale-105">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-xl rounded-xl ring-2 ring-cyan-800">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-auto h-12 mb-5 rounded-full">
                  <a href="/signup">
                        <button className="bg-cyan-700 transition duration-300 px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 hover:bg-cyan-900">
                            <FontAwesomeIcon icon={faFilePen}/> Register
                        </button>						
                        </a>
                  </div>
                  <h6 className="text-xl font-semibold">Join with us Now!</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Have not connected with Edutainment yet? It is high time to do that. Enter proper information of your school or college to 
                    register with Edutainment.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full pt-6 md:w-6/12 px-12 text-center transform duration-300 hover:scale-105">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-xl ring-2 ring-cyan-800">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-auto h-12 mb-5 rounded-full bg-lightBlue-400">
                  <a href="/signin">
                        <button className="bg-cyan-700 transition duration-300 px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 hover:bg-cyan-900">
                            <FontAwesomeIcon icon={faRightToBracket} />  Log In
                        </button>						
                        </a>
                  </div>
                  <h6 className="text-xl font-semibold">Welcome Back!</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    If you do not have an Edutainment ID then contact with your institution. 
                    If you are school or college authority then register your institution first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    {/* <div className='flex flex-col justify-center h-[500px] bg-center bg-cover' style={{backgroundImage : `url(${bgimg.src})`}}>
      <Image
              src="/footer.png"
              alt="footer Logo"
              width={1520}
              height={200}
              priority
            />
      <p className='text-center text-white mt-[420px]'>&copy; 2023 Edutainment | All Rights Reserved</p> 
    </div>*/}
    <Footer />
    </>
  )
}
