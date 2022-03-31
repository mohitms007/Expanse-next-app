import React from 'react'
import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import {useState} from "react"
import {useEffect} from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <nav className="bg-white navbar w-screen px-4 z-40 left-0 right-0 top-0 fixed py-2">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="sm:flex block items-center space-x-1">

                        <Link href="/">
                           
                            <div className="font-mono flex flex-baseline cursor-pointer text-3xl">
                            <img className="h-10 mt-2 sm:mt-0  mr-2" src="/logo-2.png" alt="logo"/> <span className="sm:mt-0 mt-2">Expanse</span>
                            </div>
                        </Link>

                    </div>
                    {!isOpen ?  <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className=" text-black text-2xl mt-2 sm:hidden" /> : <GrClose onClick={() => setIsOpen(!isOpen)} className=" text-black text-2xl mt-2                         sm:hidden"/>}
                    <div
                        className="text-xl tracking-wider font-bold font-title hidden  sm:flex sm:flex-row flex-col  box-border text-gray-700 mb-0 justify-baseline space-x-6">

                        <Link href="/earth">
                            <div className="py-4">
                                <div className="navlink">Earth</div>
                            </div>
                        </Link>
                        <Link href="/rover-gallery">
                            <div className="py-4">
                                <div  className="navlink">Rover</div>
                            </div>
                        </Link>
                        <Link href="/space-search">
                            <div className="py-4">
                                <div className="navlink">Search</div>
                            </div>
                        </Link>
                        <Link href="/saved">
                            <div className="py-4">
                                <div className="navlink">Saved</div>
                            </div>
                        </Link>
                        <Link href="/about">
                            <div className="py-4">
                                <div className="navlink">About</div>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className="absolute left-0 right-0 z-999 bg-white  w-80">
                    { isOpen && <div
                        onClick={() => setIsOpen(false)}
                        className="text-xl shadow-2xl h-screen  animate__animated animate__slideInLeft animate__fast  absolute pt-16 pb-8 justify-center tracking-wider bg-white w-screen font-title   sm:hidden  flex-col                                  box-border text-gray-700 mb-0 justify-baseline">
                        <hr className="border-b-1 mx-auto  w-full  md:hidden border-gray-300"/>
                        <Link href="/earth">
                            <div className="px-4 py-4 my-2">
                                <div className="navlink">Earth</div>
                            </div>
                        </Link>
                        <hr className="border-b-1 mx-auto  w-full  md:hidden border-gray-300"/>
                        <Link href="/rover-gallery">
                            <div className="px-4 py-4 my-2">
                                <div className="navlink">Rover</div>
                            </div>
                        </Link>
                        <hr className="border-b-1 mx-auto  w-full md:hidden border-gray-300"/>
                        <Link href="/space-search">
                            <div className="px-4 py-4 my-2">
                                <div className="navlink">Search</div>
                            </div>
                        </Link>
                        <hr className="border-b-1 mx-auto  w-full  md:hidden border-gray-300"/>
                        <Link href="/about">
                            <div className="px-4 py-4 my-2">
                                <div className="navlink">About</div>
                            </div>
                        </Link>

                    </div>

                    }
                </div>
            </div>


        </nav>

    )
}
