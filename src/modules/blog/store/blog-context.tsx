import { createContext } from "react";
import BlogExampleImage from "../../../assets/images/blog_example_image.svg"

interface BlogProps {
    posts: Post[];
}

export interface Post {
    title: string;
    image: string;
    date: string;
    time: string;
    body: string;
    category: string;
}

export const BlogContext = createContext({} as BlogProps)

export default function BlogContextProvider({ children }: any) {

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

    return <BlogContext.Provider value={{ posts: posts }}>
        {children}
    </BlogContext.Provider>
}