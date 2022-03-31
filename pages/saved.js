import React from 'react'
import { useEffect, useState } from 'react'



export default function Saved () {
    const [stories, setStories] = useState([])
    
    useEffect(() => {
        const fetchedStories = getLocalStories()
        setStories(fetchedStories)
    })

    const getLocalStories = () => {
        const previousMovies = JSON.parse(localStorage.getItem('savedStories')) || []
        return previousMovies
    }
    return (
        <>
       <div className="main mx-auto mb-40">
                <div className="px-4  sm:px-8 lg:px-16 xl:px-20 mx-auto">

                    <div className="hero">

                        <div
                            className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
                            <h1 className=" font-bold text-3xl font-title text-gray-900">Saved Stories</h1>
                            <p className=" font-base text-base mt-2 text-gray-600">Find your saved stories here.</p>
                        </div>
                    </div>
                </div>
            </div>
        
        {stories?.map((item, index) => (
        <div
          key={index}
          className="rounded-lg text-gray-800 container mt-32 mx-auto mb-2 p-4 max-w-6xl"
        >
          <div
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className={
              index % 2 === 0
                ? "mx-5 rounded-lg flex-col lg:flex-row shadow-lg box-border flex items-stretch jus" +
                  "tify-center w-3/3 h-auto"
                : "mx-5 mt-5 mb-2 rounded-lg flex-col lg:flex-row-reverse shadow-lg box-border flex" +
                  " items-stretch justify-center w-3/3"
            }
          >
            <img
              className="rounded-b-none object-cover rounded-lg bg-bottom border min-w-1/3 lg:w-1/3"
              src={item.url || "/placeholder.jpg"}
            />
            <div className="flex-col ml-4 p-4 mt-4 lg:mb-0 h-full align-center">
              <span className="md:text-5xl text-3xl font-bold font-title">
                <span className="text-blue-500">
                  {item.title.split(" ")[0]}
                </span>
                {item.title.substring(
                  item.title.split(" ")[0].length,
                  item.title.length
                )}
              </span>
              <p className="text-gray-500 md:text-lg text-sm leading-relaxed mt-4 break-words">
                {item.explanation}
              </p>
              <div
                className={
                  index % 2 === 0 ? "flex justify-end" : "flex justify-start"
                }
              >
                {/* <button onClick={() => handleSave(item)} className="mt-10 bg-blue-500 px-2 py-0.5 hover:shadow-md hover:bg-blue-600 rounded-lg font-bold text-white">
                  Save For Later
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
       </>
    )
}

