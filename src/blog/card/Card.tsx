import './Card.css'

type User = {
    id: number,
    name: string,
    roles: string[],
    about: string
}
export default function Card(props: {user:User}){
    return (
        <section className="card">
            <h2>{props.user.name}</h2>
            <h3>Role: {props.user.roles.join()}</h3>
            <p className="card-about"><strong>About: </strong> {props.user.about}</p>
            <button>Details</button>
        </section>


        )
}