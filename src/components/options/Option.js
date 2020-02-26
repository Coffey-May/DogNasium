import React from "react";



export default ({  option, chosenOption, checked }) => {
if(checked === true ){
    return (
        
        <section className="option">

            <h3 className="optionals">{option.optionType}</h3>
            
            <input
                type="checkbox"
                name="optionType"
                // checked
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                placeholder="Option name"
                value={option.id}
                onChange={chosenOption}
            ></input>
        </section>)
}else{
    return (
        <section className="option">

    <h3 className="optionals">Select this option for a 50% discount on all {option.optionType} products. For a price of ${option.price}</h3>
            <input
                type="checkbox"
                name="optionType"
                
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                placeholder="Option name"
                value={option.id}
                onChange={chosenOption}
            ></input>
        </section>) 
}
}





