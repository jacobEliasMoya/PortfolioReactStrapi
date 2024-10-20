// import React from 'react'

type Props = {
    headingText:string
}

const Heading2 = (props: Props) => {
  return (
    <h2 className="md:text-5xl text-xl drop-shadow-sm shadow-green-400">{props.headingText}</h2>
  )
}

export default Heading2