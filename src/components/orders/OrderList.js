

import React, { useContext } from 'react';
// import { PlanContext } from './PlanProvider';
// import { LocationContext } from '../Location/LocationProvider';
// import { UserContext } from '../auth/UserProvider';
import {OrderContext} from "./OrderProvider"
import Order from './Order';

import './Order.css';
// import { PlanContext } from '../plans/PlanProvider';

export default (props) => {
	const { orders } = useContext(OrderContext);
	// cont{plans} = useContext(PlanContext)
	// // const { locations } = useContext(LocationContext);
	// const { users } = useContext(UserContext);

	return (
<>
<div className="backGroundOrderList">
<div className="orderList container">
		<h1 className="orderListHeader">ORDER</h1>
        <button className="addPlanBtn" onClick={() => props.history.push("/plans/create")}>
            View order options
        </button>
		<div className="orders">
			
		{orders.map(order => {
    return <Order {...props}  key={order.id} order={order}  />
})}
		</div>
        </div>
		</div>
		</>
	);
};

