import { createContext } from "react";

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