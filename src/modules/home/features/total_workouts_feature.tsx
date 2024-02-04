import { Fragment, useContext } from "react"
import { WorkoutContext } from "../store/workout-context"
import WorkoutPlanFeature from "./workout_plan_feature"
import { motion } from "framer-motion"
import { GeneralContext } from "../../shared/store/general-context"

const fadeInVariations = {
    initial: {
        opacity: 0,
        x: "2vw",
    },
    animate: {
        opacity: 1,
        x: "0"
    }
}

export default function TotalWorkoutsFeature() {
    const { workoutPlans } = useContext(WorkoutContext);
    const { animateToTheEnd } = useContext(GeneralContext);

    return <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInVariations}
        transition={{ duration: 1 }}
    >
        <p className="text-text-black text-2xl font-semibold m-8 ml-16">
            Basic workout plan
        </p>

        <div className="flex overflow-x-auto w-full no-scrollbar mb-4">
            {workoutPlans.map((workoutPlan, index) => <WorkoutPlanFeature key={index} {...workoutPlan} />)}
        </div>
        <p className="text-text-black text-lg font-semibold mx-2 mb-8 text-center">
            You can <span className="text-orange-500 cursor-pointer" onClick={() => { animateToTheEnd() }}>contact us</span> for more detailed and personalized workout plan!
        </p>
    </motion.div>
}