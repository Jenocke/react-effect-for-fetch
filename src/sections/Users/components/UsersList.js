import UsersListItem from "./UsersListItem";
import { useEffect, useState } from "react"

export default function UsersList (){
    const [userList, setUserList] = useState([]);

    useEffect(() =>{
        fetch("https://randomuser.me/api/?results=10")
        .then(res => res.json())
        .then(data => {
            setUserList(data.results)
        });
    }, []
    )


    return (
        <ul class="users-list">
            {userList.map((item) =>(
                <UsersListItem item={item}/>
            ))}
        </ul>
    )
}