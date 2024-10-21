// import React from 'react'

import RegButton from "../buttons/RegButton"
import Heading1 from "../TextHeadingLinks/Heading1"
import Heading2 from "../TextHeadingLinks/Heading2"
import Image from "../media/Image"
import PipBoyImg from "../../assets/pipboy example red.webp"

const HomeSection = () => {
  return (
    <section className=" flex p-4 md:px-12 md:pt-16 mx-auto border-2  shadow-green-400 border-t-0 border-green-400  min-h-2/3  w-full ">

        <div className="w-fll md:w-7/12">

            <Heading2 
                headingText="Hello User ... I'm Jake "
            />
            <Heading1 
                headingText="I like Jokes/Tech"
            />
            <Heading2 
                headingText="Joke number one... 
                lets use high-level technology to reacreate a vintage Fallout style UI ... "
            />

            <RegButton
                buttonText={"Step Into My Brain"}       
            />        

        </div>

        <div className="w-fll md:w-5/12">
            <Image 
                imageSrc={PipBoyImg} 
                imageTitle={""} 
                imageAlt={""} 
                imageClass={""}
            />
        </div>


    </section>
  )
}

export default HomeSection