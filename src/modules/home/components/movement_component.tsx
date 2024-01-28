import { Movement } from "../store/workout-context";

export default function MovementComponent(props: Movement) {
    return <div className="flex items-center justify-between text-xl">
        <div className="flex items-center ml-8 my-1 p-2 bg-gray-200 rounded-lg font-semibold">
            <a href="https://icons8.com/icon/FDI4JxAMODWm/bench-press" target="blank" className="pointer-events-none">
                <img src={props.image} className="mr-1" />
            </a>
            {props.description}
        </div>
        <p className="mr-8 text-text-blue font-medium">
            {props.reps}
        </p>
    </div>;
}