import React from 'react'
import Link from 'next/link'



export default function Navbar() {
    return (
        <nav className="bg-white px-4 py-2">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1">
                        <div></div>
                        <Link href="/">
                            <div className="font-mono text-3xl">
                                Expanse
                            </div>
                        </Link>

                    </div>
                    <div
                        className="flex text-lg font-bold font-title  box-border text-gray-700 mb-0 justify-baseline space-x-6">
                        <Link href="/earth">
                            <div className="py-4">
                                <div className="navlink">Earth</div>
                            </div>
                        </Link>
                        <Link href="/rover-gallery">
                            <div className="py-4">
                                <div className="navlink">Rover</div>
                            </div>
                        </Link>
                        <Link href="/space-search">
                            <div className="py-4">
                                <div className="navlink">Search</div>
                            </div>
                        </Link>
                        <Link href="/about">
                            <div className="py-4">
                                <div className="navlink">About</div>
                            </div>
                        </Link>

                    </div>
                </div>

            </div>
        </nav>

    )
}
