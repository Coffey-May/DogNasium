// // json-server -p 8088 -w database.json

import React from "react";
import { Route } from "react-router-dom";
// import { ParallaxProvider } from 'react-scroll-parallax';
import { UserProvider } from "./auth/UserProvider";
import { PlanProvider } from "./plans/PlanProvider";
import { OrderProvider } from "./orders/OrderProvider";
import { OptionProvider } from "./plans/OptionProvider";
import PlanList from "./plans/PlanList";
import PlanForm from "./plans/PlanForm";
import Order from "./orders/OrderList";
import HomeList from "./home/HomeList";
import PlanFormList from "./plans/PlanFormList";

// import Parallax from "./Parallax"




export default props => {
    return (
        <>

            {/* <ParallaxProvider> */}
            <UserProvider>
                <OptionProvider>
                    <PlanProvider>
                        <OrderProvider>

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
                                render={props => <PlanFormList {...props} />}
                            />
                            <Route
                                path="/orders"
                                render={props => <Order {...props} />}
                            />
                            
                            <Route
                                exact
                                path="/plans/editPlans/:planId(\d+)"
                                render={props => <PlanForm {...props} />}
                            />
                        </OrderProvider>
                    </PlanProvider>
                </OptionProvider>
            </UserProvider>
            {/* </ParallaxProvider> */}
        </>
    );
};


