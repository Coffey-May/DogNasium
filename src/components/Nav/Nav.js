import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

export default (props) => {
    
    return (
        <ul className="navbar">
             <li className="navbar__item">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
           
            <li className="navbar__item">
                <Link className="navbar__link" to="/plans/create">Plans</Link>
            </li>
          
                {
            localStorage.getItem("dognasium_user")
            ? <li className="navbar__item">
            <Link className="navbar__link"
                to=""
                onClick={e => {
                    e.preventDefault()
                    localStorage.removeItem("dognasium_user")
                    props.history.push("/Home")
                }}
                >Logout</Link>
            </li>
                : <li className="navbar__item">
                <Link className="navbar__link"
                    to="/Login"
                    
                    >Login</Link>
                </li>
            }
        </ul>
    )
}

