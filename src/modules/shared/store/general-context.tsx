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
    date: string;
}

export default function GeneralContextProvider(props: GeneralContextProviderProps) {

    const [isAnouncementsOpen, setIsAnouncementsOpen] = useState(false);

    const openCloseAnouncements = () => {
        setIsAnouncementsOpen((prev) => !prev);
    }

    const anouncements = [
        {
            title: "Ramazan ayı",
            message: "Ramazan boyunca saat 00:00'da kapatacağız!",
            date: "2024-03-11",
        },
        {
            title: "İndirim",
            message: "Sabah aboneliklerinde ve kadınlara yönelik indirimler!",
            date: "2024-01-12",
        },
        {
            title: "Diyetisyen",
            message: "Diyetisyen günümüz her cumartesi 17:00 - 20:00 arasıdır.",
            date: "2023-11-21",
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