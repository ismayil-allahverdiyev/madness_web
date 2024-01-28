import HomeManImage from "../../../assets/images/home_man.png"
import GymDescription from "../features/gym_description_feature"
import GymDetailsFeature from "../features/gym_details_feature"
import TotalWorkoutsFeature from "../features/total_workouts_feature"

export default function Main() {
    return (
        <>
            <div className="flex justify-center py-24">
                <img src={HomeManImage} alt="" className="w-[30%]" />
                <GymDescription />
            </div>
            <GymDetailsFeature />
            <TotalWorkoutsFeature />
        </>
    )
}