interface ResultComponentProps {
    result: string;
    title: string;
}

export default function ResultComponent(props: ResultComponentProps) {
    return <p className="text-xl p-1 px-2 mx-8 mb-2 rounded-lg bg-gray-200">
        {props.title}: <span className="text-orange-500">{props.result} Kcal</span>
    </p>
}