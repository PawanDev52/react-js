import { useState } from "react"

function App() {
  const [color, setColor]= useState('gray');
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center p-[50px]" style={{ backgroundColor: color }}>
      <h1 className="text-white text-[40px] text-center font-semibold">Background Color Changer</h1>
      <div className="bg-white px-5 py-3 rounded-full">
        <button onClick={()=> setColor('red')} className="bg-red-600 text-white rounded-full px-6 py-2 text-base mx-2">Red</button>
        <button onClick={()=> setColor('blue')} className="bg-blue-600 text-white rounded-full px-6 py-2 text-base mx-2">Blue</button>
        <button onClick={()=> setColor('green')} className="bg-green-600 text-white rounded-full px-6 py-2 text-base mx-2">Green</button>
        <button onClick={()=> setColor('yellow')} className="bg-yellow-500 text-white rounded-full px-6 py-2 text-base mx-2">Yellow</button>
        <button onClick={()=> setColor('purple')} className="bg-purple-500 text-white rounded-full px-6 py-2 text-base mx-2">Purple</button>
        <button onClick={()=> setColor('pink')} className="bg-pink-500 text-white rounded-full px-6 py-2 text-base mx-2">Pink</button>
        <button onClick={()=> setColor('orange')} className="bg-orange-500 text-white rounded-full px-6 py-2 text-base mx-2">Orange</button>
        <button onClick={()=> setColor('lime')} className="bg-lime-500 text-white rounded-full px-6 py-2 text-base mx-2">Lime</button>
      </div>
    </div>
  );
}

export default App