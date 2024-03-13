import { useContext } from "react";
import { HomePageContext } from "../store/home-page-context";
import SmallDetailsComponent from "../components/small_details_component";

export default function GymDetailsFeature() {
    var { services } = useContext(HomePageContext);

    return <div className="flex relative justify-center items-center py-32 md:py-0">
        <div className="text-gray-300 text-center xl:text-9xl lg:text-7xl md:text-5xl sm:text-3xl text-3xl tracking-wide whitespace-pre">
            H i z m e t l e r i m i z
        </div>
        <div className="grid sm:w-[60%] absolute justify-around items-center md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 gap-4 ">
            <SmallDetailsComponent {...services.pilates} />
            <SmallDetailsComponent {...services.fitness} />
            <SmallDetailsComponent {...services.dietician} />
            <SmallDetailsComponent {...services.fight} />
        </div>
    </div>;
}