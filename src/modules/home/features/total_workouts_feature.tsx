import { useContext } from "react"
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
        <p className="text-text-black text-2xl font-semibold m-8 2xl:ml-16 xl:ml-14 lg:ml-12 md:ml-10 sm::ml-8 ml-6">
            Temel egzersiz planı
        </p>

        <div className="flex overflow-x-auto w-full no-scrollbar mb-4">
            {workoutPlans.map((workoutPlan, index) => <WorkoutPlanFeature key={index} {...workoutPlan} />)}
        </div>

        <p className="text-text-black lg:text-lg text-md font-semibold mx-2 mb-8 text-center">
            Daha detaylı ve kişiye özel antrenman planı için bizimle <span className="text-orange-500 cursor-pointer" onClick={() => { animateToTheEnd!() }}>iletişime</span> geçebilirsiniz!
        </p>
    </motion.div>
}