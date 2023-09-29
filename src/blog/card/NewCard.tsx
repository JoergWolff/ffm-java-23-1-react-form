import {ChangeEvent, useState} from "react";
import "./Card.css"

export default function NewCard() {

    const [name, setName] = useState<string>("")
    const [about, setAbout] = useState<string>("")
    const[isAdmin, setIsAdmin]=useState<boolean>(false)
    const[isOwner, setIsOwner]=useState<boolean>(false)
    const[isMember, setIsMember]=useState<boolean>(false)
    const[isGuest, setIsGuest]=useState<boolean>(true)

    function onChangeName(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }
    function onChangeAbout(event: ChangeEvent<HTMLTextAreaElement>) {
        setAbout(event.target.value)
    }
    function onChangeIsAdmin(){
        setIsAdmin(!isAdmin)
        isGuest ? setIsGuest(!isGuest):setIsGuest(!isGuest)
    }
    function onChangeIsOwner(){
        setIsOwner(!isOwner)
        isGuest ? setIsGuest(!isGuest):setIsGuest(!isGuest)
    }
    function onChangeIsMember() {
        setIsMember(!isMember)
    }
    function onChangeIsGuest() {
        setIsGuest(isGuest)
    }

    return (
        <section className="card">
            <h1>New Blog</h1>
            <form className="card_form">
                <input onChange={onChangeName} type={"text"} placeholder="Name:" value={name}/>
                <fieldset>
                    <legend>Roles</legend>
                    <label className="card_form_checkbox">Admin</label>
                    <input onChange={onChangeIsAdmin} type="checkbox" checked={isAdmin}/>
                    <label className="card_form_checkbox">Owner</label>
                    <input onChange={onChangeIsOwner}  type="checkbox" checked={isOwner}/>
                    <label className="card_form_checkbox">Member</label>
                    <input onChange={onChangeIsMember}  type="checkbox" checked={isMember}/>
                    <label className="card_form_checkbox">Guest</label>
                    <input onChange={onChangeIsGuest}  type="checkbox" checked={isGuest}/>
                </fieldset>
                <textarea onChange={onChangeAbout} placeholder="About:" value={about}/>
                <button type={"submit"}>Submit</button>
            </form>
        </section>
    )
}