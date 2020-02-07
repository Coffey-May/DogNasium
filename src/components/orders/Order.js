
import React, { useContext } from "react";
// import {PlanContext } from "./PlanProvider";
import { OrderContext } from "./OrderProvider";


export default ({ order, history, option}) => {
    const { releaseOrder } = useContext(OrderContext)
    // const { releaseOption } = useContext(OptionContext)
    return( 
    <section className="order">
        <h3 className="order__name">
           <div className="order_name">{order.orderName}</div>
       {/* <div className="option_petStore">{option.option}</div> */}
       {/* <div className="plan_name">{option.cafe}</div>
           <div className="plan_name">{option.restaurant}</div> */}
           <div className="order_name">{new Date(order.orderETA).toLocaleDateString('en-US')}</div>
           <button className="btn--edit" onClick={() => {
        history.push(`/orders/editOrders/${order.id}`)
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

