import { NavBar } from "../../shared/features/nav_bar";
import { ContactLargeView } from "../features/contact_large_feature";
import HomeBackground from "../../../assets/images/home_background.png";


export function Header() {
    return <>
        <img src={HomeBackground} className={`min-h-screen max-h-screen w-screen relative`} />
        <NavBar />
        <ContactLargeView />
    </>;
}