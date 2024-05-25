export default function Friend({friend}){
    console.log(friend)
    return (
        <div className="box">
            <h3>name : {friend.name} </h3>
            <h3>email : {friend.email} </h3>
        </div>
    )
}