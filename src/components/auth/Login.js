// Added by Adi
import React, { useRef } from "react"
import { Link } from "react-router-dom";
import "./login.css"




const Login = props => {
    const email = useRef()
    const password = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?userEmail=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return user[0]
                }
                return false
            })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists && exists.userPassword === password.current.value) {
                    localStorage.setItem("dognasium_user", exists.id)
                    props.history.push("/home")
                } else if (exists && exists.userPassword !== password.current.value) {
                    window.alert("Password does not match")
                  } else if (!exists) {
                    window.alert("user does not exist")

                }
            })
    }

    return (
        <main className="container--login" >
             {/* <img src={require('../images/dogNasiumPic1.jpg')} />   */}
             <h1 className="login_header">D O G<br/> N A S I U M</h1>
            <section className="logForm">
                <form className="form--login" onSubmit={handleLogin}>
                    
                    <h2>Please sign in to continue</h2>
                    <fieldset>
                        <label className="logReg" htmlFor="inputEmail"> Email address </label><br/>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label className="logReg" htmlFor="inputPassword"> Password </label><br/>
                        <input ref={password} type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset>
                        <button className="signInBtn" type="submit">
                            Sign in
                    </button>
                    <section className="link--register">
                <Link className="regLink" to="/register">Not a member yet?</Link>
            </section>
                    </fieldset>
                </form>
               
            </section>
          
       
        </main>
    )
}
export default Login