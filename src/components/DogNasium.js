import React from "react"
import { Route, Redirect } from "react-router-dom"
import Nav from "./Nav/Nav"
// import "./DogNasium.css"
import Login from "./auth/Login"
import Register from "./auth/Register"
import ApplicationViews from "./ApplicationViews"
import {ParallaxProvider} from 'react-scroll-parallax';


export default () => (
    <>
    <ParallaxProvider>
        {/* <Route render={() => {
            if (localStorage.getItem("dognasium_user")) {
                return (
                    <> */}
                        <Route render={props => <Nav {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                        
                    {/* </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />  */}

        <Route path="/login" render={props => <Login {...props} />} />
         <Route path="/register" render={props => <Register {...props} />} /> 
         </ParallaxProvider>
    </>
)