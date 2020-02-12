// // json-server -p 8088 -w database.json

import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { ParallaxProvider } from 'react-scroll-parallax';
import { UserProvider } from "./auth/UserProvider";
import { PlanProvider } from "./plans/PlanProvider";
import { OrderProvider } from "./orders/OrderProvider";
import { OptionProvider } from "./options/OptionProvider";
import {OrderOptionProvider} from "./orderOptions/OrderOptionProvider"
import PlanList from "./plans/PlanList";
import PlanForm from "./plans/PlanForm";
import Order from "./orders/OrderList";
import HomeList from "./home/HomeList";
import PlanFormList from "./plans/PlanFormList";
import Plan from "./plans/Plan"


// import Parallax from "./Parallax"




export default props => {
    return (
        <>

            {/* <ParallaxProvider> */}
            <OrderOptionProvider>
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
                                exact
                                path="/orders"
                                render={props => <Order {...props} />}
                            />    
                            <Route
                                path="/plans/create"
                                render={props => <PlanFormList {...props} />}
                            />
                            <Route
                                exact
                                path="/orders/editOrders/:planId(\d+)"
                                render={props => <Plan {...props} />}
                            />
                        </OrderProvider>
                    </PlanProvider>
                </OptionProvider>
            </UserProvider>
            
            </OrderOptionProvider>
            {/* </ParallaxProvider> */}
        </>
    );
};


