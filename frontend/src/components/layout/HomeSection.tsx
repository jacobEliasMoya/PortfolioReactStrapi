// import React from 'react'

import RegButton from "../buttons/RegButton"
import Heading1 from "../TextHeadingLinks/Heading1"
import Heading2 from "../TextHeadingLinks/Heading2"
// import Image from "../media/Image"
// import ProfImg from "../../assets/isame.jpg"
import Heading3 from "../TextHeadingLinks/Heading3"
import { DiGithubBadge } from "react-icons/di";

const HomeSection = () => {
  return (
    <section className=" flex order-1 p-8 md:px-12 md:py-16 mx-auto border-2 gap-10 shadow-green-400 border-t-0 border-green-400  min-h-2/3  w-full ">

        <div className="w-full md:w-7/12 p-8">

            <Heading1 
                headingText="Hello User ... I'm Jake, a Frontend Dev "
            /><br/>
            <Heading2 
                headingText="React | TypeScript | WordPress | PHP "
            />
            <Heading3 
                headingText="Joke number one... 
                lets use high-level technology to reacreate a vintage Fallout style UI ... "
            /><br/>
            <div className="flex gap-8">
                <div className="w-1/2">
                    <RegButton
                        buttonText={"View Code"} 
                        iconComponent={<DiGithubBadge size='2em'/>}            
                    />  
                </div>
                <div className="w-1/2">
                    <RegButton
                        buttonText={"View Code"} 
                        iconComponent={<DiGithubBadge size='2em'/>}            
                    />  
                </div>
            </div>
        </div>

        <div className="w-full order-2 md:w-5/12 p-4  overflow-hidden border-green-400 bg-green-400 bg-opacity-50 flex flex-col rounded-xl ">
        </div>


    </section>
  )
}

export default HomeSection