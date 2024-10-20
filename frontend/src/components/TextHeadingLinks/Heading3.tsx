// import React from 'react'

type Props = {
    headingText:string
}

const Heading3 = (props: Props) => {
  return (
    <h3 className="md:text-3xl drop-shadow-sm shadow-green-400">{props.headingText}</h3>
  )
}

export default Heading3