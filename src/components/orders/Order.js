
import React, { useContext } from "react";
// import {PlanContext } from "./PlanProvider";
import { OrderContext } from "./OrderProvider";
import {OptionContext} from "../options/OptionProvider"


export default ({ order, history, option,}) => {
    const { releaseOrder, updateOrders, } = useContext(OrderContext)
    const { releaseOption, updateOptions, } = useContext(OptionContext)
    // const { releaseOption } = useContext(OptionContext)
    return( 
    <section className="order">
        <h3 className="order__name">
           <div className="order_name">Congratulations, You have chosen the{order.orderType}</div>
           <div className="order_name">Plan creation date: {new Date(order.dateTime).toLocaleDateString('en-US')}</div>
           <div className="order_name">your plan will last for {order.length}</div>
           <div className="order_name">the {order.orderType} costs ${order.price}</div>
    {/* <div className="option_cafe">cafe discount{option.optionType}</div> */}
           {/* <div className="option_restaurant">restaurant discount{option.optionType}</div> */}
           {/* <div className="option_petStore">Pet store discount{option.optionType}</div> */}
    <div className="option_petStore">You chose to donate{order.donate}</div>

           <button className="btn--edit" onClick={() => {updateOrders(order).then(()=>{
        history.push(`/orders/editOrders/${order.id}`)});
      }}>edit</button>
      <button className="btn--delete"
      onClick={() => {
        // Code to delete animal from database
        releaseOrder(order).then(() => {
          history.push("/orders");
        });
      }}>delete</button>
         
           
           
        </h3>
       
    </section>)}

