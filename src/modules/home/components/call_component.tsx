import { LuPhone } from "react-icons/lu";

export default function CallComponent() {
    return <div className="flex items-center pl-8">
        <div className="rounded-full bg-orange-300 p-4">
            <LuPhone size={24} className="text-white" />
        </div>
        <div className="pl-4">
            <p className="text-2xl font-bold">
                Call us
            </p>
            <p className="text-xl">
                +90 535 287 50 39
            </p>
        </div>
    </div>;
}