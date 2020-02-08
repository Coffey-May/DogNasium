
import React, { useContext } from "react";
import {PlanContext } from "./PlanProvider";
// import { OptionContext } from "./OptionProvider";


export default ({ plan, history, option}) => {
    const { releasePlan } = useContext(PlanContext)
    // const { releaseOption } = useContext(OptionContext)
    return( 
    <section className="plan">
        <h3 className="plan__name">
           <div className="plan_name">{plan.planName}</div>
       {/* <div className="option_petStore">{option.option}</div> */}
       {/* <div className="plan_name">{option.cafe}</div>
           <div className="plan_name">{option.restaurant}</div> */}
           <div className="plan_name">{new Date(plan.planETA).toLocaleDateString('en-US')}</div>
           <button className="btn--edit" onClick={() => {
        history.push(`/plans/editPlans/${plan.id}`)
      }}>edit</button>
      <button className="btn--delete"
      onClick={() => {
        // Code to delete animal from database
        releasePlan(plan).then(() => {
          history.push("/plans");
        });
      }}>delete</button>
         
           
           
        </h3>
       
    </section>)}

