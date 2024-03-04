import { useContext } from "react";
import { IoMan } from "react-icons/io5";
import { IoWoman } from "react-icons/io5";
import { CalculationContext } from "../store/calculation-context";

interface GenderSelectorProps {
    isMale: boolean;
}

export default function GenderSelector(props: GenderSelectorProps) {
    var { isMale, handleIsMaleState } = useContext(CalculationContext);

    return <div onClick={() => handleIsMaleState(props.isMale)} className={`lg:w-[400px] lg:h-[500px] md:w-[360px] md:h-[450px] sm:w-[280px] sm:h-[350px] w-[180px] h-[220px]  border shadow-lg ${(props.isMale) ? "hover:shadow-blue-500 hover:text-blue-500" : "hover:shadow-pink-500 hover:text-pink-500"} ${(props.isMale && isMale) ? "text-blue-500 shadow-blue-500" : (!props.isMale && !isMale) ? "shadow-pink-500 text-pink-500" : "text-gray-500"} mx-4 lg:p-16 p-12 rounded-3xl p-auto`}>
        {props.isMale ? <IoMan className="w-[100%] h-[100%]" /> : <IoWoman className="w-[100%] h-[100%]" />}
    </div>
}