
import React, { useContext, useState, useEffect } from 'react';
import { OptionContext } from "../options/OptionProvider"
import { OrderOptionContext } from "../orderOptions/OrderOptionProvider"
import { OrderContext } from "../orders/OrderProvider"
import Option from "../options/Option"
import {TotalContext} from "../total/TotalProvider"
// import {PlanContext }from "../plans/PlanProvider"
// import { OptionContext } from "./OptionProvider";




export default ({ onePlan, history, match, constructNewOrder }) => {
  // const { plans } = useContext(PlanContext)
  const { options } = useContext(OptionContext)
  const {  updateTotal } = useContext(TotalContext)
  const {  updateOrders, orders, releaseOrder } = useContext(OrderContext);
  const { addOrderOption, orderOptions, releaseOrderOption, updateOrderOptions } = useContext(OrderOptionContext);

  const [option] = useState({});
  const [OrderOption, setOrderOption] = useState([]);
  const [selectedOrderOptions, setSelectedOrderOption] = useState([]);
  const [order, setOrder] = useState({});
  // const [total, setTotal] = useState({});
  // const [plan] = useState({})
  const editMode = match.params.hasOwnProperty("orderId")
  // const donate = useRef("")


  const cartTotal = () => {
    if (parseFloat(order.price) && parseFloat(order.donate) && parseFloat(option.price)) {
      return parseFloat(order.price) && parseFloat(order.donate) && parseFloat(option.price)
    } else if (parseFloat(order.price) && parseFloat(order.donate)) {
      return parseFloat(order.price) + parseFloat(order.donate)
    } else (parseFloat(order.price))
    return parseFloat(order.price)
  }

  const theChosenOption = (ev) => {    
    const chosenId = ev.target.value
   if(ev === chosenId) 
   return chosenId
  };

  const chosenOption = (ev) => {
    if (ev.target.checked === true) {
      const oldIds = OrderOption.slice()
      const chosenId = ev.target.value
      oldIds.push(chosenId)
      setOrderOption(oldIds)
      //what is the id of checkbox that was checked
      //is this id in order options
    } 
    else if (ev.target.checked === false) {
      const oldIds = OrderOption.slice()
      const chosenId = oldIds.findIndex(()=>{
      return  theChosenOption(ev)
      })
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
      // console.log(selectedOptions)
      setSelectedOrderOption(selectedOptions)

  };

  useEffect(
    () => {
      setDefaults();
    },
    [orders]
  );



 const edittedOrder = () =>{
  updateOrders({
    id: parseInt(match.params.planId),
    orderType: order.orderType,
    length: order.length,
    price: order.price,
    donate: order.donate,
    option: option.optionType,
    dateTime: Date.now(),
    userId: parseInt(localStorage.getItem('dognasium_user')),
    total: cartTotal()
  })

// console.log(orders, "hi")
    .then((response) => {
      
      const pricey = (o) => {
        if (parseInt(o) === options[0].id) {
          return options[0].price
        } else if (parseInt(o) === options[1].id) {
          return options[1].price
        } else if (parseInt(o) === options[2].id) {
          return options[2].price
        }
      }

      let newObjectArray = OrderOption.map(o => {

        let x = pricey(o)
        const optionObject = {
       
          orderId: response.id,
          optionId: parseInt(o),
          price: parseFloat(x)
        }
        return optionObject
      })

      newObjectArray.forEach(
        obj => {
          addOrderOption(obj)
        // updateOrderOptions(obj)
          releaseOrderOption(obj)   
          
        }
      )

      console.log(newObjectArray)

      const figureOut = () => {    
        if(newObjectArray.length === 0 ){
          return cartTotal()
        }else if(newObjectArray.length === 1 ){
          return  newObjectArray[0].price + cartTotal() 
        } else if (newObjectArray.length > 1 && newObjectArray.length < 3){
          return newObjectArray[0].price + newObjectArray[1].price + cartTotal()
        } 
        else if (newObjectArray.length > 2 && newObjectArray.length < 4){
          return newObjectArray[0].price + newObjectArray[1].price + newObjectArray[2].price + cartTotal()
        }
          }
        console.log(cartTotal())
         

                updateTotal({
                 id: response.id,
                  orderId: response.id,
                  total:  figureOut() 
                
                })
              
    })

    .then
    (() =>
      history.push('/orders'));
  }


  return (
    <>
         <section className="singlePlanPage">
   
           <h1 className="review">REVIEW ORDER</h1>
        
                
       
      <div className="dogForms container">
        <form className="planForm">

          <h2 className="planForm__title">
          
          </h2>
          {editMode ? "" : ""}
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
            {/* <div>Total:${order}</div> */}
          <button
          
            type="submit"
            onClick={(evt) => { 
            
              evt.preventDefault();
              edittedOrder()            
            }}
            className="btn btn-primary"
          >
            save and review
            {editMode ? '' : ''}
          </button>{' '}
          <button className="btn--delete "
      onClick={() => { 
        // Code to delete animal from database
        releaseOrder(order).then(() => {
          history.push("/plans/create");
        });
      }}>delete</button>
        </form>
      </div>
      </section>
    </>
  );
};
