import { useContext } from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GeneralContext } from "../store/general-context";

export function NavBar() {

    const { isAnouncementsOpen, openCloseAnouncements, anouncements } = useContext(GeneralContext);

    return <div className="w-full flex flex-row justify-between items-center px-8 py-4 absolute top-0 z-10">
        <h1 className="text-white z-10 font-medium text-2xl">
            MFC
        </h1>
        <ul className="flex flex-row">
            <Link className="text-white px-2 font-medium" to={"/"}>
                Anasayfa
            </Link>
            <Link className="text-white px-2 font-medium" to={"/calculation"}>
                Hesaplama
            </Link>
            <Link className="text-white px-2 font-medium" to={"/blog"}>
                Blog
            </Link>
            <FaBell onClick={() => { openCloseAnouncements() }} className="hover:cursor-pointer size-6 text-white ml-4"></FaBell>
        </ul>
        <div className={`${isAnouncementsOpen ? "" : "hidden"} 2xl:w-[20%] xl:w-[30%] lg:w-[40%] md:w-[50%] sm:w-[60%] w-[70%] h-60 bg-white absolute right-8 top-16 overflow-x-auto no-scrollbar rounded-md`}>
            {anouncements.map((anouncement, index) => {
                return <div key={index} className="flex flex-col px-4 py-2">
                    <div className="flex items-end">
                        <p className=" font-bold flex-grow text-lg">
                            {anouncement.title}
                        </p>
                        <h3 className="text-gray-500">
                            {anouncement.date}
                        </h3>
                    </div>
                    <p className="text-gray-800 text-md">
                        {anouncement.message}
                    </p>
                </div>
            })}
        </div>
    </div>;
}