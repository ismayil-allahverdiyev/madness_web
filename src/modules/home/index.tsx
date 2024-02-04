import { Header } from "./layout/Header";
import Main from "./layout/Main";
import HomePageContextProvider from "./store/home-page-context";
import Footer from "./layout/Footer";
import { useRef } from "react";
import GeneralContextProvider from "../shared/store/general-context";

export function HomePageView() {

    const ref = useRef<HTMLDivElement>(null);

    function scrollToTheEnd() {
        console.log("scrolling to the end");
        if (ref.current) {
            const offsetBottom = ref.current.offsetTop + ref.current.offsetHeight;
            window.scrollTo({ top: offsetBottom, behavior: "smooth" });
        }
        console.log(ref.current)
        console.log("scrolling to the end finished");
    }

    return <GeneralContextProvider animateToTheEnd={scrollToTheEnd}>
        <div ref={ref} className="overflow-hidden">
            <HomePageContextProvider>
                <Header />
                <Main />
                <Footer />
            </HomePageContextProvider>
        </div>
    </GeneralContextProvider >;
}