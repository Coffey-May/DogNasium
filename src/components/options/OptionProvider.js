import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const OptionContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const OptionProvider = (props) => {
    // locations holds state, setlocations updates state.
    const [options, setOptions] = useState([])

    const getOptions = () => {
        return fetch("http://localhost:8088/options")
            .then(res => res.json())
            .then(setOptions)
    }


    const updateOptions = option => {
        return fetch(`http://localhost:8088/options/${option.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(option)
        })
            .then(getOptions)
    }

    const addOption = option => {
        return fetch("http://localhost:8088/options", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(option)
        })
            .then(getOptions)
    }

    const releaseOption = option => {
        return fetch(`http://localhost:8088/options/${option.id}`, {
            method: "DELETE",
         
        })
            .then(getOptions)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getOptions()
    }, [])

    useEffect(() => {
       
        console.log( options)
    }, [options])

    return (
        <OptionContext.Provider value={{
            options, addOption, releaseOption , updateOptions
        }}>
            {props.children}
        </OptionContext.Provider>
    )
}
// , updateOption