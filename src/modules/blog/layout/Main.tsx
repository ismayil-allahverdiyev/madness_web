import { useContext } from "react";
import PostFeature from "../features/post_feature";
import { BlogContext } from "../store/blog-context";

export default function Main() {
    var { posts } = useContext(BlogContext);
    return <div className="pt-4">
        {posts.map((post, index) => <PostFeature index={index} {...post} />)}
    </div>
}