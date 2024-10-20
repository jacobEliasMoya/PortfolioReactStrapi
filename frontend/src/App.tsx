import RegButton from "./components/buttons/RegButton"
import Header from "./components/layout/Header"

function App() {
  return (

    <body className="h-screen bg-black  font-retro box-border	p-6 px-10">
      <Header/>
          <div className="md:flex hidden mx-auto p-1 border-x-2 border-green-400 w-full h-1/4">
          
          </div>

          
          <div className=" mx-auto p-1 border-2 border-t-0 border-green-400  h-1/3  w-full">
          
          <RegButton buttonText={"test"}/>

          </div>
          <div className="md:flex hidden mx-auto p-1 border-2 border-green-400  h-1/3 mt-6 w-full"></div>
    </body>

  )
}

export default App
