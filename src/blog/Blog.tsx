import Card from "./card/Card.tsx";
import {User} from "../helper/database/db.tsx";

export default function Blog(props: {users: User[]}){
    return (

        props.users.map(oneUser => (<Card key={oneUser.id} user={oneUser}/>)
    ))
}