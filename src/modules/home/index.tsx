import { Header } from "./layout/Header";
import Main from "./layout/Main";
import { HomePageContext } from "./store/home-page-context";

import Pilates from "../../assets/icons/services-pilates.svg";
import Fitness from "../../assets/icons/services-fitness.svg";
import Dietician from "../../assets/icons/services-dietician.svg";
import Fight from "../../assets/icons/services-fight.svg";
import Footer from "./layout/Footer";

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


export function HomePageView() {
    return <>
        <HomePageContext.Provider value={{
            services: services,
        }}>
            <Header />
            <Main />
        </HomePageContext.Provider>
        <Footer />
    </>;
}