import MovementComponent from "../components/movement_component"
import { MovementInfoComponent } from "../../shared/components/movement_info_component"
import { WorkoutPlan } from "../store/workout-context"

export default function WorkoutPlanFeature(props: WorkoutPlan) {
    return <div className=" text-text-black ml-6">
        <div className="flex lg:w-[450px] lg:h-[550px] w-[350px] h-[500px] flex-col flex-shrink-0 mx-2 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center lg:mx-3 mx-1 mt-3">
                <a href={props.href} target="blank" className="pointer-events-none">
                    <img src={props.bodyImage} alt="" className="lg:scale-100 scale-90" />
                </a>
                <p className="w-2/3 pl-2 font-semibold lg:text-2xl text-xl">
                    {props.title}
                </p>
            </div>
            <div className="flex ml-auto w-1/3 h-0.5 my-2 bg-gray-300 content-end" />
            {props.movements.map((movement, index) => <MovementComponent key={index} {...movement} />)}
            <MovementInfoComponent message={props.message} />
        </div>
    </div>
}