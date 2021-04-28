import React from 'react'
import {AiFillDownCircle} from 'react-icons/ai'
import {useRouter} from 'next/router'

export default function RoverGallery({data}) {

    const real_data = data
        .photos
        .map(item => {
            return {id: item.id, img_src: item.img_src, earth_date: item.earth_date, camera: item.camera, rover: item.rover}

        })
    const router = useRouter()
    return (
        <div>

            <div
                className="mx-auto logo h-full  sm:object-contain"
                style={{
                backgroundImage: `url('./space-2.jpg')`
            }}>
                <div
                    className="text-white text-4xl sm:text-5xl lg:text-7xl flex flex-col space-y-6 font-mono font-bold">

                    <h1 className="sm:mt-24 mt-6 xs:mt-12 text-brown-500">
                        Incredible</h1>
                    <h1>
                        Rover Shots</h1>
                    <div className="mx-auto">
                        <AiFillDownCircle className="mt-6 text-3xl sm:text-5xl lg:text-7xl"/>
                    </div>
                </div>
            </div>

            <div
                className="flex p-16 flex-col m-16 max-w-6xl mx-auto  border-2 border-gray-500 rounded-lg">
                     <h1 className="text-2xl text-center  mb-2 inline-block font-bold">
                        Categories of Rovers</h1>
                        <p className="text-center text-gray-500 mb-2 text-sm">(Select any one of them)</p>
                <div
                    className="text-gray-800 flex flex-col md:flex-row justify-center text-center space-y-2 md:space-y-0 border-gray-500">

                   
                    <div className="p-4 sm:p-10">

                        <div
                            className="rounded align-center justify-items-center h-72 overflow-hidden shadow-lg">
                            <img className="object-cover w-72 h-48" src="./curiosity.webp" alt="Mountain"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-4"></div>
                                <p className="text-gray-700 font-bold text-base">
                                    Curiosity Rover
                                    <p className="text-xs pt-2">(Default)</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 sm:p-10">

                        <div
                            className="rounded align-center justify-items-center overflow-hidden h-72 shadow-lg">
                            <img className="object-cover w-72 h-48" src="./opp-rover.jpg" alt="Mountain"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-4"></div>
                                <p className="text-gray-700 font-bold text-base">
                                    Opportunity Rover
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 sm:p-10">

                        <div
                            className="rounded align-center justify-items-center overflow-hidden h-72 shadow-lg">
                            <img className="object-cover w-72 h-48" src="./spirit.jpg" alt="Mountain"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-4"></div>
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