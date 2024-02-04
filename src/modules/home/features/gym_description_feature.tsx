import CallComponent from "../components/call_component";
import InfoComponent from "../components/info_component";

export default function GymDescription() {
    return <div className="w-[50%]  overflow-hidden">
        <InfoComponent />
        <CallComponent />
    </div>
} 