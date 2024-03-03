// import React from 'react'

import CreateIndex from "./components/CreateIndex"
import Todos from "./components/Todos"


function App() {
  return (
    <div className=" bg-zinc-200 p-3 w-full h-screen">
      <div className="h-fit w-full flex justify-center p-4">
      <CreateIndex />
      </div>

      <div className=" h-fit flex  flex-wrap gap-5 items-center justify-center">
        <Todos />
        <Todos />
        <Todos />
        <Todos />
    
      </div>
  
   
    </div>
  )
}

export default App