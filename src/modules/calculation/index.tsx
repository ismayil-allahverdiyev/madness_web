import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Header from "./layout/Header";
import CalculationContextProvider from "./store/calculation-context";
import GeneralContextProvider from "../shared/store/general-context";

export default function CalculationsPageView() {

    return <GeneralContextProvider>
        <Header />
        <CalculationContextProvider>
            <Main />
        </CalculationContextProvider>
        <Footer />
    </GeneralContextProvider >;
}