import React, { useContext } from "react";
import { Link } from "react-router-dom"
// import Event from "./Event";
import "./Home.css";
// import { Parallax } from "react-scroll-parallax";
// import { EventContext } from "./EventProvider";

export default (props) => {
  
  

  return (
      <>
      <main className="mainHome">

<div className="Title">
<h1><span className="dogSpan">

<span>D</span>
<span>o</span>
<span>g</span>
</span>
</h1>
<h2><span className="dogSpan2">
<span>N</span>
<span>A</span>
<span>S</span>
<span>I</span>
<span>U</span>
<span>M</span>
</span>
</h2>
</div>

{/* var textWrapper = document.querySelector('.dogSpan');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.dogSpan .letter',
    translateX: 0,
    translateZ: [100,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 7000,
    delay: (el, i) => 10 + 30 * i
  }).add({
    targets: '.dogSpan .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 0,
    delay: (el, i) => 10000000 + 30 * i
  });

  var textWrapper = document.querySelector('.dogSpan2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.dogSpan2 .letter',
    translateX: [-500,0],
    translateZ: [300,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 7000,
    delay: (el, i) => 10 + 30 * i
  }).add({
    targets: '.dogSpan2 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 0,
    delay: (el, i) => 1000000 + 30 * i
  });
          */}

          <button className="PurchaseOptionsBtn">

          {
            localStorage.getItem("dognasium_user")
            ? 
            <Link className="navbar__link"
                to="/plans/create"
              
                >View Purchase options</Link>
           
                : 
                <Link className="navbar__link"
                    to="/Login"
                    
                    ><i>Please login <br/>
                      to view<br/>
                       purchase 
                      options</i></Link>
               
            }

       
         </button>
        

         <button className="learnMoreBtn">
         <Link className="navbar__link"
                    to="/Login"
                    
                    >LearnMore</Link>
         </button>
         </main>
      </>
  )
}