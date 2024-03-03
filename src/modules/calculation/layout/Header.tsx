import { NavBar } from "../../shared/features/nav_bar";
import CalculationBackground from "../../../assets/images/calculation_background.webp";

export default function Header() {
    return <>
        <div className="relative">
            <img src={CalculationBackground} className="flex justify-center items-center w-full h-[55vh] z-0  object-cover" />
            <p className="text-white font-medium 2xl:text-6xl xl:text-5xl text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
                Calculate your food intake
            </p>
        </div>
        <NavBar />
    </>
}