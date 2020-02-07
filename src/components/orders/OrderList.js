

import React, { useContext } from 'react';
// import { PlanContext } from './PlanProvider';
// import { LocationContext } from '../Location/LocationProvider';
// import { UserContext } from '../auth/UserProvider';
import {OrderContext} from "./OrderProvider"
import Order from './Order';
import './Order.css';

export default (props) => {
	const { orders } = useContext(OrderContext);
	// // const { locations } = useContext(LocationContext);
	// const { users } = useContext(UserContext);

	return (
<>

		<h1 className="orderListHeader">ORDER</h1>
        <button className="addPlanBtn" onClick={() => props.history.push("/orders/create")}>
            View order options
        </button>
		<div className="orders">
			
		{orders.map(order => {
			// const location = locations.find(loc => loc.id === animal.locationId) || {}
			// const user = users.find(use => use.id === task.userId) || {}
    return <Order {...props} key={order.id} order={order}  />
})}
		</div>
		</>
	);
};

