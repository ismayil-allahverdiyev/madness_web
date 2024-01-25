import { NavBar } from "../../shared/features/nav_bar";
import { ContactLargeView } from "../features/contact_large_feature";

export function Header() {
    return <>
        <div className="min-h-screen max-h-screen bg-home-background bg-cover bg-center bg-no-repeat relative">
            <NavBar />
            <ContactLargeView />
        </div>
    </>;
}