import { useState } from "react"

export default function Counter(){
    const  [count,setCount]=useState(0)
      const addButton=()=>{
         const newCount=count+1;
         setCount(newCount)
      }
      const reduceButton=()=>{
        const reduceNumber=count-1;
        setCount(reduceNumber);
      }

    return (
        <div>
            <h3>count : {count} </h3>
            <button onClick={addButton}>add</button>
            <button onClick={reduceButton}>reduce</button>
        </div>
    )
}