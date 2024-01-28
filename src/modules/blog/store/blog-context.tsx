import { createContext } from "react";

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