import React from 'react'
import {AiFillDownCircle} from 'react-icons/ai'
import {useRouter} from 'next/router'
import {Link} from 'react-scroll'

export default function RoverGallery({data}) {

    const real_data = data
        .photos
        .map(item => {
            return {id: item.id, img_src: item.img_src, earth_date: item.earth_date, camera: item.camera, rover: item.rover}

        })
    const router = useRouter()
    return (
        <div>

<div className="w-full items-center justify-center flex-col  mx-auto">
        <div className="flex justify-center h-200">
            <div
                className="flex-col space-y-7 text-4xl text-center absolute top-0 font-mono sm:text-6xl lg:text-8xl text-white mt-40">
                <div className="mb-16 space-y-6">
                    <h1>
                        Incredible 
                    </h1>
                    <h1>
                        Rover Shots
                    </h1>
                </div>
                <Link to="rovers">
                <AiFillDownCircle  className="text-white mx-auto cursor-pointer text-5xl lg:text-7xl" />
                </Link>
                
            </div>
           
        </div>
        <div>
        <img className="max-w-8xl rounded-lg mx-auto object-cover img" src="/space-2.jpg"/>
        </div>

       
    </div>
            <div
                id="rovers"
                className="flex p-16 flex-col m-16 max-w-6xl mx-auto border-t-2  border-b-2 rounded-lg">
                     <h1 className="text-2xl text-center  mb-2 inline-block font-bold">
                        Categories of Rovers</h1>
                        <p className="text-center text-gray-500 mb-2 text-sm">(Select any one of them)</p>
                <div
                    className="text-gray-800 flex flex-col lg:flex-row justify-center text-center space-y-2 md:space-y-0">

                   
                    <div onClick={() => router.push(`/rover-gallery/?rover=curiosity`)} className="p-4 sm:p-10 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">

                        <div
                            className="rounded align-center justify-items-center h-72 overflow-hidden shadow-lg">
                            <img className="object-cover lg:w-96 w-full h-48" src="./curiosity.webp" alt="Mountain"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-3"></div>
                                <p className="text-gray-700 font-bold text-base">
                                    Curiosity Rover
                                    <p className="text-xs pt-1 pb-2"> Default </p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => router.push(`/rover-gallery/?rover=opportunity`)} className="p-4 sm:p-10 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">

                        <div
                            className="rounded align-center justify-items-center overflow-hidden h-72 shadow-lg">
                            <img className="object-cover lg:w-96 w-full h-48" src="./opp-rover.jpg" alt="Mountain"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-3"></div>
                                <p className="text-gray-700 font-bold text-base">
                                    Opportunity Rover
                                </p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => router.push(`/rover-gallery/?rover=spirit`)} className="p-4 sm:p-10 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">

                        <div
                            className="rounded align-center justify-items-center overflow-hidden h-72 shadow-lg">
                            <img className="object-cover lg:w-96 w-full h-48" src="./spirit.jpg" alt="Mountain"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2"></div>
                                <p className="text-gray-700 font-bold text-base">
                                    Spirit Rover
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex justify-center items-center">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center container">

                    {real_data.map((item) => {
                        return (
                            <div key={item.id} className="p-4 sm:p-10">

                                <div
                                    className="max-w-sm rounded align-center justify-items-center overflow-hidden shadow-lg">
                                    <img className="w-full object-cover h-72" src={item.img_src} alt="Mountain"/>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{item.camera.full_name}</div>
                                        <p className="text-gray-700 text-base">
                                            {`Image clicked by ${item.rover.name} Rover on ${item.earth_date} by using ${item.camera.name}`}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span
                                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span
                                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item.rover.name}</span>
                                        <span
                                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item.earth_date}</span>
                                    </div>
                                </div>
                            </div>
                        )

                    })
}
                </div>
            </div>
        </div>

    )
}

export const getServerSideProps = async({query}) => {

    let {rover} = query
    if (!rover) {
        rover = 'curiosity'
    }
    const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=2000&page=1&api_key=${process.env.API_KEY}`)
    const data = await res.json()

    return {props: {
            data
        }}
}
