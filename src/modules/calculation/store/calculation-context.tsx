import { createContext, useState } from "react";

interface CalculationContextProps {
    isMale: boolean;
    handleIsMaleState: (update: boolean) => void;
    weight: string;
    handleWeightState: (update: string) => void;
    height: string;
    handleHeightState: (update: string) => void;
    age: string;
    handleAgeState: (update: string) => void;
    calculateResults: () => void;
    fatLoss: string;
    maintainWeight: string;
    muscleGain: string;
}

export const CalculationContext = createContext({} as CalculationContextProps)

export default function CalculationContextProvider({ children }: any) {

    var [isMale, setIsMale] = useState(true);
    var [weight, setWeight] = useState("0");
    var [height, setHeight] = useState("0");
    var [age, setAge] = useState("0");

    var [fatLoss, setFatLoss] = useState("0");
    var [maintainWeight, setMaintainWeight] = useState("0");
    var [muscleGain, setMuscleGain] = useState("0");

    const handleIsMaleState = (update: boolean) => {
        setIsMale(update);
    }

    const handleWeightState = (update: string) => {
        setWeight(update);
    }

    const handleHeightState = (update: string) => {
        setHeight(update);
    }

    const handleAgeState = (update: string) => {
        setAge(update);
    }

    const calculateResults = () => {
        var w = Number.parseFloat(weight);
        var h = Number.parseFloat(height);
        var a = Number.parseFloat(age);

        var fatLoss = 0;
        var maintainWeight = 0;
        var muscleGain = 0;

        if (isMale) {
            var bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a)
            var tdee = 1.375 * bmr;

            fatLoss = tdee * 0.8;
            maintainWeight = tdee;
            muscleGain = tdee * 1.05;
        } else {
            var bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.33 * a)
            var tdee = 1.375 * bmr;

            fatLoss = tdee * 0.8;
            maintainWeight = tdee;
            muscleGain = tdee * 1.05;
        }

        fatLoss -= 500;
        maintainWeight += 0;
        muscleGain += 500;

        setFatLoss(fatLoss.toFixed(0).toString());
        setMaintainWeight(maintainWeight.toFixed(0).toString());
        setMuscleGain(muscleGain.toFixed(0).toString());
    }

    return <CalculationContext.Provider value={{
        isMale: isMale,
        handleIsMaleState: handleIsMaleState,
        weight: weight,
        handleWeightState: handleWeightState,
        height: height,
        handleHeightState: handleHeightState,
        age: age,
        handleAgeState: handleAgeState,
        calculateResults: calculateResults,
        fatLoss: fatLoss,
        maintainWeight: maintainWeight,
        muscleGain: muscleGain
    }}>
        {children}
    </CalculationContext.Provider>
}