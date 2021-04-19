export default function Home({data}) {
    const {url, explanation} = data
    console.log(process.env.API_JEY)
    return ( <> <div
            className="w-full max-h-screen-lg  items-center justify-center flex-col mx-auto">
            <div className="flex justify-center">
                <div
                    className="flex-col space-y-7 text-4xl text-center absolute top-0 font-bold font-mono sm:text-5xl lg:text-8xl text-white mt-64">
                    <h1 className="text-pink-300">
                        Space at
                    </h1>
                    <h1>
                        your fingertips.
                    </h1>

                    <button className="font-sans text-lg bg-white text-gray-700 p-4 rounded-lg ">Get Started</button>
                </div>
            </div>

            <img className="w-full object-cover img" src="/hello.webp"/>
        </div>
        <div className="flex justify-center align-center">
        <div className="text-6xl font-mono  bg-blue-500 p-4 justify-center flex max-w-6xl align-center text-white text-center mt-24"> Pictures of the day</div>
        </div>
       
        {
        data.map((item, index) => (
            <div
                key={index}
                className='rounded-lg text-gray-800 container mt-32 mx-auto p-4 max-w-6xl'>
                <div
                    className={index % 2 == 0
                    ? "m-5 rounded-lg flex-col lg:flex-row shadow-lg box-border flex items-stretch just" +
                        "ify-center w-3/3"
                    : "m-5 rounded-lg flex-col lg:flex-row-reverse shadow-lg box-border flex items-stre" +
                        "tch justify-center w-3/3"}>
                    <img
                        className="rounded-b-none object-cover rounded-lg bg-bottom border lg:w-1/3"
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
                        <div className="flex justify-end">
                            <button
                                className="mt-10 bg-blue-500 px-2 py-0.5 hover:shadow-md hover:bg-blue-600 rounded-lg font-bold text-white">Interested</button>
                        </div>

                    </div>

                </div>
            </div>
        ))
    } </>)} 
                
                
        export const getServerSideProps = async() => {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&count=3`)
                const data = await res.json()
                return {
                    props: {
                        data
                    }}
}