interface MovementInfoComponentProps {
    message: string;
}

export function MovementInfoComponent(props: MovementInfoComponentProps) {
    return <>
        <p className="pl-8 text-2xl font-semibold text-orange-500">
            Don't forget!
        </p>
        <p className="pl-8 pr-16 font-semibold">
            {props.message}
        </p>
    </>
}