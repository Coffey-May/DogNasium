import React, { useContext, useState, useEffect } from 'react';
import { OptionContext } from "../options/OptionProvider"
import { OrderOptionContext } from "../orderOptions/OrderOptionProvider"
import { OrderContext } from "../orders/OrderProvider"
import Option from "../options/Option"

export default ({ onePlan, history,match }) => {

  const { options } = useContext(OptionContext)
  const { addOrder, getOrders,updateOrders,orders } = useContext(OrderContext);
  const { addOrderOption, updateOrderOptions } = useContext(OrderOptionContext);

  const [option, setOption] = useState({});
  const [OrderOption, setOrderOption] = useState([]);
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

  const checked = () => {
 
    return  options.map((o)=>{
       console.log(o.id, "o.id")
       console.log(OrderOption.option.id, "OO.id")
     if ( o.id === OrderOption.option.id){
   return true
   }else{
     return false
   }
   })
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
  //     const orderId = parseInt(match.params.orderId);
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
    
    if (editMode) {
      updateOrders({
      orderType: onePlan.planName,
      length: onePlan.length,
      price: onePlan.price,
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
    }

    addOrder({
      orderType: onePlan.planName,
      length: onePlan.length,
      price: onePlan.price,
      donate: order.donate,
      option: option.optionType,
      dateTime: Date.now(),
      userId: parseInt(localStorage.getItem('dognasium_user')),

    })

      .then((response) => {
        // console.log(response, "response")
        // console.log(response.id)
        let newObjectArray = OrderOption.map(o => {

          const optionObject = {
            orderId: response.id,
            optionId: parseInt(o),
          } 
          return optionObject
        })

        newObjectArray.map(
          obj => {
            return addOrderOption(obj)
          }
        )

      })
      .then(() => getOrders())
      .then
      (() =>
        history.push('/orders'));
  };

  return (
    <>
      <div className="dogForms container">
        <form className="planForm">

          <h2 className="planForm__title">
            {editMode ? "" : ""}
          </h2>
          <h3 className="planTypeHeader">{onePlan.planName}</h3>
          <fieldset>
            <div>
              {options.map(option => {
                return <Option chosenOption={chosenOption} checked={checked} key={option.id} option={option} />
              })}
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Donate to Rescue, any amount:{onePlan.donate} </label>
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
                defaultValue={onePlan.donate}
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
        {editMode ? '' : ''}
          </button>{' '}
        </form>
      </div>
    </>
  );
};
