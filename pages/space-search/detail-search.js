import {AiFillInstagram,AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {GiSpaceShuttle} from 'react-icons/gi'

export const DetailSearch = ({data, error}) => {
    console.log(data.links[1].href)
    return (
        <div className="flex flex-col md:flex-row items-center  justify-center bg-white dark:bg-black px-8 mt-40">
            <img className="rounded-lg h-72 mt-8 w-72" alt="profile-pic" src={data.links[0].href}/>
            <main
                id="skip"
                className="flex flex-col justify-center bg-white dark:bg-black mx-9 mt-24">
                <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                    <div className="flex">

                        <h1
                            className="font-bold text-3xl md:text-5xl tracking-tight mb-4 font-title text-black dark:text-white">{data.data[0].title}</h1>
                    </div>
                    <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">


                        <p>{data.data[0].description}</p>
                    </div>


                </div>

            </main>

        </div>

    )
}


export const getServerSideProps = async({query}) => {

    const {searchQuery , id} = query
    let data = ''
    if (searchQuery) {
        const res = await fetch(`https://images-api.nasa.gov/search?q=${searchQuery}`)
        data = await res.json()
        data = data
            .collection
            .items
            .slice(0, 10)[id]

        let error;
        if (data && data.length === 0) {
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



export default DetailSearch;