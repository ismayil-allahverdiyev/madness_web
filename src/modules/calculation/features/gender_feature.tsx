import GenderSelector from "../components/gender_selector";

export default function GenderFeature() {
    return <div className="flex flex-col items-center">
        <p className="my-4 text-xl font-semibold">
            Choose your biological gender
        </p>
        <div className="flex justify-center">
            <GenderSelector isMale={true} />
            <GenderSelector isMale={false} />
        </div>
    </div>;
}