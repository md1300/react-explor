export default function Student({student}){
    console.log(student)
    return(
        <div className="box">
        <h3>name: {student.name} </h3>
        <h3> email : {student.email}</h3>
        </div>
    )
}