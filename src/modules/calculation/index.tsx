import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Header from "./layout/Header";
import CalculationContextProvider from "./store/calculation-context";
import { useState } from "react";

export default function CalculationsPageView() {
    return <>
        <Header />
        <CalculationContextProvider>
            <Main />
        </CalculationContextProvider>
        <Footer />
    </>
}