import React, { useContext } from "react"
import { PlanContext } from "./PlanProvider"
import PlanForm from "./PlanForm"




export default () => {
    const { plans } = useContext(PlanContext)

//     const { addPlan, plans, updatePlan } = useContext(PlanContext);
//   // const { addOption, options, updateOption } = useContext(OptionContext);
//   const [plan, setPlan] = useState({});
//   const [option, setOption] = useState({});
//   const planName = useRef("")
//   const planETA = useRef("")
//   const planCompletion = useRef("")
//   // const option = useRef("")
//   const editMode = props.match.params.hasOwnProperty('planId');

//   const handleControlledInputChange = (event) => {
//     const newPlan = Object.assign({}, plan);
//     newPlan[event.target.name] = event.target.value;
//     setPlan(newPlan);
//   };


//       const setDefaults = () => {
//     if (editMode) {
//       const planId = parseInt(props.match.params.planId);
//       const selectedPlan = plans.find((p) => p.id === planId) || {};
//       setPlan(selectedPlan);
//     }
//   };

//   useEffect(
//     () => {
//       setDefaults();
//     },
//     [plans]
//   );


    // const constructNewPlan = () => {
    //     if (editMode) {
    //       updatePlan({
    //         id: plan.id,
    //         userId: plan.userId,
    //         planName: plan.planName,
    //         planETA: Date.now()
    //       }).then(() => props.history.push('/plans'));
    //     } else {
    //       addPlan({
    
    
    //         planName: plan.planName,
    //         planETA: Date.now(),
    
    
    //         userId: parseInt(localStorage.getItem('dognasium_user'))
    //       }).then(() => props.history.push('/plans'));
        
    //   };

    return ( 
        <>
        <div className="plans">
        {
            plans.map(pl => <PlanForm key={pl.id} onePlan={pl} />)
           
        }
        </div>
        
        </>
    )
}