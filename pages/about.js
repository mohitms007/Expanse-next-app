import {AiFillInstagram,AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {GiSpaceShuttle} from 'react-icons/gi'

export const About = () => {
    return (
        <div className="flex justify-center bg-white dark:bg-black px-8 mt-24">
 <img className="rounded-full h-72 mt-8 w-72" src="./profile.png"/>
 <main
            id="skip"
            className="flex flex-col justify-center bg-white dark:bg-black mx-9 mt-24">
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <div className="flex">
               
                <h1
                    className="font-bold text-3xl md:text-5xl tracking-tight mb-4 font-title text-black dark:text-white">About Me</h1>
                </div>
                <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
                    <p>Hey, I’m Mohit Sharma. I'm a developer, student, and the creator of this website.
                        I am currently working on React and Next.js.</p>
                  
                    <p>I grew up in India and currently studying at PU, yet to graduate
                        with a degree in Information Technology. I spend my free time playing cricket and basketball,
                        coding, and enjoying.</p>
                </div>
           
           
            </div>
            <p className="text-gray-500 flex mt-30 mx-auto hover:text-gray-600 transition" href="/tweets"><GiSpaceShuttle className="mr-2"/>Powered By Nasa API</p> 
        </main>
       
        </div>
      
    )
}

export default About;