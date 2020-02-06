

import React, { useContext } from 'react';
import { PlanContext } from './PlanProvider';
// import { LocationContext } from '../Location/LocationProvider';
// import { UserContext } from '../auth/UserProvider';
import Plan from './Plan';
import './Plan.css';

export default (props) => {
	const { plans } = useContext(PlanContext);
	// // const { locations } = useContext(LocationContext);
	// const { users } = useContext(UserContext);

	return (
<>

		<h1 className="planListHeader"> PLANS</h1>
        <button className="addPlanBtn" onClick={() => props.history.push("/plans/create")}>
            View plan options
        </button>
		<div className="plans">
			
		{plans.map(plan => {
			// const location = locations.find(loc => loc.id === animal.locationId) || {}
			// const user = users.find(use => use.id === task.userId) || {}
    return <Plan {...props} key={plan.id} plan={plan}  />
})}
		</div>
		</>
	);
};

