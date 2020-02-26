import React from "react";




export default ({ option }) => {


    return (
       
            <div className="orderOption__name">
                <div className="order_name"> You have also chosen the &nbsp;
                { option.option.optionType} option, <br/>for an additional: &nbsp;${option.option.price}
                <hr className="hr"/>
                </div>
           
            </div>

       )
}

