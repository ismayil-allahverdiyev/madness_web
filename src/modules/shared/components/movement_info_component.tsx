interface MovementInfoComponentProps {
    message: string;
}

export function MovementInfoComponent(props: MovementInfoComponentProps) {
    return <>
        <p className="pl-8 lg:text-2xl text-xl font-semibold text-orange-500">
            Don't forget!
        </p>
        <p className="pl-8 pr-16 lg:text-base text-sm font-semibold">
            {props.message}
        </p>
    </>
}