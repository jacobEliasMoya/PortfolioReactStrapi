// import React from 'react'

type Props = {
    headingText:string
}

const Heading2 = (props: Props) => {
  return (
    <h2 className="md:text-5xl text-xl hover:bg-green-400 hover:text-black">{props.headingText}</h2>
  )
}

export default Heading2