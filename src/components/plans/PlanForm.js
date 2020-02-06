import React, { useContext, useState, useEffect, useRef } from 'react';
import { PlanContext } from './PlanProvider';
import { UserContext } from "../auth/UserProvider"
import { OptionContext } from "./OptionProvider"
import OptionFormList from "./OptionFormList"


export default ({ onePlan }) => {
  const { addPlan, plans, updatePlan } = useContext(PlanContext);
  const { options } = useContext(OptionContext)

  // const { addOption, options, updateOption } = useContext(OptionContext);
  const [plan, setPlan] = useState({});
  const [option, setOption] = useState({});
  const planName = useRef("")
  const planETA = useRef("")
  const planCompletion = useRef("")
  // const option = useRef("")
  // const editMode = props.match.params.hasOwnProperty('planId');

  const handleControlledInputChange = (event) => {
    const newPlan = Object.assign({}, plan);
    newPlan[event.target.name] = event.target.value;
    setPlan(newPlan);
  };

  // const setDefaults = () => {
  //   if (editMode) {
  //     const planId = parseInt(props.match.params.planId);
  //     const selectedPlan = plans.find((p) => p.id === planId) || {};
  //     setPlan(selectedPlan);
  //   }
  // };

  // useEffect(
  //   () => {
  //     setDefaults();
  //   },
  //   [plans]
  // );

  const constructNewPlan = () => {
    // if (editMode) {
    //   updatePlan({
    //     id: plan.id,
    //     userId: plan.userId,
    //     planName: plan.planName,
    //     planETA: Date.now()
    //   }).then(() => props.history.push('/plans'));
    // } else {
    // addPlan({


    //   planName: plan.planName,
    //   planETA: Date.now(),


    //   userId: parseInt(localStorage.getItem('dognasium_user'))
    // }).then(() => props.history.push('/plans'));

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
                <h4 className="optionals">{op.option}</h4>
                <input type="checkbox"></input> </>)
              }
            </div>
            {/* </fieldset>
          <fieldset>
            <div className="form-group">
            
              <input
                type="checkbox"
                name="planCompletion"
                ref={option}
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                placeholder="Plan Pet Store Option"
                defaultValue={plan.option}
                onChange={handleControlledInputChange}
              />

            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Cafe Access{option.option}</label>
              <input
                type="checkbox"
                name="planCompletion"
                ref={option}
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                placeholder="Plan Cafe Discount Option"
                defaultValue={plan.option}
                onChange={handleControlledInputChange}
              />

            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Restaurant Access{option.option} </label>
              <input
                type="checkbox"
                name="planCompletion"
                ref={option}
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                placeholder="Plan Restaurant Discount Option"
                defaultValue={plan.option}
                onChange={handleControlledInputChange}
              />

            </div> */}
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
                ref={planCompletion}
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                placeholder="Donate to Animal Rescue"
                defaultValue={plan.planETA}
                onChange={handleControlledInputChange}
              />
            </div>
          </fieldset>
          <button
            type="submit"
            onClick={(evt) => {

              evt.preventDefault();
              constructNewPlan()
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
