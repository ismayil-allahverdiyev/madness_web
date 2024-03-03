interface MeasurementsInputComponentProps {
    title: string;
    amount: string;
    handleAmountState: (update: string) => void;
}

export default function MeasurementsInputComponent(props: MeasurementsInputComponentProps) {
    return <div className="flex flex-row justify-between items-center mx-2">
        <label className="text-text-black font-semibold">
            {props.title}
        </label>

        <input type="number" className="ml-4 p-2 rounded-lg bg-gray-200 lg:w-auto w-[65%]" onChange={(value) => { props.handleAmountState(value.target.value) }} />
    </div>;
}