import { LuPhone } from "react-icons/lu";

export default function CallComponent() {
    return <div className="flex items-center pl-8">
        <div className="rounded-full bg-orange-300 lg:p-4 md:p-3 p-2">
            <LuPhone size={24} className="text-white lg:scale-100 md:scale-75 scale-50" />
        </div>
        <div className="pl-4">
            <p className="font-bold lg:text-2xl md:text-xl text-lg">
                Call us
            </p>
            <a href="tel:+905433790329" className="lg:text-xl md:text-lg sm:text-base text-sm">
                +90 543 379 03 29
            </a>
        </div>
    </div>;
}