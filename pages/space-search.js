import React, {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {useRouter} from 'next/router'

export default function SpaceSearch({data}) {

    const router = useRouter()
    let searchField = ''

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchField) {
            router.push(`/space-search?searchQuery=${searchField}`)
        }

    }


    return  (
        <div>
            <div className="main mx-auto">
                <div className="px-4  sm:px-8 lg:px-16 xl:px-20 mx-auto">

                    <div className="hero">

                        <div
                            className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
                            <h1 className=" font-bold text-3xl font-title text-gray-900">Search anything related to Space and News</h1>
                            <p className=" font-base text-base mt-2 text-gray-600">High quality stories powered by Nasa API</p>
                        </div>

                        <div className="box pt-6">
                            <div className="box-wrapper">
                                <form onSubmit={handleSubmit}>
                                    <div
                                        className=" bg-white rounded flex items-center mx-auto max-w-6xl p-3 shadow-sm border border-gray-200">

                                        <input
                                            type="search"
                                            name=""
                                            id=""
                                            onChange={(e) => searchField = e.target.value}
                                            placeholder="Search for Space-Stories"
                                            x-model="q"
                                            className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>
                                        <button type="submit" className="outline-none focus:outline-none"><AiOutlineSearch className="ml-2 text-gray-500"/></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data?.map((item) => {
                        const {data, links} = item
                        const {title,description_508} = data[0]
                        return(
                            <div
                            className="p-4 sm:p-10 cursor-pointer w-96 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            
                            <div
                                className="rounded align-center flex flex-col justify-center items-center h-72 overflow-hidden shadow-lg">
                                <img
                                    className="object-cover lg:w-96 w-full h-48"
                                    src="./curiosity.webp"
                                    alt="Mountain"/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-4"></div>
                                    <p className="text-gray-700 text-center font-bold text-base">
                                        {title}
                                        <p className="text-xs pt-1">
                                            Default
                                        </p>
                                    </p>
                                    
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

    const {searchQuery} = query
    let data = ''
    if (searchQuery) {
        const res = await fetch(`https://images-api.nasa.gov/search?q=${searchQuery}`)
            data = await res.json()
            data = data
                .collection
                .items
                .slice(0, 10)
      
    }
    if(data !== ''){
        return {props: {
            data
        }}
    }else{
        return {props: {
            data: null
        }}
    }
  

}