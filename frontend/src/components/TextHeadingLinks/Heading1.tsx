// import React from 'react'

type Props = {
    headingText:string
}

const Heading1 = (props: Props) => {
  return (
    <h1 className="text-3xl md:text-7xl drop-shadow-sm shadow-green-400 mb-4" >{props.headingText}</h1>
  )
}

export default Heading1