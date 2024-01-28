import { useContext } from "react";
import { HomePageContext } from "../store/home-page-context";
import SmallDetailsComponent from "../components/small_details_component";

export default function GymDetailsFeature() {
    var { services } = useContext(HomePageContext);

    return <div className="flex relative justify-center items-center">
        <div className="text-gray-300 text-center text-9xl tracking-wide whitespace-pre">
            O u r   s e r v i c e s

        </div>
        <div className="flex w-[60%] absolute justify-around items-center">
            <SmallDetailsComponent {...services.pilates} />
            <SmallDetailsComponent {...services.fitness} />
            <SmallDetailsComponent {...services.dietician} />
            <SmallDetailsComponent {...services.fight} />
        </div>
    </div>;
}