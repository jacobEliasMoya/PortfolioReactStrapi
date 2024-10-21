import Header from "./components/layout/Header"
import HomeSection from "./components/layout/HomeSection"

const  App =()=> {
  
  return (

    <body className="h-screen bg-black  font-retro box-border p-4	md:p-6 px-10 text-green-400">
          <Header/>
          <HomeSection/>
    </body>

  )
}

export default App
