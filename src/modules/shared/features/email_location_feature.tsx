import EmailComponent from "../components/footer/email_component";
import LocationComponent from "../components/footer/location_component";

export default function EmailLocationComponent() {
    return <div className="flex flex-col md:w-[55%] w-full">
        <EmailComponent />
        <LocationComponent />
    </div>
}