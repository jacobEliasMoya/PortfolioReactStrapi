// import React from 'react'

type Props = {
    headingText:string,
 }

const Heading1 = (props: Props) => {
  return (
    <h1 className="text-3xl md:text-7xl mb-4 hover:bg-green-400 hover:text-black" >{props.headingText}</h1>
  )
}

export default Heading1