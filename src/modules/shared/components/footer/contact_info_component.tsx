import InstagramIcon from "../../../../assets/icons/instagram_icon.svg";
import WhatsappIcon from "../../../../assets/icons/whatsapp_icon.svg";
import WhiteMadness from "../../../../assets/images/white-madness.svg";

export default function ContactInfoComponent() {
    return <div className="flex flex-col w-[45%] text-white pb-2 xl:text-2xl lg:text-xl text-lg">
        <img src={WhiteMadness} alt="" className="absolute md:bottom-0 md:right-0 right-8 md:w-[40%] w-[30%]" />
        Sosyal medya
        <div className="flex pt-2">
            <a href="https://www.instagram.com/madnessfitnessclub/">
                <img src={InstagramIcon} alt="" />
            </a>
            <a href="https://wa.me/+905384242648?text=Spor%20salonunuz%20hakkında%20bilgi%20almak%20istiyorum!">
                <img src={WhatsappIcon} alt="" className="ml-2" />
            </a>
        </div>
        İletişim numarası
        <a href="tel:+905384242648">
            0538 424 26 48
        </a>
    </div>
}