import { NavBar } from "../../shared/features/nav_bar";

export default function Header() {
    return <div className="flex justify-center items-center w-full h-[45vh] bg-blog-background bg-cover bg-center bg-no-repeat relative">
        <NavBar />
        <p className="text-white font-medium text-6xl">
            Our blog
        </p>
    </div>
}