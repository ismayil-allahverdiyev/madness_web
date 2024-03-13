import { createContext } from "react";
import ChestDay from "../../../assets/icons/chest-day.svg"
import ArmDay from "../../../assets/icons/arm-day.svg"
import BackDay from "../../../assets/icons/back-day.svg"
import LegDay from "../../../assets/icons/leg-day.svg"
import ShoulderDay from "../../../assets/icons/shoulder-day.svg"
import BenchPress from "../../../assets/icons/bench-press.svg"
import PushUps from "../../../assets/icons/push-ups.svg"
import DumbbellPress from "../../../assets/icons/dumbbell-press.svg"
import ChestFly from "../../../assets/icons/chest-fly.svg"
import PullUps from "../../../assets/icons/pull-ups.svg"
import DumbbellRows from "../../../assets/icons/dumbell-rows.svg"
import RowingMachine from "../../../assets/icons/rowing-machine.svg"
import LatPulldown from "../../../assets/icons/lat-pulldown.svg"
import BicepsCurl from "../../../assets/icons/biceps-curls.svg"
import ConcentrationCurls from "../../../assets/icons/concentration-curls.svg"
import BarbelCurls from "../../../assets/icons/barbell-curls.svg"
import CablePushdown from "../../../assets/icons/cable-pushdown.svg"
import OverheadTricepsExt from "../../../assets/icons/triceps-extension.svg"
import ShoulderPress from "../../../assets/icons/shoulder-press.svg"
import FrontRaise from "../../../assets/icons/front-raise.svg"
import LateralRaise from "../../../assets/icons/lateral-raise.svg"
import Squats from "../../../assets/icons/squats.svg"
import CalfRaises from "../../../assets/icons/calf-raises.svg"
import LegPress from "../../../assets/icons/leg-press.svg"
import LegExtension from "../../../assets/icons/leg-extension.svg"



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

export default function WorkoutContextProvider({ children }: any) {

    var workoutPlans = [
        {
            title: "Göğüs egzersizi hareketleri",
            bodyImage: ChestDay,
            href: "https://icons8.com/icon/12973/chest",
            movements: [
                {
                    image: BenchPress,
                    description: "Bench press",
                    reps: "4x10",
                    href: "https://icons8.com/icon/FDI4JxAMODWm/bench-press",
                },
                {
                    image: PushUps,
                    description: "Push ups",
                    reps: "3x10",
                    href: "https://icons8.com/icon/0DmH6dXqUej1/pushups",
                },
                {
                    image: DumbbellPress,
                    description: "Dumbbell press",
                    reps: "4x15",
                    href: "https://icons8.com/icon/13390/fitness",
                },
                {
                    image: ChestFly,
                    description: "Chest fly",
                    reps: "4x15",
                    href: "https://icons8.com/icon/p1dGDXp6LCpk/gym",
                },
            ],
            message: "Büyük göğüs kazanımları için pektoralis majör kasının üç başını da çalıştıran ve göğsü orta hat boyunca çalıştıran göğüs egzersizlerini seçmeniz gerekir."
        },
        {
            title: "Sırt antrenmanı hareketleri",
            bodyImage: BackDay,
            href: "https://icons8.com/icon/12979/bodybuilder",
            movements: [
                {
                    image: PullUps,
                    description: "Pull ups",
                    reps: "4x6",
                    href: "https://icons8.com/icon/16938/pullups",
                },
                {
                    image: DumbbellRows,
                    description: "Dumbbell rows",
                    reps: "4x10",
                    href: "https://icons8.com/icon/13388/workout",
                },
                {
                    image: RowingMachine,
                    description: "Rowing machine",
                    reps: "4x15",
                    href: "https://icons8.com/icon/36083/rowing-machine",
                },
                {
                    image: LatPulldown,
                    description: "Lat pulldown",
                    reps: "4x15",
                    href: "",
                },
            ],
            message: "Sırt egzersizlerini haftalık rutininize dahil etmek dengeyi sağlayacak, duruşunuzu iyileştirecek ve yaralanmaları önleyecektir."
        },
        {
            title: "Kol egzersiz hareketleri",
            bodyImage: ArmDay,
            href: "https://icons8.com/icon/60488/biceps",
            movements: [
                {
                    image: BicepsCurl,
                    description: "Biceps curl",
                    reps: "4x15",
                    href: "https://icons8.com/icon/13384/curls-with-dumbbells",
                },
                {
                    image: ConcentrationCurls,
                    description: "Concentration curls",
                    reps: "3x10",
                    href: "https://icons8.com/icon/myCvamgBYvkD/bicep",
                },
                {
                    image: BarbelCurls,
                    description: "Barbel curls",
                    reps: "3x10",
                    href: "https://icons8.com/icon/sqombQqHVyip/barbell",
                },
                {
                    image: CablePushdown,
                    description: "Cable pushdown",
                    reps: "4x15",
                    href: "https://icons8.com/icon/zx3iAUBSrWaG/triceps",
                },
                {
                    image: OverheadTricepsExt,
                    description: "Overhead triceps ext.",
                    reps: "4x10",
                    href: "https://icons8.com/icon/iw32dFwd805y/barbell",
                },
            ],
            message: "Triceps kolları daha büyük gösterirken biceps daha karizmaya durur!"
        },
        {
            title: "Omuz egzersiz hareketleri",
            bodyImage: ShoulderDay,
            href: "https://icons8.com/icon/16923/shoulders",
            movements: [
                {
                    image: ShoulderPress,
                    description: "Shoulder press",
                    reps: "4x10",
                    href: "https://icons8.com/icon/A3N2NmhOdfDS/workout",
                },
                {
                    image: LateralRaise,
                    description: "Lateral Raise",
                    reps: "3x10",
                    href: "https://icons8.com/icon/sG37dpH3KoS6/workout",
                },
                {
                    image: PushUps,
                    description: "Push ups",
                    reps: "4x15",
                    href: "https://icons8.com/icon/0DmH6dXqUej1/pushups",
                },
                {
                    image: FrontRaise,
                    description: "Front raise",
                    reps: "4x15",
                    href: "https://icons8.com/icon/4kW7Yg2Uoq70/workout",
                },
            ],
            message: "Yeni gelenlerin çoğu en çok omuzlarını yaralar. Yani dikkatli ol!"
        },
        {
            title: "Bacak egzersiz hareketleri",
            bodyImage: LegDay,
            href: "https://icons8.com/icon/16900/leg",
            movements: [
                {
                    image: Squats,
                    description: "Squats",
                    reps: "4x10",
                    href: "https://icons8.com/icon/16962/squats",
                },
                {
                    image: CalfRaises,
                    description: "Calf raises",
                    reps: "4x20",
                    href: "https://icons8.com/icon/60489/calves",
                },
                {
                    image: LegPress,
                    description: "Leg press",
                    reps: "4x10",
                    href: "https://icons8.com/icon/HWFf22gwkjw2/leg-press",
                },
                {
                    image: LegExtension,
                    description: "Leg extension",
                    reps: "4x15",
                    href: "https://icons8.com/icon/hGdi4KxxFCOU/leg-press",
                }
            ],
            message: "Asla bir bacak gününü atlamayın!"
        },
    ]

    return <WorkoutContext.Provider value={{
        workoutPlans: workoutPlans,
    }}>
        {children}
    </WorkoutContext.Provider>
}