import React, { useContext } from "react";
import { Link } from "react-router-dom"
// import Event from "./Event";
import "./Home.css";
// import { EventContext } from "./EventProvider";

export default () => {
  
  

  return (
      <>
          <h1 className="home_header">home</h1>

         <button className="learnMoreBtn">
         <Link className="navbar__link"
                    to="/Login"
                    
                    >LearnMore</Link>
         </button>
      </>
  )
}