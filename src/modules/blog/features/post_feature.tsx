import BlogImageExample from "../../../assets/images/blog_example_image.svg"
import TimeComponent from "../components/time_component";

interface PostFeatureProps {
    index: number;
    title: string;
    image: string;
    date: string;
    time: string;
    body: string;
    category: string;
}

export default function PostFeature(props: PostFeatureProps) {
    var isLeft = props.index % 2 == 0;
    return <div className={`flex ${isLeft ? "" : "flex-row-reverse"} justify-center w-[80%] h-[400px] py-4 text-gray-400 font-medium mx-auto`}>
        <div className="w-[45%]">
            <p className={`text-lg font-semibold ${!isLeft ? "text-end" : ""}`}>
                {props.title} - <span className="text-orange-500">{props.category}</span>
            </p>
            <TimeComponent isLeft={isLeft} time={props.time} date={props.date} />
            <p className={`w-[80%] break-words ${!isLeft ? "text-end ml-auto" : ""}`}>
                {props.body}
            </p>
        </div>
        <img src={BlogImageExample} alt="" className={`${!isLeft ? "w-[45%]" : "w-[30%]"}scale-125 rounded-lg object-cover`} />
    </div>
}