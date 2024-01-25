import { FaBell } from "react-icons/fa";

export function NavBar() {
    return <div className="w-full flex flex-row justify-between items-center px-8 py-4 absolute">
        <h1 className="text-white z-10 font-medium text-2xl">
            MFC
        </h1>
        <ul className="flex flex-row">
            <button className="text-white px-2 font-medium">
                Home
            </button>
            <button className="text-white px-2 font-medium">
                Calculations
            </button>
            <button className="text-white px-2 font-medium">
                Blog
            </button>
            <FaBell onClick={() => { }} className="hover:cursor-pointer size-6 text-white ml-4"></FaBell>
        </ul>
    </div>;
}