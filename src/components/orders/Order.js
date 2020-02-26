import React, { useContext } from "react";
import { OrderContext } from "./OrderProvider";
import{ OrderOptionContext} from "../orderOptions/OrderOptionProvider"
import OrderOptions from "../orderOptions/OrderOptions"
import {UserContext} from "../auth/UserProvider"
import{TotalContext} from "../total/TotalProvider"
// import {PlanContext} from "../plans/PlanProvider"
// import {OptionContext} from "../options/OptionProvider"
// import Plan from "../plans/Plan";



export default ({ order, history, chosenOption, total}) => {
  // const { releaseOrderOption, , addOrderOption, } = useContext(OrderOptionContext)
    const {  releaseOrder, updateOrders, } = useContext(OrderContext)
    // const {  options } = useContext(OptionContext);
    const { orderOptions } = useContext(OrderOptionContext);
    const { users } = useContext(UserContext)
    // const {plans } = useContext(PlanContext)
    const {totals } = useContext(TotalContext)

    console.log(localStorage.getItem('dognasium_user'))
    return( 
    <section className="order container">
        <h3 className="order__name">
    <div className="order_name">
      Congratulations &nbsp;
      {users.map(u=>{
        if(u.userId === localStorage.getItem('dognasium_user'))
            return u.userN
          })}
      {/* {localStorage.getItem('dognasium_user')} */}
      ,<p> You have chosen the &nbsp;{order.orderType}</p>
      </div><hr className="hr"/>
           <div className="order_name">Plan creation date: {new Date(order.dateTime).toLocaleDateString('en-US')}</div>
           <div className="order_name">your plan will last for: {order.length}</div>
           <div className="order_name">the {order.orderType} costs: ${order.price}</div><hr className="hr"/>

            {orderOptions.map(orderOption => {
              // console.log(orderOption.price + order.total)
              // console.log(orderOption.price)
              
    return <OrderOptions chosenOption={chosenOption} key={orderOption.id} option={orderOption} key={orderOption.price} />
            })}
            
           <div className="order_name">You chose to donate: ${order.donate}</div>
          <div className="order_name">You plan total comes to:$ 
          {totals.map(total=>{
            return total.total
          })}
           {/* {order.total} */}
            </div>
       
          {/* <div className="order_name">You total with options comes to:$

        {orderOptions.map(orderOption => { 
       
          if(options[0].id === orderOption.optionId){
              return options[0].price + order.total 
            } else if (options[1].id === orderOption.optionId){
              return  options[1].price + order.total
            }else if(options[2].id === orderOption.optionId){
              return options[2].price + order.total
            }
        
            })} 
          

          
          </div> */}
           <button className="btn--edit" onClick={() => {updateOrders(order)
          //  .then(()=>{updateOrderOptions(orderOptions)})
           .then(()=>{
        history.push(`/orders/editOrders/${order.id}`)
      });
  
      }}>edit</button>
     
      <button className="btn--delete"
      onClick={() => { 
      //  console.log(totals)
              // releaseOrderOption(chosenOption)
      
       
        releaseOrder(order).then(() => {
          //  releaseOrderOption  (orderOptions)
          
          history.push("/orders");
        });
      }}>delete</button>
         
         
           
        </h3>
       
    </section>)}

