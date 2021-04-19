import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-white px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                        <div></div>
                        <div className="font-mono text-3xl">
                            Expanse
                        </div>
                    </div>
                    <div className="flex  text-lg font-bold font-title box-border text-gray-700 mb-0 justify-between space-x-6">
                        <Link href="/about">
                            <div className="py-4">
                                <div className="navlink nav-ltr">About</div>
                            </div>
                        </Link>
                        <Link href="/about">
                            <div className="py-4">
                                <div className="navlink nav-ltr">Resources</div>
                            </div>
                        </Link>
                        <Link href="/about">
                            <div className="py-4">
                                <div className="navlink nav-ltr">Help</div>
                            </div>
                        </Link>
                        
                    </div>
                </div>

            </div>
        </nav>

    )
}
