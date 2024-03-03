
import BlogContextProvider from "./store/blog-context";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import GeneralContextProvider from "../shared/store/general-context";

export default function BlogPageView() {
    return <GeneralContextProvider>
        <Header />
        <BlogContextProvider>
            <Main />
        </BlogContextProvider>
        <Footer />
    </GeneralContextProvider >;
}