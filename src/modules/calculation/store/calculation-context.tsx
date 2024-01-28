import { createContext } from "react";

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