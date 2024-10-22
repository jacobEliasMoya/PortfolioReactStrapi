// import React from 'react'

import RegButton from "../buttons/RegButton"
import Heading1 from "../TextHeadingLinks/Heading1"
import Heading2 from "../TextHeadingLinks/Heading2"
import Image from "../media/Image"
import ProfImg from "../../assets/isame.jpg"
import Heading3 from "../TextHeadingLinks/Heading3"

const HomeSection = () => {
  return (
    <section className=" flex  p-8 md:px-12 md:py-16 mx-auto border-2 gap-10 shadow-green-400 border-t-0 border-green-400  min-h-2/3  w-full ">

        <div className="w-full md:w-8/12 p-8 border-2 border-green-400">

            <Heading1 
                headingText="Hello User ... I'm Jake "
            />
            <Heading2 
                headingText="I like Jokes/Tech"
            />
            <Heading3 
                headingText="Joke number one... 
                lets use high-level technology to reacreate a vintage Fallout style UI ... "
            />

            <RegButton
                buttonText={"Step Into My Brain"}       
            />        

        </div>

        <div className="w-full md:w-4/12 p-4 border-2 overflow-hidden border-green-400 flex flex-col">
            <Image 
                imageSrc={ProfImg} 
                imageTitle={""} 
                imageAlt={""} 
                imageClass={"scale-110 opacity-60 w-full "}
            />

        </div>


    </section>
  )
}

export default HomeSection