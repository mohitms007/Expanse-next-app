import React from 'react'

export default function Hello({hello}) {
     return (
          <div class="mx-auto container flex items-center justify-center text-center">
               {hello}
          </div>
     )
}

export const getServerSideProps = (req) => {
     const { input} = req.query
     console.log(input)
     return{
          props:{
               hello: "I am coming here bitches"
          }
     }
}