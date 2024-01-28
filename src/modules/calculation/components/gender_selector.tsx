import { useContext } from "react";
import { IoMan } from "react-icons/io5";
import { IoWoman } from "react-icons/io5";
import { CalculationContext } from "../store/calculation-context";

interface GenderSelectorProps {
    isMale: boolean;
}

export default function GenderSelector(props: GenderSelectorProps) {
    var { isMale, handleIsMaleState } = useContext(CalculationContext);
    return <div onClick={() => handleIsMaleState(props.isMale)} className={`w-[400px] h-[500px] border shadow-lg ${(props.isMale) ? "hover:shadow-blue-500 hover:text-blue-500" : "hover:shadow-pink-500 hover:text-pink-500"} ${(props.isMale && isMale) ? "shadow-blue-500 text-blue-500" : (!props.isMale && !isMale) ? "shadow-pink-500 text-pink-500" : ""} mx-4 p-16 rounded-3xl text-gray-500 p-auto`}>
        {props.isMale ? <IoMan className="w-[100%] h-[100%]" /> : <IoWoman className="w-[100%] h-[100%]" />}
    </div>
}