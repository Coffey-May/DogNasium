import React, { useContext } from "react";
import { OrderContext } from "./OrderProvider";
import{ OrderOptionContext} from "../orderOptions/OrderOptionProvider"
import OrderOptions from "../orderOptions/OrderOptions"
// import {OptionContext} from "../options/OptionProvider"



export default ({ order, history, chosenOption}) => {
  // const { releaseOrderOption, updateOrderOption, addOrderOption, } = useContext(OrderOptionContext)
    const { releaseOrder, updateOrders, } = useContext(OrderContext)
    // const { addOption, releaseOption, options } = useContext(OptionContext);
    const { orderOptions } = useContext(OrderOptionContext);

   
    return( 
    <section className="order container">
        <h3 className="order__name">
           <div className="order_name">Congratulations, You have chosen the{order.orderType}</div>
           <div className="order_name">Plan creation date: {new Date(order.dateTime).toLocaleDateString('en-US')}</div>
           <div className="order_name">your plan will last for: {order.length}</div>
           <div className="order_name">the {order.orderType} costs: ${order.price}</div>

      
            {orderOptions.map(orderOption => {
    return <OrderOptions chosenOption={chosenOption} key={orderOption.id} option={orderOption}  />
            })}
             
           <div className="option_petStore">You chose to donate ${order.donate}</div>
          <div className="option_petStore">You total comes to:${order.total }</div>
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

