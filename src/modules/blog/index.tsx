
import { BlogContext } from "./store/blog-context";
import BlogExampleImage from "../../assets/images/blog_example_image.svg"
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

var posts = [
    {
        title: "Some title to test",
        image: BlogExampleImage,
        date: "05/01/2024",
        time: "13:36",
        body: "Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. ",
        category: "Fitness",
    },
    {
        title: "Another title to test",
        image: BlogExampleImage,
        date: "05/01/2024",
        time: "13:36",
        body: "Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. ",
        category: "Fitness",
    },
    {
        title: "Something to test",
        image: BlogExampleImage,
        date: "05/01/2024",
        time: "13:36",
        body: "Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. ",
        category: "Fitness",
    },
    {
        title: "Hmm testing title",
        image: BlogExampleImage,
        date: "05/01/2024",
        time: "13:36",
        body: "Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. ",
        category: "Fitness",
    },
    {
        title: "Some title to test",
        image: BlogExampleImage,
        date: "05/01/2024",
        time: "13:36",
        body: "Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetu adipisicing elit. Quisquam, voluptate. ",
        category: "Fitness",
    },
]

export default function BlogPageView() {
    return <>
        <Header />
        <BlogContext.Provider value={{ posts: posts }}>
            <Main />
        </BlogContext.Provider>
        <Footer />
    </>;
}