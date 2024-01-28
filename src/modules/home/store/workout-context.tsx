import { createContext } from "react";

export interface Movement {
    image: string;
    description: string;
    reps: string;
    href: string;
}

export interface WorkoutPlan {
    title: string;
    bodyImage: string;
    href: string;
    movements: Movement[];
    message: string;
}

interface WorkoutPlanProps {
    workoutPlans: WorkoutPlan[];
}

export const WorkoutContext = createContext<WorkoutPlanProps>({} as WorkoutPlanProps)