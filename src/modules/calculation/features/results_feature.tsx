import { useContext } from "react";
import { MovementInfoComponent } from "../../shared/components/movement_info_component";
import ResultComponent from "../components/result_component";
import { CalculationContext } from "../store/calculation-context";

export default function ResultsFeature() {
    var { calculateResults, fatLoss, maintainWeight, muscleGain } = useContext(CalculationContext)
    return fatLoss == "0" ? <button onClick={() => calculateResults()} className="bg-orange-500 rounded-lg p-2 px-4 m-2 font-semibold text-white">
        Calculate
    </button> : <div className="flex flex-col 2xl:w-[40%] xl:w-[50%] lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%] justify-center items-center">
        <button onClick={() => calculateResults()} className="bg-orange-500 rounded-lg p-2 px-4 m-2 font-semibold text-white">
            Calculate
        </button>
        <p className="my-4 text-xl font-semibold">
            Results
        </p>
        <div className="flex flex-col justify-start items-start w-[100%] border border-gray-300 text-text-black rounded-lg pb-2 mb-8">
            <p className="xl:text-2xl md:text-xl text-lg py-2 px-8 pb-2 font-bold">
                Caloric intakes for specific goals
            </p>
            <div className="2xl:w-[60%] xl:w-[50%] md:w-[40%] sm:w-[30%] w-[20%] h-0.5 bg-gray-200 ml-auto" />
            <ResultComponent title="Fat Loss" result={fatLoss} />
            <ResultComponent title="Maintenance" result={maintainWeight} />
            <ResultComponent title="Muscle Gain" result={muscleGain} />
            <MovementInfoComponent message="Use the calculator consistently over time to track trends rather than focusing on day-to-day variations. Pay attention to hunger and satiety cues. If you feel consistently fatigued, overly hungry, or lack energy, consider adjusting your caloric intake." />
        </div>
    </div>
}