import { createContext, useState } from "react";

export const GeneralContext = createContext<GeneralContextType>({
    animateToTheEnd: () => { },
    isAnouncementsOpen: false,
    openCloseAnouncements: () => { },
    anouncements: [],
});

export interface GeneralContextType {
    animateToTheEnd?: () => void;
    isAnouncementsOpen: boolean,
    openCloseAnouncements: () => void;
    anouncements: Anouncement[];
}

export interface GeneralContextProviderProps {
    children: React.ReactNode,
    animateToTheEnd?: () => void;
}

export interface Anouncement {
    title: string;
    message: string;
    date: Date;
}

export default function GeneralContextProvider(props: GeneralContextProviderProps) {

    const [isAnouncementsOpen, setIsAnouncementsOpen] = useState(false);

    const openCloseAnouncements = () => {
        setIsAnouncementsOpen((prev) => !prev);
    }

    const anouncements = [
        {
            title: "New feature",
            message: "We have added a new feature to our website, check it out!",
            date: new Date(2021, 10, 10),
        },
        {
            title: "New feature",
            message: "We have added a new feature to our website, check it out!",
            date: new Date(2021, 10, 10),
        },
        {
            title: "New feature",
            message: "We have added a new feature to our website, check it out!",
            date: new Date(2021, 10, 10),
        },
    ] as Anouncement[];

    return <GeneralContext.Provider value={{
        animateToTheEnd: props.animateToTheEnd,
        isAnouncementsOpen: isAnouncementsOpen,
        openCloseAnouncements: openCloseAnouncements,
        anouncements: anouncements,
    }}>
        {props.children}
    </GeneralContext.Provider>
}