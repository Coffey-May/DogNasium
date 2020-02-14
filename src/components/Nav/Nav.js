import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

export default (props) => {

    return (
        <nav className="navWrap sticky-top  ">
              <div  id="navbarNav">
        <ul className="navbar navbar-dark ">
            <li className="navbar__item ">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
          

            <li className="navbar__item">


                {
                    localStorage.getItem("dognasium_user")
                        ?
                        <Link className="navbar__link"
                            to="/plans/create"
                           
                        >Plans</Link>

                        :
                        <Link 
                        // onClick={  window.alert("You must Login to make Purchases")}
                            className="navbar__link"
                            to="/Login"

                        >Plans</Link>
                       

                }
                <Link className="navbar__link" to="/plans/create"></Link>
            </li>


            {
localStorage.getItem("dognasium_user")
           ? <li className="navbar__item">
                 <Link className="navbar__link" to="/orders">My Cart</Link>
            </li>
            :<li className="navbar__item">
                        <Link className="navbar__loginlink"
                            to="/Login"

                        >My Cart</Link>
                    </li>
}


            {
                localStorage.getItem("dognasium_user")
                    ? <li className="navbar__item">
                        <Link className="navbar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("dognasium_user")
                                props.history.push("/Login")
                            }}
                        >Logout</Link>
                    </li>
                    : <li className="navbar__item">
                        <Link className="navbar__loginlink"
                            to="/Login"

                        >Login</Link>
                    </li>
                    
            }
              {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
        </ul>
        </div>
        </nav>
    )
}

