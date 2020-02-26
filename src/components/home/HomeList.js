import React from "react";
import { Link } from "react-router-dom"

// import Event from "./Event";
import "./Home.css";
// import { Parallax } from "react-scroll-parallax";
// import { EventContext } from "./EventProvider";

export default (props) => {



  return (
    <>
      <div className="homeWrap" >
        <div className="homeWrap2" >

          <main className="mainHome ">

            <div className="Title"><h1 className="welcome" > </h1>
              {/* <h1 className="greet"></h1> */}
              {/* <h2 className="test"><span role="img"></span></h2> */}
              <div className="pageOneWrap">
                <div className="infoHover">

                  <h1><span className="dogSpan" id="middle">

                    <span>D</span>
                    <span>O</span>
                    <span>G</span>
                  </span>

                  </h1>
                  <h2 ><span className="dogSpan2">
                    <span>N</span>
                    <span>A</span>
                    <span>S</span>
                    <span>I</span>
                    <span>U</span>
                    <span>M</span>
                  </span>
                  </h2>
                </div>
                <div className="titleHole container"><p className="text">Welcome to Dog-Nasium.
                The World's first of its kind indoor dog park.
                Housed inside of an 80,000 square foot geodesic dome,
                Dog-Nasium offers a variety of amenities to dogs, and dog owners of all kinds.
                Located on Kandy Korner, across the street from Martins Aquarium in GlassDale,
                Dog-Nasium, is your one stop shop for all of your dogs needs.
                Through our work in conjunction with the Nashville Kennels, we have established ourselves
                as the preeminent organization for rescuing dogs.  We also, soon plan to recruit one of our rescues to the upcoming 
                Mission to Mars.
                </p>
           </div>
              </div>
            </div>

          </main>


          <section className="homePageTwo container">
            <h1 className="packages"> &nbsp; &nbsp;&nbsp;PACKAGE PLANS</h1>
            <div className="descriptions container">

              <div className="desc"><h1>Puppy Plan</h1>
              <h3> 1 month</h3>
                <h5>
                  <ul className="unOrdered  ">
                    <li className="li">For $19.99  get all access to our <br /> 24 hour park for 30 days.</li><hr className="hr"/>
                    <li className="li">Add 50% off all cafe purchases <br />for an additional $9.99</li><hr className="hr"/>
                    <li className="li">Add 50% off all restaurant items, <br />alcohol not included, for an additional $19.99</li><hr className="hr"/>
                    <li className="li">Add 50% off all pet store purchases <br />for an additional $19.99</li>
                  </ul>
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
                        ><i>Please login <br />
                            to view<br />
                            purchase
                      options</i></Link>}
                  </button>
                </h5>
              </div>
              <div className="desc"><h1>Doggo Plan</h1>
              <h3>6 months</h3>
                <h5>
                  <ul className="unOrdered  ">
                    <li className="li">For $49.99  get all access to our <br /> 24 hour park for 182 days.</li><hr className="hr"/>
                    <li className="li">Add 50% off all cafe purchases <br />for an additional $29.99</li><hr className="hr"/>
                    <li className="li">Add 50% off all restaurant items, <br />alcohol not included, for an additional $49.99</li><hr className="hr"/>
                    <li className="li">Add 50% offall pet store purchases <br />for an additional $49.99</li>
                  </ul>
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
                        ><i>Please login <br />
                            to view<br />
                            purchase
                      options</i></Link>}
                  </button>
                </h5>
              </div>
              <div className="desc"><h1>Wolf Plan</h1>
              <h3> 1 year</h3>
                <h5>
                  <ul className="unOrdered  ">
                    <li className="li">For $99.99  get all access to our <br /> 24 hour park for 365 days.</li><hr className="hr"/>
                    <li className="li">Add 50% off all cafe purchases <br />for an additional $49.99</li><hr className="hr"/>
                    <li className="li">Add 50% off all restaurant items, <br />alcohol not included, for an additional $79.99</li><hr className="hr"/>
                    <li className="li">Add 50% offall pet store purchases <br />for an additional $79.99</li>
                  </ul>
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
                        ><i>Please login <br />
                            to view<br />
                            purchase
                      options</i></Link>}
                  </button>
                </h5></div>
            </div>
            <div className="btnHolder">
              {/* <button className="PurchaseOptionsBtn">
                {
                  localStorage.getItem("dognasium_user")
                    ?
                    <Link className="navbar__link"
                      to="/plans/create"
                    >View Purchase options</Link>
                    :
                    <Link className="navbar__link"
                      to="/Login"
                    ><i>Please login <br />
                        to view<br />
                        purchase
                      options</i></Link>}
              </button> */}
            </div>
          </section>


          <section className="homePageThree">
            <button className="learnMoreBtn">
              {
                localStorage.getItem("dognasium_user")
                  ?
                  <Link className="navbar__link"
                    to="/plans/create"

                  >Select a plan</Link>

                  :
                  <Link
                    // onClick={  window.alert("You must Login to make Purchases")}
                    className="navbar__link"
                    to="/Login"

                  >Learn More</Link>


              }
              {/* <Link className="navbar__link"
                to="/Login"
              >Learn<br />More</Link> */}
            </button>
            <div className="copyFlex">
              <div>
                <h4 className="copyR">Ⓒ<i>Coffeyright 2020</i></h4>
                </div>
                <span id="doglogo">
                  <a href='#middle'>
                    <em><h6>To top ➤<span role="img">🐶</span></h6> </em>
                     </a></span><div className="fbvect"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}