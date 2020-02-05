import React, { useContext, useState, useEffect, useRef } from 'react';
import { PlanContext } from './PlanProvider';
import { UserContext } from "../auth/UserProvider"


export default (props) => {
  const { addPlan, plans, updatePlan } = useContext(PlanContext);
  const [plan, setPlan] = useState({});
  const planName = useRef("")
  const planCompletion = useRef("")
  const editMode = props.match.params.hasOwnProperty('planId');

  const handleControlledInputChange = (event) => {
    const newPlan = Object.assign({}, plan);
    newPlan[event.target.name] = event.target.value;
    setPlan(newPlan);
  };

  const setDefaults = () => {
    if (editMode) {
      const planId = parseInt(props.match.params.planId);
      const selectedPlan = plans.find((p) => p.id === planId) || {};
      setPlan(selectedPlan);
    }
  };

  useEffect(
    () => {
      setDefaults();
    },
    [plans]
  );

  const constructNewPlan = () => {
    if (editMode) {
      updatePlan({
        id: plan.id,
        userId: plan.userId,
        planName: plan.planName,
        planETA: Date.now()
      }).then(() => props.history.push('/plans'));
    } else {
      addPlan({


        planName: plan.planName,
        planETA: Date.now(),


        userId: parseInt(localStorage.getItem('dognasium_user'))
      }).then(() => props.history.push('/plans'));
    }
  };

  return (
   <>
   <h2 className="planTitle">Choose the plan for you</h2>
   
   <div className="dogForms">
    <form className="planForm">
      <h2 className="planForm__title">
        {editMode ? "" : ""}
      </h2>
      <h3 className="planTypeHeader">Pupper Plan</h3>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Puppy plan, 1 month, Price: $19.99: </label>
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
        <div className="form-group">
          <label htmlFor="name">Add 50% off Pet Store up to $500.00: </label>
          <input
            type="checkbox"
            name="planCompletion"
            ref={planCompletion}
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
          <label htmlFor="name">Add 50% off Cafe up to $100.00: </label>
          <input
            type="checkbox"
            name="planCompletion"
            ref={planCompletion}
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
          <label htmlFor="name">Add 50% Restaurant up to $500.00: </label>
          <input
            type="checkbox"
            name="planCompletion"
            ref={planCompletion}
            required
            autoFocus
            className="form-control"
            proptype="varchar"
            placeholder="Plan Restaurant Discount Option"
            defaultValue={plan.option}
            onChange={handleControlledInputChange}
          />

        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Plan Start Date: </label>
          <input
            type="date"
            name="planStartDate"
            ref={planCompletion}
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
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          constructNewPlan()
        }}
        className="btn btn-primary"
      >

        {editMode ? 'Save Plans' : 'Make Plan'}
      </button>{' '}

    </form>

    

<form className="planForm">
      <h2 className="planForm__title">
        {editMode ? "" : ""}
      </h2>
      <h3 className="planTypeHeader">Doggo Plan</h3>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Doggo plan, 6 months, Price: $59.99: </label>
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
        <div className="form-group">
          <label htmlFor="name">Add 50% off Pet Store up to $3000.00: </label>
          <input
            type="checkbox"
            name="planCompletion"
            ref={planCompletion}
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
          <label htmlFor="name">Add 50% off Cafe up to $500.00: </label>
          <input
            type="checkbox"
            name="planCompletion"
            ref={planCompletion}
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
          <label htmlFor="name">Add 50% Restaurant up to $500.00: </label>
          <input
            type="checkbox"
            name="planCompletion"
            ref={planCompletion}
            required
            autoFocus
            className="form-control"
            proptype="varchar"
            placeholder="Plan Restaurant Discount Option"
            defaultValue={plan.option}
            onChange={handleControlledInputChange}
          />

        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Plan Start Date: </label>
          <input
            type="date"
            name="planCompletion"
            ref={planCompletion}
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
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          constructNewPlan()
        }}
        className="btn btn-primary"
      >

        {editMode ? 'Save Plans' : 'Make Plan'}
      </button>{' '}

    </form>

    <form className="planForm">
      <h2 className="planForm__title">
        {editMode ? "" : ""}
      </h2>
      <h3 className="planTypeHeader">Wolf Plan</h3>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">WOLF PLAN, 1 year, Price: $99.99: </label>
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
        <div className="form-group">
          <label htmlFor="name">Add 50% off Pet Store up to $500.00: </label>
          <input
            type="checkbox"
            name="planCompletion"
            ref={planCompletion}
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
          <label htmlFor="name">Add 50% off Cafe up to $100.00: </label>
          <input
            type="checkbox"
            name="planCompletion"
            ref={planCompletion}
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
          <label htmlFor="name">Add 50% Restaurant up to $500.00: </label>
          <input
            type="checkbox"
            name="planCompletion"
            ref={planCompletion}
            required
            autoFocus
            className="form-control"
            proptype="varchar"
            placeholder="Plan Restaurant Discount Option"
            defaultValue={plan.option}
            onChange={handleControlledInputChange}
          />

        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Plan Start Date: </label>
          <input
            type="date"
            name="planCompletion"
            ref={planCompletion}
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
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          constructNewPlan()
        }}
        className="btn btn-primary"
      >

        {editMode ? 'Save Plans' : 'Make Plan'}
      </button>{' '}

    </form>
    </div>
    </>
  );
};
