import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const DogContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const DogProvider = (props) => {
    const [dogss, setDogs] = useState([])

    const getDogs = () => {
        return fetch("http://localhost:8088/dogs?_expand=user")
            .then(res => res.json())
            .then(setDogs)
    }

    const addDog = event => {
        return fetch("http://localhost:8088/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getDogs)
    }


// create function to delete the event
    // const deleteEvent = event => {
    //     return fetch(`http://localhost:8088/events/${event.id}`, {
    //         method: "DELETE"
    //     })
    //         .then(getEvents)
    // }


    // const editEvent = event => {
    //     return fetch(`http://localhost:8088/events/${event.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(event)
    //     })
    //         .then(getEvents)
    // }



    /*
        Load all events when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getDogs()
    }, [])

    useEffect(() => {
        console.log("****  Dog APPLICATION STATE CHANGED  ****")
        // console.log(Events)
    }, [dogs])



    return (
        <DogContext.Provider value={{
            // rememeber to send the deleteEvent for the DELETE
            // need to send the editEvent for the EDIT
            dogss, addDog
        }}>
            {props.children}
        </DogContext.Provider>
    )
}