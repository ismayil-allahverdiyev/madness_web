import GenderFeature from "../features/gender_feature";
import MeasurementsFeature from "../features/measurements_feature";
import ResultsFeature from "../features/results_feature";

export default function Main() {
    return <div className="flex flex-col justify-center items-center text-text-black">
        <GenderFeature />
        <MeasurementsFeature />
        <ResultsFeature />
    </div>;
}