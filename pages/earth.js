
import React, {useEffect, useState} from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import axios from 'axios'
import {Link} from 'react-scroll'

export default function Earth({data}) {

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const [imageError,setImageError] = useState('')
    const DEFAULT_REQ = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&api_key=DEMO_KEY`
    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator
                .geolocation
                .getCurrentPosition(position => {
                    const {coords} = position
                    const lat = coords.latitude
                    const lon = coords.longitude
                    setLatitude(lat)
                    setLongitude(lon)
                });
        } else {
            console.error("Geolocation is not supported by this browser!");
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        setImageUrl(DEFAULT_REQ)    
        setImageError('')
        if(!latitude || !longitude || latitude === '' || longitude === ''){
            setImageError('Please fill all the values')
        }else{
            axios.get(DEFAULT_REQ).catch(e => {
                if(e.response){
                  setImageError('Error Happened while fetching image.')
                  setImageUrl(DEFAULT_REQ)
                }else{
                    setImageUrl(DEFAULT_REQ)
                   
                }
            })
        }
    }

    return ( <> <div className="w-full items-center justify-center flex-col  mx-auto">
        <div className="flex justify-center h-200">
            <div
                className="flex-col space-y-7 text-4xl text-center absolute top-0 font-bold font-mono sm:text-5xl lg:text-8xl text-white mt-60">
                <div className="mb-16 space-y-6">
                    <h1 className="text-yellow-300">
                        Landset Imagery
                    </h1>
                    <h1>
                        with a
                    </h1>
                    <h1>
                        blink of an eye
                    </h1>
                </div>

                <Link
                to="main-section"
                    className="font-sans flex  max-w-xs bg-red-600 hover:bg-red-700 cursor-pointer text-white  hover:-translate-y-0.5 transform transition justify-center items-center mx-auto text-lg  p-2 rounded-full">Get Started<AiOutlineArrowRight
                    className="ml-2"/></Link>
            </div>
        </div>

        <img className="w-full object-cover img" src="/earth.webp"/>
    </div> <div className = "m-4" >
    <div id="main-section" className="text-6xl font-sans p-6 text-center mt-24 mb-8 h-28 font-semibold tracking-tighter lg:text-7xl bg-clip-text title-font text-gradient1 text-transparent">Get Images from any location</div>
    
    <div className = " max-w-6xl flex mx-auto m-4 mb-28" >
       <p className="text-lg text-center flex align-center justify-center text-gray-500">*Landsat imagery is provided to the public as a joint project between NASA and USGS. A recent industry report on landsat satellite imagery data estimates that total annual value to the economy of $2.19 billion, far exceeding the multi-year total cost of building, launching, and managing Landsat satellites and sensors. The value is derived from consumer use of the data. The objective of this endpoint is to give you an easy to use taste of what Landsat imagery data can provide. </p></div>
    
     <div className = "flex text-center align-center justify-center" > 
     <form
        onSubmit={handleSubmit}
        className="mb-16 flex-col align-center">
        <div className="flex space-x-6">
            <div className="md:items-center flex-col flex mb-6 ">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >Latitute</label>
            <input
                name="latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                type="text" 
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-full-name" type="text" />
            </div>
           <div className="flex flex-col md:items-center mb-6">
           <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >Longitude</label>
            <input 
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)} 
                name="longitude" 
                type="text" 
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-full-name" type="text" />
           </div>
       </div>
    <div className=" flex flex-col space-y-2 items-center justify-center mb-4">
        <button onClick={handleLocation} className="rounded-full font-bold outline-none py-2 px-4 mr-2 bg-blue-600 hover:bg-blue-700 text-white">Get your own location</button>
        <button className="rounded-full font-bold outline-none py-2 px-4  bg-yellow-600 hover:bg-yellow-700 text-white" type="submit">Generate</button>
    </div>
    </form> </div>
   

    <div className="flex flex-col space-y-4  items-center justify-center text-center mb-12">
   {<p className="text-gray-500">Image will load here after clicking. Please wait for processing about 15 seconds or Try again.</p>}
     {!imageError && <img src={imageUrl} className="rounded-lg" width="600" height="600"/>}
    </div>
   {imageError && <p className="text-center text-red-500">{imageError}</p>} 
        </div > </>)
}

