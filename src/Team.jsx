import { useState } from "react"

export default function Team(){

    const [count,setCount]=useState(11)
      const addPlayers=()=>{
        const newCount=count+1;
        setCount(newCount);
      }

      const reducePlayer=()=>{
        setCount(count-1);
      }
    return (
        <div>
            <h3>players : {count} </h3>
            <button onClick={addPlayers}>add players  </button>
            <button onClick={reducePlayer}>reduce players</button>
        </div>
    )
}