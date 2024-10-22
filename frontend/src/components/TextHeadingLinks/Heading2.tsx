// import React from 'react'

type Props = {
    headingText:string
}

const Heading2 = (props: Props) => {
  return (
    <h2 className="md:text-6xl mb-3 text-xl ">{props.headingText}</h2>
  )
}

export default Heading2