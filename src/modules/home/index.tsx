import { Header } from "./layout/Header";
import Main from "./layout/Main";
import HomePageContextProvider from "./store/home-page-context";
import Footer from "./layout/Footer";

export function HomePageView() {
    return <>
        <HomePageContextProvider>
            <Header />
            <Main />
        </HomePageContextProvider>
        <Footer />
    </>;
}