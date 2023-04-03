import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import bg_top from '../assets/bg_top.png';
import b_1 from '../assets/b_1.png';
import b_2 from '../assets/b_2.png';
import b_3 from '../assets/b_3.png';
import b_4 from '../assets/b_4.png';
import about from '../assets/about.png';
import tool_1 from '../assets/tool_1.png';
import tool_2 from '../assets/tool_2.png';
import side from '../assets/side.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="bg-black-50 font-inter overflow-hidden text-white-100">

            <img src={bg_top} className='absolute right-0 w-full'></img>

            <div className="lg:px-20 px-5 bg-top relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="flex flex-col justify-center items-center gap-y-12 py-20">
                        <div className="text-center lg:w-9/12">

                            <p className='py-5 text-xl text-white-50'>
                                Arbitrum Classic the first Arbitrum multi token staking platform
                            </p>

                            <h2 data-aos='fade-up' className='md:text-6xl text-3xl font-libre font-bold text-white-100'>
                                HOLD <span className='text-green-100'>$ARBC</span> AND EARN $ARB
                            </h2>

                            <p data-aos='fade-out' className='pt-8 pb-6 lg:text-xl text-white-50 leading-loose'>
                                Holders of arbitrum classic token will earn ARB tokens by simply holding $ARBC tokens in their wallet. $ARBC holders automatically receive a 2% rewards from every transaction.
                            </p>

                            <div data-aos='zoom-in' className="flex items-center justify-center gap-12 mx-auto">
                                <a href="/">
                                    <button className="text-white-100 btn-custom py-4 flex items-center gap-x-2 md:text-lg text-xs md:px-8 px-3 font-semibold mt-5">
                                        Get Started
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                </a>

                                <a href="/">
                                    <button className="text-white-100 font-semibold md:text-lg text-sm px-5 py-3 rounded-lg mt-5 border-custom">
                                        join community
                                    </button>
                                </a>
                            </div>

                            <div>
                                <p className='py-5 text-lg text-green-50 capitalize pt-16'>
                                    powering tolls and colaboration for cripto curency
                                </p>

                                <div className='flex flex-wrap items-center justify-center gap-x-12 py-6 space-y-3'>
                                    <img src={b_1} alt=''></img>
                                    <img src={b_2} alt=''></img>
                                    <img src={b_3} alt=''></img>
                                    <img src={b_4} alt=''></img>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center gap-x-12 py-12">

                        <div data-aos="fade-left" className="lg:w-1/2 w-full">

                            <h2 className='md:text-4xl text-3xl font-semibold tracking-wide text-white-100 capitalize'>
                                first arbitrum multi token staking platform
                            </h2>

                            <p className='py-5 lg:leading-loose text-white-50'>
                                Arbitrum Classic is a decentralized finance project that operates on the Arbitrum chain. This innovative project introduces a unique reward system that offers investors the opportunity to receive Arbitrum tokens simply by holding Arbitrum Classic tokens.  </p>

                            <p className='lg:leading-loose text-white-50'>
                                The introduction of this reward system is a significant development in the world of decentralized finance, as it provides investors with an additional incentive to hold Arbitrum Classic tokens, while also helping to increase the liquidity of the Arbitrum network.
                            </p>

                            <a href="/">
                                <button className="text-white-100 btn-custom py-4 flex items-center gap-x-3 text-lg md:px-8 px-3 font-semibold mt-5 capitalize">
                                    learn about ARB Classic
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </a>

                        </div>

                        <div data-aos="zoom-in" data-aos-delay="350" className=" md:mt-0 mt-12">
                            <img src={about} alt="Logo" className='w-10/12 lg:float-right sm:flex mx-auto' />
                        </div>

                    </div>
                </div>
            </div>

            {/* features section */}

            <div id='features' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-start gap-x-16 py-16">
                        <div data-aos="fade-left" className="lg:w-1/3 w-full">
                            <h2 className='md:text-5xl text-3xl font-semibold text-white-100'>
                                Take A Look at our<br></br>
                                Amazing Tools
                            </h2>

                        </div>

                        <div data-aos="fade-right" className="lg:w-1/2 w-full md:mt-0 mt-12">

                            <div className='lg:flex items-center gap-x-8 bg-black-25 p-8 rounded-xl lg:space-y-0 space-y-4'>
                                <img src={tool_1} className=''></img>

                                <div>
                                    <h2 className='md:text-2xl text-xl mb-5 font-semibold text-white-100 capitalize'>
                                        multi token staking platform
                                    </h2>
                                    <p className='text-white-100'>
                                        Arbitrum Classic a cutting-edge multi-token staking dApp platform built on the highly scalable and efficient Arbitrum chain. Our platform offers a unique opportunity for investors and our partnership token group to stake their tokens and earn attractive APY rewards, creating a win-win scenario where both parties can benefit significantly.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div data-aos="fade-up" className="lg:w-1/2 w-full md:mt-0 mt-5">

                        <div className='lg:flex items-center gap-x-8 bg-black-25 p-8 rounded-xl lg:space-y-0 space-y-4'>
                            <img src={tool_2} className=''></img>

                            <div>
                                <h2 className='md:text-2xl text-xl mb-5 font-semibold text-white-100 capitalize'>
                                    user-friendly dApp
                                </h2>
                                <p className='text-white-100'>
                                    user-friendly dApp interface allows investors to easily stake their tokens, track their rewards, and explore the broad range of staking options available to them. We believe that our platform offers an exceptional opportunity for investors and our partnership token group to achieve their financial objectives, while simultaneously expanding our investor base
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <img src={side} className='absolute left-0'></img>


            {/* How it Works */}

            <div id='working' className="mt-8">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <p className="md:text-3xl text-2xl font-semibold text-center lg:w-7/12 mx-auto">
                        Our platform is designed with a strong emphasis on <span className='text-green-100'>security</span> and <span className='text-green-100'>reliability</span>, with robust measures in place to protect user data and assets.
                    </p>

                </div>

            </div>

            {/* tokenomics */}

            <div
                id="tokenomics"
                className="lg:py-12 py-5 lg:px-8 px-5 container mx-auto"
            >
                <h3 className="md:text-4xl text-2xl font-libre font-semibold text-center uppercase">
                    tokenomics
                </h3>

                <div className='lg:flex items-end justify-center gap-8 py-8 space-y-4'>
                    <div className='bg-gradient lg:w-96 rounded-lg p-12 h-72 flex items-center justify-center'>
                        <p className='text-3xl font-semibold text-center'>
                            Token name:<br></br>
                            Arbitrum classic
                        </p>
                    </div>

                    <div>
                        <div className='grid lg:grid-cols-3 grid-cols-1 items-baseline justify-between gap-8 space-y-6'>
                            <div className='rounded-lg bg-black-25 p-8'>
                                <p className='text-2xl font-semibold text-center'>
                                    Symbol: $ARBC
                                </p>
                            </div>
                            <div className='rounded-lg bg-black-25 p-8'>
                                <p className='text-2xl font-semibold text-center'>
                                    Tax:6/6
                                </p>
                            </div>
                            <div className='bg-green-25 rounded-lg p-8'>
                                <p className='text-2xl font-semibold text-black-100 text-center'>
                                    2% rewards
                                </p>
                            </div>

                        </div>

                        <div className='grid lg:grid-cols-3 grid-cols-1 items-center justify-between gap-8 lg:space-y-0 space-y-6 mt-8'>

                            <div className='bg-green-100 rounded-lg p-8'>
                                <p className='text-xl font-semibold text-center'>
                                    Total supply:
                                    <br></br>
                                    9,999,999,
                                    999.999999 $ARBC
                                </p>
                            </div>
                            <div className='bg-green-50 rounded-lg p-8'>
                                <p className='text-xl font-semibold text-center'>
                                    3% marketing
                                </p>
                            </div>
                            <div className='bg-green-100 rounded-lg p-8'>
                                <p className='text-xl font-semibold text-center'>
                                    1% Development
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            {/* roadmap */}

            <div
                id="roadmap"
                className="lg:py-12 py-5 lg:px-8 px-5 container mx-auto"
            >
                <h3 className="md:text-4xl text-2xl font-libre font-semibold text-center uppercase">
                    roadmap
                </h3>

                <div className="lg:mt-12 mt-6 rounded-2xl bg-blue-200 lg:p-12 p-6">

                    <div className="lg:flex hidden items-baseline justify-start gap-80 lg:px-20 lg:space-y-0 space-y-6 -mt-2.5">
                        <h5 className="text-2xl py-4 font-semibold">PHASE 1</h5>
                        <h5 className="text-2xl py-4 font-semibold">PHASE 2</h5>
                        <h5 className="text-2xl py-4 font-semibold">PHASE 3</h5>
                    </div>

                    <div className="h-1 w-full bg-black-25">

                    </div>

                    <div className='h-1 w-full line -translate-y-1'>

                    </div>

                    <div className="lg:flex items-baseline justify-between gap-6 lg:px-20 lg:space-y-0 space-y-6 -mt-2.5">

                        <div className='flex gap-x-5'>

                            <div className="flex flex-col items-center">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-3.5 lg:block hidden"
                                >
                                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#39B54A" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#39B54A" />
                                    </svg>

                                </div>

                                <div className="border-l border-green-100 opacity-40 lg:mt-5 mt-0 mb-3 h-44"></div>
                            </div>

                            <div
                                data-aos="flip-right"
                                className="ounded-2xl text-white-100 lg:w-72 mt-6"
                            >

                                <ul className="list-disc p-4">
                                    <li>Social Media set up: Twitter,  Medium and Telegram </li>
                                    <li>Website</li>
                                    <li>Community building</li>
                                    <li>Stealth Launch</li>
                                    <li>Multi token staking platform live</li>
                                    <li>White Paper Release</li>
                                    <li>Strategic Partnerships</li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex gap-x-5'>

                            <div className="flex flex-col items-center">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-3.5 lg:block hidden"
                                >
                                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#39B54A" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#39B54A" />
                                    </svg>

                                </div>

                                <div className="border-l border-green-100 opacity-40 lg:mt-5 mt-0 mb-3 h-44"></div>
                            </div>

                            <div
                                data-aos="flip-right"
                                className="ounded-2xl text-white-100 lg:w-72 mt-6">

                                <ul className="list-disc p-4">
                                    <li>CMC Listing</li>
                                    <li>CG Listing </li>
                                    <li>Listing on tier 3-2 exchange</li>
                                    <li>Large Marketing Campaigns </li>
                                    <li>Strategic Partnerships</li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex gap-x-5'>

                            <div className="flex flex-col items-center">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-3.5 lg:block hidden"
                                >
                                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#39B54A" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#39B54A" />
                                    </svg>

                                </div>

                                <div className="border-l border-green-100 opacity-40 lg:mt-5 mt-0 mb-3 h-44"></div>
                            </div>

                            <div
                                data-aos="flip-right"
                                className="ounded-2xl text-white-100 lg:w-72 mt-6"
                            >

                                <ul className="space-y-4 list-disc p-4">
                                    <li>New Exchanges Listing CEX </li>
                                    <li>Further community growth </li>
                                    <li>Strategic Partnerships</li>
                                    <li>Large Marketing Campaigns</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="lg:py-16 py-5 lg:px-20 px-5 container mx-auto">

                <p className="md:text-5xl text-2xl font-semibold text-center mx-auto">
                    Connect with the $ARBC Community
                </p>

                <a href="/">
                    <button className="text-white-100 btn-custom py-4 flex items-center gap-x-2 md:text-lg text-sm md:px-8 px-3 font-semibold mt-6 mx-auto">
                        join to comunity
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </a>
            </div>

            <Footer />

        </div >
    )
}
