// import React from 'react'

function CreateIndex() {
  return (
    <>
    <div className="h-60 p-2 bg-white flex flex-col justify-center items-center w-72 gap-2 shadow-md shadow-gray-400 " >
        <input className="p-3 outline-blue-700 rounded-md border-2 border-zinc-400" type="text" placeholder="title"/>
        <input className="p-3 outline-blue-700 rounded-md border-2 border-zinc-400" type="text" placeholder="description..."/>
        <button className="p-2 bg-blue-500 rounded-md w-24 text-white"  >Create</button>
    </div>
    </>
  )
}

export default CreateIndex