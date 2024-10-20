// import React from 'react'

import RegButton from "../buttons/RegButton"
import Heading1 from "../TextHeadingLinks/Heading1"
import Heading2 from "../TextHeadingLinks/Heading2"

type Props = {}

const HomeSection = (props: Props) => {
  return (
    <section className=" p-4 md:px-12 md:pt-16 mx-auto p-1 border-2 border-t-0 border-green-400  h-2/3  w-full ">

        <Heading2 
            headingText="Hello User ... "
        />
        <Heading1 
            headingText="I'm Jake, I like Jokes"
        />
        <Heading2 
            headingText="Joke number one... 
            lets use high-level technology to reacreate a vintage Fallout style UI ... "
        />

        <RegButton
            buttonText={"Step Into My Brain"}       
        />

    </section>
  )
}

export default HomeSection