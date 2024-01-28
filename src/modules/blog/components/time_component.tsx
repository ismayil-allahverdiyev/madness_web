import TimerIcon from "../../../assets/icons/mingcute_time-fill.svg"

interface TimeComponentProps {
    isLeft: boolean;
    time: string;
    date: string;
}

export default function TimeComponent(props: TimeComponentProps) {
    return <div className={`flex ${props.isLeft ? "flex-row" : "flex-row-reverse"}`}>
        <img src={TimerIcon} alt="" />
        <p className={`px-2 ${props.isLeft ? "" : "text-end"}`}>
            {props.date}<br />
            {props.time}
        </p>
    </div>
}