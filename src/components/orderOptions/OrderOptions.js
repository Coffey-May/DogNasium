import React, { useContext } from "react";
import { OrderOptionContext } from "./OrderOptionProvider";



export default ({ order, history, orderOptions, option }) => {

    const { releaseOrderOption, updateOrderOption, } = useContext(OrderOptionContext)
  console.log(option)
    return (
       
            <h3 className="orderOption__name">
                <div className="order_name">Congratulations, You have chosen the
                {option.optionId} option
                </div>
                {/* <button className="btn--edit" onClick={() => {updateOrders(order).then(()=>{
        history.push(`/orders/editOrders/${order.id}`)});
      }}>edit</button>
      <button className="btn--delete"
      onClick={() => {
        // Code to delete animal from database
        releaseOrder(order).then(() => {
          history.push("/orders");
        });
      }}>delete</button> */}
            </h3>

       )
}

