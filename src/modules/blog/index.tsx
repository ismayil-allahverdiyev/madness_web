
import BlogContextProvider from "./store/blog-context";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

export default function BlogPageView() {
    return <>
        <Header />
        <BlogContextProvider>
            <Main />
        </BlogContextProvider>
        <Footer />
    </>;
}