// // json-server -p 8088 -w database.json

import React from "react";
import { Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import { UserProvider } from "./auth/UserProvider";
import { PlanProvider } from "./plans/PlanProvider";
import PlanList from "./plans/PlanList";
import PlanForm from "./plans/PlanForm";
import HomeList from "./home/HomeList"
import PlanFormList from "./plans/PlanFormList"
import {OptionProvider} from "./plans/OptionProvider"

export default props => {
    return (
        <>

<ParallaxProvider>
            <UserProvider>
                <OptionProvider>
                <PlanProvider>
                <Route
                    exact
                    path="/home"
                    render={props => <HomeList {...props} />}
                />
                 <Route
                    exact
                    path="/plans"
                    render={props => <PlanList {...props} />}
                />
                <Route
                    path="/plans/create"
                    render={props => <PlanFormList {...props}  /> 
                
                       }
                    
               />
                <Route
                    exact
                    path="/plans/editPlans/:planId(\d+)"
                    render={props => <PlanForm {...props} />}
                /> 
                </PlanProvider>
                </OptionProvider>
            </UserProvider>
            </ParallaxProvider>
        </>
    );
};


