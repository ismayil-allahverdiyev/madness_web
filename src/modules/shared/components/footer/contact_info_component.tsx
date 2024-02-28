import InstagramIcon from "../../../../assets/icons/instagram_icon.svg";
import WhatsappIcon from "../../../../assets/icons/whatsapp_icon.svg";
import WhiteMadness from "../../../../assets/images/white-madness.svg";

export default function ContactInfoComponent() {
    return <div className="flex flex-col w-[45%] text-white pb-2 xl:text-2xl lg:text-xl text-lg">
        <img src={WhiteMadness} alt="" className="absolute md:pt-32 md:top-0 md:bottom-0 sm:-top-24 -top-16 md:right-0 -right-24  md:scale-[87%] scale-50" />
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