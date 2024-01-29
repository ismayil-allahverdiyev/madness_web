import { useContext } from "react"
import WorkoutContextProvider, { WorkoutContext } from "../store/workout-context"
import WorkoutPlanFeature from "./workout_plan_feature"


export default function TotalWorkoutsFeature() {
    const { workoutPlans } = useContext(WorkoutContext);
    return <>
        <p className="text-text-black text-2xl font-semibold m-8 ml-16">
            Basic workout plan
        </p>

        <div className="flex overflow-x-auto w-full no-scrollbar mb-4">
            {workoutPlans.map((workoutPlan) => WorkoutPlanFeature({ ...workoutPlan }))}
        </div>
        <p className="text-text-black text-lg font-semibold mx-2 mb-8 text-center">
            You can <span className="text-orange-500" onClick={() => { }}>contact us</span> for more detailed and personalized workout plan!
        </p>
    </>
}