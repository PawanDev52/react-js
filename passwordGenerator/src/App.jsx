import { useCallback, useEffect, useState } from "react"

function App() {

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-[200px] text-white bg-gray-800">
        <h1 className="text-center text-2xl text-white mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" className="outline-none w-full py-1.5 px-3 text-black placeholder:text-gray-800" placeholder="Generated Password" readOnly />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2 justify-between">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={20} className="cursor-pointer" />
            <label>Length: </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput" />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="characterInput" />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App