import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const OrderOptionContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const OrderOptionProvider = (props) => {
    // locations holds state, setlocations updates state.
    const [orderOptions, setOrderOptions] = useState([])

    const getOrderOptions = () => {
        return fetch("http://localhost:8088/orderOptions?_expand=option")
            .then(res => res.json())
            .then(setOrderOptions)
    }


    const updateOrderOptions = orderOption => {
        return fetch(`http://localhost:8088/orderOptions/${orderOption.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderOption)
        })
            .then(getOrderOptions)
            
    }

    const addOrderOption = orderOption => {
        return fetch("http://localhost:8088/orderOptions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderOption)
        })
            .then(getOrderOptions)
    }

    const releaseOrderOption = orderOption => {
        return fetch(`http://localhost:8088/orderOptions/${orderOption.id}`, {
            method: "DELETE",
         
        })
            .then(getOrderOptions)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getOrderOptions()
    }, [])

    useEffect(() => {
       
      
    }, [orderOptions])

    return (
        <OrderOptionContext.Provider value={{
            orderOptions, addOrderOption, releaseOrderOption , updateOrderOptions
        }}>
            {props.children}
        </OrderOptionContext.Provider>
    )
}
// , updateOption