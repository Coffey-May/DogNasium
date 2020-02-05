import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const PlanContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const PlanProvider = (props) => {
    // locations holds state, setlocations updates state.
    const [plans, setPlans] = useState([])

    const getPlans = () => {
        return fetch("http://localhost:8088/plans")
            .then(res => res.json())
            .then(setPlans)
    }


    const updatePlan = plan => {
        return fetch(`http://localhost:8088/plans/${plan.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plan)
        })
            .then(getPlans)
    }

    const addPlan = plan => {
        return fetch("http://localhost:8088/plans", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plan)
        })
            .then(getPlans)
    }

    const releasePlan = plan => {
        return fetch(`http://localhost:8088/plans/${plan.id}`, {
            method: "DELETE",
         
        })
            .then(getPlans)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getPlans()
    }, [])

    useEffect(() => {
        console.log("****  Plan APPLICATION STATE CHANGED  ****")
        console.log( plans)
    }, [plans])

    return (
        <PlanContext.Provider value={{
            plans, addPlan, releasePlan, updatePlan
        }}>
            {props.children}
        </PlanContext.Provider>
    )
}