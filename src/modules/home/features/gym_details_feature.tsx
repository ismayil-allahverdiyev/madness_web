import { useContext } from "react";
import { HomePageContext } from "../store/home-page-context";
import SmallDetailsComponent from "../components/small_details_component";

export default function GymDetailsFeature() {
    var { services } = useContext(HomePageContext);

    return <div className="flex relative justify-center items-center py-32 md:py-0">
        <div className="text-gray-300 text-center xl:text-9xl lg:text-7xl md:text-5xl sm:text-3xl text-3xl tracking-wide whitespace-pre">
            O u r   s e r v i c e s
        </div>
        <div className="grid w-[60%] absolute justify-around items-center md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 ">
            <SmallDetailsComponent {...services.pilates} />
            <SmallDetailsComponent {...services.fitness} />
            <SmallDetailsComponent {...services.dietician} />
            <SmallDetailsComponent {...services.fight} />
        </div>
    </div>;
}