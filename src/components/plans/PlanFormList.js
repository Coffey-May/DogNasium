import React, { useContext } from "react"
import { PlanContext } from "./PlanProvider"
import PlanForm from "./PlanForm"

export default (props) => {
    const { plans } = useContext(PlanContext)
    return (
        <><div className="planListHeader">PLANS</div>
            <div className="plans">
                {
                    plans.map(pl => <PlanForm {... props} key={pl.id} onePlan={pl} />)

                }
            </div>
            

        </>
    )
}