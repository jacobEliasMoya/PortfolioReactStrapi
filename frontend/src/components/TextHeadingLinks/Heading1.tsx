// import React from 'react'

type Props = {
    headingText:string,
 }

const Heading1 = (props: Props) => {
  return (
    <h1 className="text-3xl md:text-5xl mb-4 px-2 bg-green-400 text-black" >{props.headingText}</h1>
  )
}

export default Heading1