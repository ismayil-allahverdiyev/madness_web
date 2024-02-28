import HomeManImage from "../../../assets/images/home_man.png"
import GymDescription from "../features/gym_description_feature"
import GymDetailsFeature from "../features/gym_details_feature"
import TotalWorkoutsFeature from "../features/total_workouts_feature"
import WorkoutContextProvider from "../store/workout-context"

export default function Main() {
    return (
        <>
            <div className="flex justify-center py-24">
                <img src={HomeManImage} alt="" className="lg:w-[20rem] lg:h-[33rem] xl:w-[30rem] xl:h-[50rem] w-[10rem] h-[20rem]" />
                <GymDescription />
            </div>
            <GymDetailsFeature />
            <WorkoutContextProvider>
                <TotalWorkoutsFeature />
            </WorkoutContextProvider>
        </>
    )
}