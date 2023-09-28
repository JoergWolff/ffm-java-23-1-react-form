import './Header.css'
import Profile from "../profile/Profile.tsx";
export default function Header(){
    return (
        <header className="blog-header">
            MyBlog
            <Profile/>
        </header>
    )
}