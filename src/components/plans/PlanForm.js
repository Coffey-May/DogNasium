import React, { useContext, useState, useEffect, useRef } from 'react';
import { Route } from "react-router-dom";
import { PlanContext } from './PlanProvider';
import { UserContext } from "../auth/UserProvider"
import { OptionContext } from "./OptionProvider"
import {OrderContext} from "../orders/OrderProvider"
import Order from "../orders/OrderList"

export default ({ onePlan, props, history }) => {
  const { addPlan, plans, updatePlan } = useContext(PlanContext);
  const { options } = useContext(OptionContext)
  const {orders, addOrder, updateOrder} = useContext(OrderContext);
  // const { addOption, options, updateOption } = useContext(OptionContext);
  const [option, setOption] = useState({});
  const [order, setOrder] = useState({});
  const[plan, setPlan] = useState({})
  const planName = useRef("")
  const planETA = useRef("")
  const donate = useRef("")
  const planCompletion = useRef("")
  
  // const option = useRef("")
  // const editMode = props.match.params.hasOwnProperty('orderId');

  const handleControlledInputChange = (event) => {
    const newOrder = Object.assign({}, order);
    newOrder[event.target.name] = event.target.value;
    setOrder(newOrder);
  };

  // const setDefaults = () => {
  //   if (editMode) {
  //     const orderId = parseInt(props.match.params.orderId);
  //     const selectedOrder = orders.find((o) => o.id === orderId) || {};
  //     setOrder(selectedOrder);
  //   }
  // };

  // useEffect(
  //   () => {
  //     setDefaults();
  //   },
  //   [orders]
  // );

  const constructNewOrder = () => { 
  //   if (editMode) {
  //     updateOrder({
  //       id: order.id,
  //       userId: order.userId,
  //       orderType: order.orderType,
        
  //       orderETA: Date.now()
  //     }).then(() => props.history.push('/orders'));
  //   } else {
  //   console.log(orders)
    addOrder({

      orderType: onePlan.planName,
      option: option.option,
      option: option.option,
      option: option.option,
      length:"30 days",
      price:1,
      option:option.donate,
      dateTime: Date.now(),
     userId: parseInt(localStorage.getItem('dognasium_user'))
    }).then
    (() => props.history.push('/orders'));

  };

  



  return (
    <>


      <div className="dogForms">

        <form className="planForm">
          {/* <h2 className="planTitle">{plan.planName}</h2> */}
          <h2 className="planForm__title">
            {/* {editMode ? "" : ""} */}
          </h2>
          <h3 className="planTypeHeader">{onePlan.planName}</h3>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">{onePlan.planName} </label>
              <input
                type="checkbox"
                name="planName"
                ref={planName}
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                placeholder="Plan name"
                defaultValue={plan.planName}
                onChange={handleControlledInputChange}
              />

            </div>
          </fieldset>
          <fieldset>
            <div>
              {
                options.map(op => <>
                  <h3 className="optionals">{op.option}</h3>
                  <input 
                  type="checkbox"
                  name="optionName"
                  ref={option}
                  required
                  autoFocus
                  className="form-control"
                  proptype="varchar"
                  placeholder="Option name"
                  defaultValue={option.option}
                  onChange={handleControlledInputChange}
                  ></input> </>
                  )
              }
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Plan Start Date:{onePlan.planETA} </label>
              <input
                type="date"
                name="planStartDate"
                ref={planETA}
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                placeholder="Plan Start Date"
                defaultValue={plan.planETA}
                onChange={handleControlledInputChange}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Donate to Rescue, any amount:{} </label>
              <input
                type="text"
                name="donateToRescue"
                ref={donate}
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                placeholder="Donate to Animal Rescue"
                defaultValue={option.donate}
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
        {/* {editMode ? 'Save Plans' : 'Make Plan'} */}
          </button>{' '}
        </form>
      </div>
    </>
  );
};
