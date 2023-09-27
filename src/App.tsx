
import './App.css'
import Blog from "./blog/Blog.tsx";
import {users} from "./helper/database/db.tsx";
import Header from "./header/Header.tsx";
import Footer from "./footer/Footer.tsx";

export default function App() {
users.map(user => console.log(user.name))

  return (
      <>
        <Header/>
        <Blog users={users}/>
          <Footer/>
      </>

  )
}
