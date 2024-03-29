import { useState } from "react"

/**
 * In react some of the UI doesn't required instance update 
 * to update the  virtual dom fiber algo is used now
 * 
 * the fiber algo has the ability to abort,pause or reuse the work as assign depends on the priority
 * 
 * Reconciliation is the process where its check with two different tree(DOM) and update as it when 
 * its completely update 
 * 
 * 
 * 
 */
const App=()=>{

  const [count, setCount] =useState(0);

  const incrementByOne=()=>{
    setCount(count+1)
  }

  const decrementByone =() =>{
    if(count >0){
    setCount(count -1);
    }
  }
    return (
    <div>
      <h3>counter : {count}</h3>

      <button onClick={incrementByOne}>increment</button>
      <hr />
      <button onClick={decrementByone}>decrement</button>
    </div>
  )
}

export default App;