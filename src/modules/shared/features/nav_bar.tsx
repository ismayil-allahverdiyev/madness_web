import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

export function NavBar() {
    return <div className="w-full flex flex-row justify-between items-center px-8 py-4 absolute top-0">
        <h1 className="text-white z-10 font-medium text-2xl">
            MFC
        </h1>
        <ul className="flex flex-row">
            <Link className="text-white px-2 font-medium" to={"/"}>
                Home
            </Link>
            <Link className="text-white px-2 font-medium" to={"/calculation"}>
                Calculations
            </Link>
            <Link className="text-white px-2 font-medium" to={"/blog"}>
                Blog
            </Link>
            <FaBell onClick={() => { }} className="hover:cursor-pointer size-6 text-white ml-4"></FaBell>
        </ul>
    </div>;
}