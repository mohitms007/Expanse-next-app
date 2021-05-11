import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {GiSpaceShuttle} from 'react-icons/gi'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className="container mx-auto bg-gray-100 p-12 max-w-full mt-12">
            <hr className="min-w-6xl h-4 md:hidden border-gray-300"/>
            <div
                className="flex flex-col md:flex-row text-lg items-center text-center space-y-4 justify-evenly  mt-12 ml-12 ">
                <div className="p-2">
                    <div className="flex flex-col  mt-6 space-y-4">
                        <hr className="w-full h-4 md:hidden border-gray-300"/>
                        <Link href="/">
                            <div className="text-gray-500 cursor-pointer  hover:text-gray-600 transition">Home</div>
                        </Link>
                        <Link href="#">
                            <div className="text-gray-500 cursor-pointer  hover:text-gray-600 transition">Publication
                            </div>
                        </Link>
                        <Link href="/search">
                            <div className="text-gray-500 cursor-pointer  hover:text-gray-600 transition">Search</div>
                        </Link>
                    </div>
                </div>

                <div className="p-4 ">
                    <div className="flex flex-col text-center space-y-4">
                        <hr className="w-full h-4 md:hidden border-gray-300"/>
                        <a
                            className="text-gray-500 flex items-center hover:text-gray-600 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/mohit-sharma-4b25531a9/"><AiFillLinkedin
                            className="mr-2"/>Linkedin</a>
                        <a
                            className="text-gray-500 flex items-center hover:text-gray-600 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/mohitms007"><AiFillGithub className="mr-2"/>GitHub</a>
                        <a
                            className="text-gray-500 flex items-center hover:text-gray-600 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/mohitms_/"><AiFillInstagram className="mr-2"/>Instagram</a>

                    </div>
                </div>
                <div className="p-4">
                    <div className="flex flex-col text-center space-y-4">
                        <hr className="w-full h-4 md:hidden border-gray-300"/>
                        <Link href="/about">
                            <div className="text-gray-500 cursor-pointer  hover:text-gray-600 transition">About</div>
                        </Link>
                        <Link href="/earth">
                            <div className="text-gray-500 cursor-pointer  hover:text-gray-600 transition">Earth</div>
                        </Link>
                        <Link href="/rover-gallery">
                            <div className="text-gray-500 cursor-pointer  hover:text-gray-600 transition">Rover</div>
                        </Link>

                    </div>
                </div>
            </div>


            <div className="mt-24 flex flex-col justify-center items-center ">
                <Link href="/">

                    <div
                        className="font-mono flex flex-baseline text-gray-500  cursor-pointer text-3xl">
                        <img className="h-10 mr-2 rounded-full" src="./logo-2.png" alt='image'/>
                        Expanse
                    </div>
                </Link>
                <div className="flex flex-col justify-center items-center md:block">
                    <p className="text-gray-500 ml-6 p-2 flex mt-30 mx-auto text-center items-center hover:text-gray-600 transition"
                       href="/tweets"><GiSpaceShuttle className="mr-2"/>Powered By Nasa API</p>
                </div>

            </div>

        </div>

    )

}

export default Footer

