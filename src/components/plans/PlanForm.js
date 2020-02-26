import React, { useContext, useState } from 'react';
import { OptionContext } from "../options/OptionProvider"
import { OrderOptionContext } from "../orderOptions/OrderOptionProvider"
import { OrderContext } from "../orders/OrderProvider"
import {TotalContext} from "../total/TotalProvider"
import Option from "../options/Option"

export default ({ onePlan, history, match }) => {

  const {  addTotal } = useContext(TotalContext)
  const { options } = useContext(OptionContext)
  const { addOrder, getOrders, updateOrders } = useContext(OrderContext);
  const { addOrderOption, updateOrderOptions } = useContext(OrderOptionContext);
  // const [total,setTotal] = useState({});
  const [option] = useState({});
  const [OrderOption, setOrderOption] = useState([]);
  const [order, setOrder] = useState({});
  // const [plan, setPlan] = useState({})
  const editMode = match.params.hasOwnProperty("orderId")

  const cartTotal = () => {
    console.log()
    if (parseFloat(onePlan.price) && parseFloat(order.donate) && parseFloat()) {
      return parseFloat(onePlan.price) + parseFloat(order.donate) + parseFloat()
    } else if (parseFloat(onePlan.price) && parseFloat(order.donate)) {
      return parseFloat(onePlan.price) + parseFloat(order.donate)
    } else (parseFloat(onePlan.price))
    return parseFloat(onePlan.price)

  }


  const theChosenOption = (ev) => {
    const chosenId = ev.target.value
    if (ev === chosenId)
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
    } else if (ev.target.checked === false) {
      const oldIds = OrderOption.slice()
      const chosenId = oldIds.findIndex(() => {
        return theChosenOption(ev)
      })
      oldIds.splice(chosenId, 1)
      setOrderOption(oldIds)
    }
  }

  const checked = () => {

    return options.map((o) => {
      console.log(o.id, "o.id")
      console.log(OrderOption.option.id, "OO.id")
      if (o.id === OrderOption.option.id) {
        return true
      } else {
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

  const constructNewOrder = () => {

    // if (editMode) {
    //   updateOrders({

    //     orderType: onePlan.planName,
    //     length: onePlan.length,
    //     price: onePlan.price,
    //     donate: order.donate,
    //     option: option.optionType,
    //     dateTime: Date.now(),
    //     userId: parseInt(localStorage.getItem('dognasium_user')),
    //     total: cartTotal()

    //   })

    //     .then((response) => {

    //       let newObjectArray = OrderOption.map(o => {

    //         const optionObject = {
    //           orderId: response.id,
    //           optionId: parseInt(o),
    //         }
    //         return optionObject
    //       })

    //       newObjectArray.map(
    //         obj => {
    //           return updateOrderOptions(obj)
    //         }
    //       )

          // const figureOut = () => {    
          //   if(newObjectArray.length === 0 ){
          //     return cartTotal()
          //   }else if(newObjectArray.length === 1 ){
          //     return  newObjectArray[0].price + cartTotal() 
          //   } else if (newObjectArray.length > 1 && newObjectArray.length < 3){
          //     return newObjectArray[0].price + newObjectArray[1].price + cartTotal()
          //   } 
          //   else if (newObjectArray.length > 2 && newObjectArray.length < 4){
          //     return newObjectArray[0].price + newObjectArray[1].price + newObjectArray[2].price + cartTotal()
          //   }
          //     }
          //   console.log(figureOut())
             
            
          //           addTotal({
          //             orderId: response.id,
          //             total: figureOut() 
                    
          //           })
                  
    //     })
 
        


    //     .then
    //     (() =>
    //       history.push('/orders'));
    // }

    addOrder({
      orderType: onePlan.planName,
      length: onePlan.length,
      price: onePlan.price,
      donate: order.donate,   
      option: option.optionType,
      optionPrice: option.price,
      dateTime: Date.now(),
      userId: parseInt(localStorage.getItem('dognasium_user')),
      total: cartTotal() 
      
 })

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
          //  console.log(o)
          return optionObject
        })


        newObjectArray.map(
          obj => {
            return addOrderOption(obj)

          }
        )
          
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
console.log(figureOut())
 

        addTotal({
          orderId: response.id,
          total: figureOut() 
        
        })
      
    

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
          {/* <div>total:${total.total}</div> */}
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
