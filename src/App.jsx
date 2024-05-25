import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import User from './user'
import Friends from './Friends'
import Students from './Students'

function App() {
   function goAhead(){
    alert ("go on where your dearling is and take her a heaven kiss")
   }
   const goAhead2=()=>{
    alert ('go on where your dearling is and take her a heaven kiss')
   }

   const goAhead3=(num)=>{
    alert ('go on where your dearling is and take her a heaven kiss')
   }

  return (
    <>
      <h1>Vite + React</h1>
      <p>wellcome in the react world</p>
      <Students></Students>
      <Friends></Friends>
      <User></User>
      <Counter></Counter>
      <Team></Team>



      <button onClick={goAhead}>click me</button>

      <button onClick={goAhead2}>click me 2</button>

      <button onClick={()=>goAhead3(3)}>click me 3</button>

      <button onClick={()=>{ alert ('go on where your dearling is and take her a heaven kiss')}}>click me 4</button>
    
    </>
  )
}

export default App
