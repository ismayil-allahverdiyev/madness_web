import MeasurementsInputComponent from "../components/measurements_input_component";
import { useContext } from "react";
import { CalculationContext } from "../store/calculation-context";

export default function MeasurementsFeature() {
    var { age, handleAgeState, height, handleHeightState, weight, handleWeightState } = useContext(CalculationContext);

    return <>
        <p className="my-4 text-xl font-semibold">
            Fill in the fields
        </p>
        <div className="lg:grid lg:grid-cols-2 justify-center space-y-2 2xl:w-[40%] xl:[50%] lg:w-[60%] md:w-[70%] sm:w-[80%] w-[85%]">
            <MeasurementsInputComponent title="Weight in kg" amount={weight} handleAmountState={handleWeightState} />
            <MeasurementsInputComponent title="Height in sm" amount={height} handleAmountState={handleHeightState} />
            <MeasurementsInputComponent title="Your age" amount={age} handleAmountState={handleAgeState} />
        </div>
    </>
}