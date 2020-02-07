import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const OrderContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const OrderProvider = (props) => {
    // locations holds state, setlocations updates state.
    const [orders, setOrders] = useState([])

    const getOrders = () => {
        return fetch("http://localhost:8088/orders")
            .then(res => res.json())
            .then(setOrders)
    }


    const updateOrders = order => {
        return fetch(`http://localhost:8088/orders/${order.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(getOrders)
    }

    const addOrder = order => {
        return fetch("http://localhost:8088/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(getOrders)
    }

    const releaseOrder = order => {
        return fetch(`http://localhost:8088/orders/${order.id}`, {
            method: "DELETE",
         
        })
            .then(getOrders)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getOrders()
    }, [])

    useEffect(() => {
       
       
    }, [orders])

    return (
        <OrderContext.Provider value={{
            orders, addOrder, releaseOrder , updateOrders
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}
