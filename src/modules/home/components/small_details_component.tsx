import { Service } from "../store/home-page-context";

export default function SmallDetailsComponent(props: Service) {
    return <div className="flex">
        <div className="flex flex-col h-36 justify-end items-center">
            <p className="w-32 text-center font-bold">
                {props.title}
            </p>
            <img src={props.image} alt="" />
        </div>
    </div>;
}