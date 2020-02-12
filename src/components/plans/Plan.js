
import React, { useContext, useState, useEffect } from 'react';
import { OptionContext } from "../options/OptionProvider"
import { OrderOptionContext } from "../orderOptions/OrderOptionProvider"
import { OrderContext } from "../orders/OrderProvider"
import Option from "../options/Option"
import {PlanContext }from "../plans/PlanProvider"
// import { OptionContext } from "./OptionProvider";




export default ({ onePlan, history, match }) => {
  const { plans } = useContext(PlanContext)
  const { options } = useContext(OptionContext)
  const { addOrder, getOrders,updateOrders,orders, releaseOrder } = useContext(OrderContext);
  const { addOrderOption, updateOrderOptions, orderOptions } = useContext(OrderOptionContext);

  const [option, setOption] = useState({});
  const [OrderOption, setOrderOption] = useState([]);
  const [selectedOrderOptions, setSelectedOrderOption] = useState([]);
  const [order, setOrder] = useState({});
  const [plan, setPlan] = useState({})
  const editMode = match.params.hasOwnProperty("orderId")
  // const donate = useRef("")

  const chosenOption = (ev) => {
    if (ev.target.checked === true) {
      const oldIds = OrderOption.slice()
      const chosenId = ev.target.value
      oldIds.push(chosenId)
      setOrderOption(oldIds)
      //what is the id of checkbox that was checked
      //is this id in order options
    } else if (ev.target.checked === false) {
      const oldIds = OrderOption.slice()
      const chosenId = oldIds.findIndex()
      oldIds.splice(chosenId, 1)
      setOrderOption(oldIds)
    }
  }

const checked = (option) => {
 
let optionChecked = false
    selectedOrderOptions.forEach((op)=>{
      if ( option.id === op.option.id){
        optionChecked = true
        }else{
          optionChecked = false
        }
    })
 return optionChecked
}

  // const planCompletion = useRef("")

  // const option = useRef("")
  // const editMode = props.match.params.hasOwnProperty('orderId');
  const handleControlledInputChange = (event) => {
    const newOrder = Object.assign({}, order);
    newOrder[event.target.name] = event.target.value;
    setOrder(newOrder);
  };
  const setDefaults = () => {

      const orderId = parseInt(match.params.planId);
      const selectedOrder = orders.find((o) => o.id === orderId) || {};
     
      setOrder(selectedOrder);
      const selectedOptions = orderOptions.filter((o) => o.orderId === orderId)
      console.log(selectedOptions)
      setSelectedOrderOption(selectedOptions)
  };

  useEffect(
    () => {
      setDefaults();
    },
    [orders]
  );
 
  const constructNewOrder = () => {
    
      updateOrders({
      orderType: plan.planName,
      length: plan.length,
      price: plan.price,
      donate: order.donate,
      option: option.optionType,
      dateTime: Date.now(),
      userId: parseInt(localStorage.getItem('dognasium_user')),
    })
  
      .then((response) => {

        let newObjectArray = OrderOption.map(o => {

          const optionObject = {
            orderId: response.id,
            optionId: parseInt(o),
          }
          return optionObject
        })

        newObjectArray.map(
          obj => {
            return updateOrderOptions(obj)
          }
        )
      })
  
      .then
      (() =>
        history.push('/orders'));
  };

  return (
    <>
         <section className="singlePlanPage">
   
           <h1>heloo hi howdy thanks fren</h1>
        
                
       
      <div className="dogForms container">
        <form className="planForm">

          <h2 className="planForm__title">
          
          </h2>
          <h3 className="planTypeHeader">{order.orderType}</h3>
          <fieldset>
            <div>
              {options.map(option => {
                return <Option chosenOption={chosenOption} checked={checked(option)} key={option.id} option={option} />
              })}
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Your donation amount: </label>
              <input
                data-type="currency"
                placeholder="$0.00"           
                min="0.00" 
                max="10000.00" 
                step="5.00"
                name="donate"
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                // placeholder="donate"
                defaultValue={order.donate}
                onChange={handleControlledInputChange}
              />
            </div>
          </fieldset>
          <button
            type="submit"
            onClick={(evt) => {
              evt.preventDefault();
              constructNewOrder()
            }}
            className="btn btn-primary"
          >
            save and review
       
          </button>{' '}
          <button className="btn--delete"
      onClick={() => { 
        // Code to delete animal from database
        releaseOrder(order).then(() => {
          history.push("/orders");
        });
      }}>delete</button>
        </form>
      </div>
      </section>
    </>
  );
};

// export default ({ chosenOption, order}) => {
//     const { releasePlan } = useContext(PlanContext)
//     const { orderOptions } = useContext(OrderOptionContext);
//     const { releaseOrder, updateOrders, } = useContext(OrderContext)
//     // const { releaseOption } = useContext(OptionContext)
//     const editableChosenPlan = () => {
    
//       //if plan id === chosen plan && orderOptions === chosenOptions
//       //return div{planName},div{chosenoptions},div{inputted donation}
//     }

//     return( 
//       <div className="singlePlanWrap">
//     <section className="singlePlanPage container">
   
//        <h1>heloo hi howdy</h1>
     
             
//     </section>
//     </div>)}
