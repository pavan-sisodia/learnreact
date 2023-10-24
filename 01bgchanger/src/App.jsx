import { useState } from "react";

function App() {
  const [color,setColor] = useState("#0c0233");

  return (
    <>
      <div className="w-full h-screen"
        style={{backgroundColor:color}}>
          <div className="h-7 w-full bottom-6 flex flex-wrap fixed justify-center mb-3">
            <div className="flex flex-wrap justify-center gap-6 bg-white py-3 px-4 rounded-lg">
            <button 
            onClick={()=>setColor("green")}
            className="border-l rounded-lg bg-green-600 font-bold px-8 py-2 shadow-xl text-white"
            style={{backgroundColor:"green"}}>Green</button>
            <button 
            onClick={()=>setColor("blue")}
            className="border-l rounded-lg bg-blue-600 font-bold px-8 py-2 shadow-xl text-white ">Blue</button>
            <button
            onClick={()=>setColor("yellow")}
            className="border-l rounded-lg bg-yellow-600 font-bold px-8 py-2 shadow-xl text-white ">Yellow</button>
            <button
            onClick={()=>setColor("purple")}
            className="border-l rounded-lg bg-purple-600 font-bold px-8 py-2 shadow-xl text-white ">Purple</button>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
