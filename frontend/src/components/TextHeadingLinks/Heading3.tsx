// import React from 'react'

type Props = {
    headingText:string
}

const Heading3 = (props: Props) => {
  return (
    <h3 className="md:text-3xl hover:bg-green-400 hover:text-black">{props.headingText}</h3>
  )
}

export default Heading3