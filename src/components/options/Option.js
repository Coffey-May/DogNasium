import React, { useContext } from "react";
import { OptionContext } from "./OptionProvider";
// import { OptionContext } from "./OptionProvider";


export default ({ plan, history, option, chosenOption }) => {
    const {  options, addOption, releaseOption , updateOptions } = useContext(OptionContext)
    
    // const { releaseOption } = useContext(OptionContext)
    return (
        <section className="option">

            <h3 className="optionals">{option.optionType}</h3>
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





