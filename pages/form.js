import React,{useState} from 'react'
import Link from 'next/link'
export default function Form() {
     const [input1,setInput1] = useState("")
     const [input2,setInput2] = useState("")

     return (
          <div>
               <form onSubmit={handleSubmit}>
                    <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)}></input>
                    <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)}></input>
                   <Link href={ `/hello/input=${input1}` } ><button type="submit">Submit</button></Link>
               </form>
          </div>
     )
}
