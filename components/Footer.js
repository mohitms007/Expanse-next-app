import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {GiSpaceShuttle} from 'react-icons/gi'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className="container mx-auto bg-gray-100 p-12 max-w-full mt-12">
            <hr className="min-w-6xl h-4 md:hidden border-gray-300"/>
            <div
                className="flex flex-col md:flex-row items-center text-center space-y-4 justify-around mt-12 ml-12 ">
                <div className="flex flex-col space-y-4">
                    <hr className="min-w-6xl h-4 md:hidden border-gray-300"/>
                    <a className="text-gray-500 hover:text-gray-600 transition" href="/">Home</a>
                    <a className="text-gray-500 hover:text-gray-600 transition" href="/about">About</a>
                    <a className="text-gray-500 hover:text-gray-600 transition" href="/newsletter">Newsletter</a>
                </div>

                <div className="flex flex-col text-center space-y-4">
                    <hr className="min-w-6xl h-4 md:hidden border-gray-300"/>
                    <a
                        className="text-gray-500 flex items-center hover:text-gray-600 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/mohit-sharma-4b25531a9/"><AiFillLinkedin className="mr-2"/>Linkedin</a>
                    <a
                        className="text-gray-500 flex items-center hover:text-gray-600 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/mohitms007"><AiFillGithub className="mr-2"/>GitHub</a>
                    <a
                        className="text-gray-500 flex  items-center hover:text-gray-600 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/mohitms_/"><AiFillInstagram className="mr-2"/>Instagram</a>

                </div>
                <hr className="min-w-6xl h-4 md:hidden border-gray-800"/>
                <div className="flex flex-col text-center space-y-4">
                    <hr className="min-w-6xl h-4 md:hidden border-gray-300"/>
                    <a className="text-gray-500 hover:text-gray-600 transition" href="/uses">Earth</a>
                    <a className="text-gray-500 hover:text-gray-600 transition" href="/guestbook">Rover</a>
                    <a className="text-gray-500 hover:text-gray-600 transition" href="/snippets">Search</a>

                </div>
            </div>

            <div className="mt-12 flex justify-center items-center md:block">
                <Link href="/">

                    <div
                        className="font-mono flex flex-baseline text-gray-500  cursor-pointer text-3xl">
                        <img className="h-10 mr-2 rounded-full" src="./logo-2.png"/>
                        Expanse
                    </div>
                </Link>
            </div>

        </div>

    )

}

export default Footer

{/* <footer
className="flex flex-col justify-center items-center  max-w-10xl mx-auto w-full mb-8"><hr class="w-full border-1 border-gray-200 dark:border-gray-800 mb-8"/>
<div
    className="flex flex-row-reverse sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full"></div>
<div className="w-full max-w-4xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
    <div className="flex flex-col space-y-4">
        <a className="text-gray-500 hover:text-gray-600 transition" href="/">Home</a>
        <a className="text-gray-500 hover:text-gray-600 transition" href="/about">About</a>
        <a className="text-gray-500 hover:text-gray-600 transition" href="/newsletter">Newsletter</a>
    </div>


</div>

</footer> */
}