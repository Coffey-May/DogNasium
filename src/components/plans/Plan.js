
import React, { useContext } from "react"
import {PlanContext } from "./PlanProvider";

export default ({ plan, history }) => {
    const { releasePlan } = useContext(PlanContext)
    return(
    <section className="plan">
        <h3 className="plan__name">
           <div className="plan_name">{plan.planName}</div>
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

