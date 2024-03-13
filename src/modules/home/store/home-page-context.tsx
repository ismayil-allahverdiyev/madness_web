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
            title: "Pilates (basit, tekrarlayan egzersizler)",
            image: Pilates,
        },
        fitness: {
            title: "Fitness (güçlü ve sağlıklı olmak)",
            image: Fitness,
        },
        dietician: {
            title: "Diyetisyen (beslenme uzmanı)",
            image: Dietician,
        },
        fight: {
            title: "Dövüş sanatı (dövüş becerileri)",
            image: Fight,
        },
    };

    return <HomePageContext.Provider value={{
        services: services,
    }}>
        {children}
    </HomePageContext.Provider>;

}