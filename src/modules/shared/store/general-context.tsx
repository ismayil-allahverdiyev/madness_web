import { createContext } from "react";

export const GeneralContext = createContext<GeneralContextType>({
    animateToTheEnd: () => { }
});

export interface GeneralContextType {
    animateToTheEnd: () => void;
}

export interface GeneralContextProviderProps {
    children: React.ReactNode,
    animateToTheEnd: () => void;
}

export default function GeneralContextProvider(props: GeneralContextProviderProps) {
    console.log(props);
    return <GeneralContext.Provider value={{
        animateToTheEnd: props.animateToTheEnd,
    }}>
        {props.children}
    </GeneralContext.Provider>
}