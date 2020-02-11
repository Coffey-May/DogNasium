import React, { useContext, useState, useEffect, useRef } from 'react';
import { OptionContext } from "../options/OptionProvider"
import { OrderOptionContext } from "../orderOptions/OrderOptionProvider"
import { OrderContext } from "../orders/OrderProvider"
import Option from "../options/Option"


export default ({ onePlan, history }) => {

  // const { addPlan, plans, updatePlan } = useContext(PlanContext);
  const { options } = useContext(OptionContext)
  const { orders, addOrder, updateOrder } = useContext(OrderContext);
  const { addOrderOption, releaseOrderOption } = useContext(OrderOptionContext);
  
  const [option, setOption] = useState({});
  const [OrderOption, setOrderOption] = useState([]);
  const [order, setOrder] = useState({});
  const [plan, setPlan] = useState({})

  const donate = useRef("")

  const chosenOption = (ev) => {
      if (ev.target.checked === true){
        const oldIds = OrderOption.slice()
        const chosenId = ev.target.value
        oldIds.push(chosenId)
        setOrderOption(oldIds)
//what is the id of checkbox that was checked
//is this id in order options
       } else if (ev.target.checked === false){
        const oldIds = OrderOption.slice()
        const chosenId = oldIds.findIndex()
        oldIds.splice(chosenId,1)
        setOrderOption(oldIds)
      }
  }

  // const planCompletion = useRef("")

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
  //   const constructOrderOptions = () => {
  //     addOrderOption({
  //        option: option.id,
  //        order: order.id
  //     })
  //     .then
  //     (() =>
  //      history.push('/orders'));
  //   }

  //  let newOrderOption = {
  //    orderId: "",
  //    optionId:"" 
  //  }

  const constructNewOrder = () => {
    // if (editMode) {
    //   updateOrder({

    //     orderType: onePlan.planName,
    // option: option.option,
    // option: option.option,
    // option: option.option,
    // length: onePlan.length,
    // price: onePlan.price,
    // donate: onePlan.donate,
    // dateTime: Date.now(),
    // userId: parseInt(localStorage.getItem('dognasium_user')),

    //   }).then(() => history.push('/orders'));
    // } else {


    addOrder({
      orderType: onePlan.planName,
      length: onePlan.length,
      price: onePlan.price,
      donate: onePlan.donate,
      option: option.optionType,
      dateTime: Date.now(),
      userId: parseInt(localStorage.getItem('dognasium_user')),

    })
   
    .then((responseTaco) => {
          // console.log(response.id)
         let newObjectArray = OrderOption.map (o => {

            const optionObject = {
            orderId: responseTaco.id,
            optionId: parseInt(o)
           
          }
            return optionObject
          })
        newObjectArray.map(
          obj => {
          return  addOrderOption(obj)
          }
          
          
          ) 
        //map over array in state that contains the selected option IDs
        //create an object for each
        //on that object have an optionID and orderId
        //loop through the resulting array and send each object to the database

        })     
      .then
      (() =>
        history.push('/orders'));

  };

  return (
    <>
      <div className="dogForms container">
        <form className="planForm">

          <h2 className="planForm__title">
            {/* {editMode ? "" : ""} */}
          </h2>
          <h3 className="planTypeHeader">{onePlan.planName}</h3>
          <fieldset>
            <div>
            {options.map(option => {
    return <Option chosenOption={chosenOption} key={option.id} option={option}  />
            })}
              </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Donate to Rescue, any amount:{plan.donate} </label>
              <input
                type="text"
                name="donateToRescue"
                ref={donate}
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                placeholder="Donate"
                defaultValue={plan.donate}
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
