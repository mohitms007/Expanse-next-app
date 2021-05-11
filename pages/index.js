import {AiOutlineArrowRight} from 'react-icons/ai'
import {useEffect} from "react";
import AOS from "aos";


export default function Home({data}) {
    const {url, explanation} = data
    useEffect(() => {
        AOS.init({
            // duration : 5000
        });
    }, []);
    return (
        <div>
            <div
                className="w-full max-h-screen-lg  items-center justify-center flex-col mx-auto">
                <div className="flex justify-center">
                    <div
                        className="flex-col space-y-7 text-4xl text-center absolute top-0 font-bold font-mono sm:text-5xl lg:text-8xl text-white mt-60">
                        <div className="mb-16 space-y-6">
                            <h1 className="text-pink-300 animate__animated  animate__repeat-2 animate__bounce">
                                Space at
                            </h1>
                            <h1>
                                your fingertips.
                            </h1>
                        </div>

                        <button
                            className="font-sans flex  text-white bg-blue-600 focus:outline-none hover:-translate-y-0.5 transform transition justify-center items-center mx-auto text-lg hover:bg-white hover:text-purple-700 py-3 px-4 rounded-full">Get Started<AiOutlineArrowRight className="ml-2"/></button>
                    </div>
                </div>

                <img className="w-full object-cover img" src="/hello.webp"/>
            </div>
            <div className="flex justify-center align-center">
                <div
                    className="text-6xl font-sans  text-center mt-24 mb-4   font-semibold tracking-tighter lg:text-7xl text-gradient title-font">Pictures of the day</div>
            </div>

            <div
                className="flex-col  flex items-center text-lg justify-items-center mx-auto p-6 rounded max-w-6xl">
                <p className="text-gray-500 max-w-3xl text-center mx-2 my-6 italic">"I want to
                    know why the universe exist, why there is something greater than nothing."</p>
                <div className="flex items-center justify-center">
                    <img src="/steve.jpg" className="rounded-full mr-2 h-16 w-16 object-cover"/>
                    <div>
                        <p>Steven Hawking</p>
                        <p className="text-gray-500 text-sm">Scientist, Space Lover</p>
                    </div>

                </div>
            </div>

            {data.map((item, index) => (
                <div
                    key={index}
                    className='rounded-lg text-gray-800 container mt-32 mx-auto mb-2 p-4 max-w-6xl'>
                    <div
                        data-aos={index%2 === 0 ? "fade-right" : "fade-left"}
                        className={index % 2 === 0
                        ? "mx-5 rounded-lg flex-col lg:flex-row shadow-lg box-border flex items-stretch jus" +
                            "tify-center w-3/3 h-auto"
                        : "mx-5 mt-5 mb-2 rounded-lg flex-col lg:flex-row-reverse shadow-lg box-border flex" +
                            " items-stretch justify-center w-3/3"}>
                        <img
                            className="rounded-b-none object-cover rounded-lg bg-bottom border min-w-1/3 lg:w-1/3"
                            src={item.url}/>
                        <div className="flex-col ml-4 p-4 mt-4 lg:mb-0 h-full align-center">
                            <span className="md:text-5xl text-3xl font-bold font-title">
                                <span className="text-blue-500">{item
                                        .title
                                        .split(" ")[0]}
                                </span>
                                {item
                                    .title
                                    .substring((item.title.split(" ")[0]).length, item.title.length)}
                            </span>
                            <p
                                className="text-gray-500 md:text-lg text-sm leading-relaxed mt-4 break-words">{item.explanation}</p>
                            <div
                                className={index % 2 === 0
                                ? "flex justify-end"
                                : "flex justify-start"}>
                                <button
                                    className="mt-10 bg-blue-500 px-2 py-0.5 hover:shadow-md hover:bg-blue-600 rounded-lg font-bold text-white">Interested</button>
                            </div>

                        </div>

                    </div>
                </div>
            ))
}
        </div>
    )
}

export const getServerSideProps = async() => {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&count=3`)
    const data = await res.json()
    return {
        props: {
            data
        }}
}
