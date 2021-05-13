import React, {useEffect, useState} from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import axios from 'axios'
import {Link} from 'react-scroll'
import {useRouter } from 'next/router'

export default function Earth({src, error, firstRender}) {
    const router = useRouter()
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [imgSrc, setImgSrc] = useState('')
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
    console.log(src)


    useEffect(() => {
        if (src) {
         setImgSrc(src);
        }
      }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/earth?lat=${latitude}&lon=${longitude}`)
    }
    const handleReload = () => {
        history.go(0)
    }

    return ( <> <div className="w-full items-center justify-center flex-col  mx-auto">
        <div className="flex justify-center m-2 h-200">
            <div
                className="flex-col space-y-7 text-4xl text-center absolute top-0 font-mono sm:text-5xl lg:text-6xl text-white mt-60">
                <div className="mb-16 space-y-6">
                    <h1 className="text-blue-500">
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
                className="flex"
                to="main-section"> <button  className="font-sans max-w-sm flex-inline text-white  bg-blue-600 focus:outline-none hover:-translate-y-0.5 transform transition justify-center items-center mx-auto text-lg hover:bg-white hover:text-purple-700 py-3 px-4 rounded-full"> Get Started <AiOutlineArrowRight className="ml-2 mt-1 float-right"/></button></Link>
            </div>
        </div>
        <div className="">
        <img className="max-w-8xl rounded-lg mx-auto object-cover img" src="/Space.jpg"/>
        </div>

       
    </div> <div className = "m-4" >
    <div id="main-section" className="text-6xl h-72 font-sans p-6 text-center mt-24 mb-8 md:h-28 font-semibold tracking-tighter lg:text-7xl bg-clip-text title-font text-gradient1 text-transparent">Get Images from any location</div>
    
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
   {<p className="text-gray-500">Click Generate and then reload the page for the latest data</p>}
   <button className="bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 rounded-full" onClick={handleReload}>Reload</button>
     {!error && !firstRender && src && <img src={imgSrc} className="rounded-lg" width="600" height="600"/>}
    </div>
   {error === true && firstRender === false ? <p className="text-center text-red-500">afdagfasdg</p> : null} 
        </div > </>)
}

export const getServerSideProps = async({query}) => {
   
    let src
    let error = false
    if(query) {
        const  {lon , lat} = query
        if(!lon || !lat){
            error = true
        }

        try{
           src = `https://api.nasa.gov/planetary/earth/imagery?lat=${lat}&lon=${lon}&api_key=${process.env.API_KEY}`
           console.log(src)

        }catch(e){
            error = true
            console.log(e)
        }
       
    }else{
        error = true
        return {
            props:{
                src,
                error,
                firstRender: true
            }
        }
    }
    return{
        props:{
            src,
            error
        }
    }
   
}