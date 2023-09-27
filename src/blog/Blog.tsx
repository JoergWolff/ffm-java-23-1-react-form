import Card from "./card/Card.tsx";

type User = {
    id: number,
    name: string,
    roles: string[],
    about: string
}
export default function Blog(props: {users: User[]}){
    return (

        props.users.map(oneUser => (<Card key={oneUser.id} user={oneUser}/>)
    ))
}