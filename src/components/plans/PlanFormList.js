import React, { useContext } from "react"
import { PlanContext } from "./PlanProvider"
import PlanForm from "./PlanForm"

export default () => {
    const { plans } = useContext(PlanContext)
    return (
        <>
            <div className="plans">
                {
                    plans.map(pl => <PlanForm key={pl.id} onePlan={pl} />)

                }
            </div>

        </>
    )
}