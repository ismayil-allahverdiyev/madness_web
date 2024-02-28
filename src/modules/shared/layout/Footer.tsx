import EmailLocationComponent from "../features/email_location_feature";
import LogoInfoFeature from "../features/logo_info_feature";

export default function GeneralFooter() {
    return <div className="flex bg-[#292929] p-8 md:flex-row flex-col-reverse relative">
        <EmailLocationComponent />
        <LogoInfoFeature />
    </div>
}