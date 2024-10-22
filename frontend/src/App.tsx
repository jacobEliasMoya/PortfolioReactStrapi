import Header from "./components/layout/Header"
import HomeSection from "./components/layout/HomeSection"

const  App =()=> {
  
  return (

    <body className="  min-h-screen bg-zinc-900 relative z-10 after:-z-10 after:top-0 after:left-0 after:absolute after:w-full after:h-full bg-fixed after:bg-[repeating-linear-gradient(#11111190,#11111190_4px,_#00000080_4px,#00000060_7px)]  font-retro box-border p-4	md:p-6 px-10 text-green-400 ">
          <Header/>
          <HomeSection/>
    </body>

  )
}

export default App
