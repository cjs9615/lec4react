import { useState, useEffect } from "react"
import LoginForm from "./LoginForm"
import Logout from "./Logout.js"
const Login = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {

    setUser(localStorage.getItem("user"))
  },[])
  return (
    <main className="container">
      { user ? <Logout user={user} setUser={setUser}/>
             : <LoginForm setUser={setUser}/>
      }
    </main>
  )
}

export default Login
