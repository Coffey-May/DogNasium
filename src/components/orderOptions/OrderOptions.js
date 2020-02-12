import React from "react";




export default ({ order, history, orderOptions, option }) => {


    return (
       
            <h3 className="orderOption__name">
                <div className="order_name">Congratulations, You have chosen the &nbsp;
                { option.option.optionType} option, for an additional &nbsp;{option.option.price}
                </div>
           
            </h3>

       )
}

