import React, { useState } from "react"

interface counterProps {
    initialCounter:number
};

const Counter: React.FC<counterProps> =({initialCounter}) =>{
   const [count ,setCount] = useState<number>(initialCounter);

   const handleIncrement =()=>{
    setCount(count +1);
   }

   const handleDecrement =() =>{
    setCount(count -1);
   }
   <div>
    <h2>Counter application</h2>
    <p>let see the count:  {count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
   </div>
}

export default Counter;