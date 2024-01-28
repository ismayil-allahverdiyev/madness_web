import InstagramIcon from "../../../../assets/icons/instagram_icon.svg";
import WhatsappIcon from "../../../../assets/icons/whatsapp_icon.svg";
import WhiteMadness from "../../../../assets/images/white-madness.svg";

export default function ContactInfoComponent() {
    return <div className="flex flex-col w-[45%] text-2xl text-white pb-2">
        <img src={WhiteMadness} alt="" className="absolute pt-32 right-8" />
        Social media
        <div className="flex pt-2">
            <img src={InstagramIcon} alt="" />
            <img src={WhatsappIcon} alt="" className="ml-2" />
        </div>
        Contact number
        <p>
            0535 535 53 53
        </p>
    </div>
}