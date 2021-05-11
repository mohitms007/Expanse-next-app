import React, {useEffect, useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {useRouter} from 'next/router'
import AOS from "aos";

export default function SpaceSearch({data, error}) {

    const router = useRouter()
    let searchField = ''
    useEffect(() => {
        AOS.init({
            // duration : 5000
        });
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchField) {
            router.push(`/space-search?searchQuery=${searchField}`)
        }

    }

    return (
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
                                            onChange={(e) => {
                                            searchField = e.target.value
                                        }}
                                            placeholder="Search for Space-Stories For ex. apollo 11"
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
                    {error === false || error !== 'empty' ? data
                        ?.map((item, index) => {
                            const {data, links} = item
                            const {title, description_508} = data[0]
                            return (
                                <div key={index} data-aos="fade-up" className="p-4 sm:p-10 w-96">

                                    <div
                                        className="rounded align-center flex flex-col justify-center h-full items-center  overflow-hidden shadow-lg">
                                        <img
                                            className="object-cover text-center leading-250 lg:w-96 w-full h-full"
                                            src={links
                                            ?.[0].href}
                                            alt=" No Image in the database"/>
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-4"></div>
                                            <p className="text-gray-700  font-bold text-base">
                                                {title.substring(0, 40)}..
                                            </p>
                                            <p className="text-gray-500  mt-4 text-xs ">
                                                {data[0]
                                                    ?.description
                                                        ?.substring(0, 250)}..
                                            </p>
                                        </div>
                                        <div className="flex justify-end w-full">
                                            <button
                                                className="px-2 py-1 mt-2 mb-4 mx-2 hover:bg-blue-600 text-xs bg-blue-500 text-white font-bold rounded-full focus:outline-none ">View Details</button>

                                        </div>

                                    </div>
                                </div>
                            )

                        }):null
}

                </div>
                <div className="flex justify-center align-center">

                    {/*<p className="text-center mt-16">{error === true || error !== 'empty'*/}
                    {/*        ? 'No Results found. Please try again.'*/}
                    {/*        : null}</p>*/}
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

            let error;
            if (data.length == 0) {
                error = true
            } else {
                error = false
            }
            return {
                props: {
                    error,
                    data
                }
            }       

    }else{
        let error = 'empty'
        return {
            props:{
                data,error
            }
            
        }
    }
   

}