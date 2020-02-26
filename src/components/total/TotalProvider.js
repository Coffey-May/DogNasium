import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const TotalContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const TotalProvider = (props) => {
    // locations holds state, setlocations updates state.
    const [totals, setTotals] = useState([])

    const getTotals = () => {
        return fetch("http://localhost:8088/totals")
            .then(res => res.json())
            .then(setTotals)
    }


    const updateTotal = total => {
        return fetch(`http://localhost:8088/totals/${total.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(total)
        })
        
            .then(getTotals)
    }

    const addTotal = total => {
        return fetch("http://localhost:8088/totals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(total)
        })
            .then(getTotals)
    }

    const releaseTotal = total => {
        return fetch(`http://localhost:8088/totals/${total.id}`, {
            method: "DELETE",
         
        })
            .then(getTotals)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getTotals()
    }, [])

    useEffect(() => {
        // console.log("****  Plan APPLICATION STATE CHANGED  ****")
        // console.log( plans)
    }, [totals])

    return (
        <TotalContext.Provider value={{
            totals, addTotal, releaseTotal, updateTotal
        }}>
            {props.children}
        </TotalContext.Provider>
    )
}