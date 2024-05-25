import { useEffect, useState } from "react"
import Student from "./Student"
export default function Students(){
    const [students,setstudents]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setstudents(data))
    },[])
    return (
        < div className="box">
            <h3>student : {students.length } </h3>
         
            {
                students.map(student=><Student student={student}></Student>)
            }
        </div>
      
    )
}