import { createContext } from "react";
import Pilates from "../../../assets/icons/services-pilates.svg";
import Fitness from "../../../assets/icons/services-fitness.svg";
import Dietician from "../../../assets/icons/services-dietician.svg";
import Fight from "../../../assets/icons/services-fight.svg";

interface HomePageProps {
    services: Services;
}

export interface Service {
    title: string;
    image: string;
}

interface Services {
    pilates: Service;
    fitness: Service;
    dietician: Service;
    fight: Service;
}

export const HomePageContext = createContext<HomePageProps>({} as HomePageProps)

export default function HomePageContextProvider({ children }: any) {
    var services = {
        pilates: {
            title: "Pilates (simple, repetitive exercises)",
            image: Pilates,
        },
        fitness: {
            title: "Fitness (being physically fit and healthy)",
            image: Fitness,
        },
        dietician: {
            title: "Dietician (an expert on diet and nutrition)",
            image: Dietician,
        },
        fight: {
            title: "Art of fighting (fighting skills)",
            image: Fight,
        },
    };

    return <HomePageContext.Provider value={{
        services: services,
    }}>
        {children}
    </HomePageContext.Provider>;

}