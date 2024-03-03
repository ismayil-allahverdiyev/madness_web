import { NavBar } from "../../shared/features/nav_bar";
import BlogBackground from "../../../assets/images/blog_background.webp";

export default function Header() {
    return <>
        <div className="relative">
            <img src={BlogBackground} className="flex justify-center items-center w-full z-0" />
            <p className="text-white font-medium text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                Our blog
            </p>
        </div>
        <NavBar />

    </>
}