import TimeComponent from "../components/time_component";
import { motion } from "framer-motion";

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
    var fadeInVariations = {
        initial: {
            opacity: 0,
            x: 40,
        },
        animate: {
            opacity: 1,
            x: 0,
        }
    };

    var isLeft = props.index % 2 == 0;

    if (isLeft === true) {
        fadeInVariations.initial.x = -40;
        console.log("It was left")
    } else {
        console.log("It was not left")
    }

    console.log(isLeft + " " + fadeInVariations.initial.x)

    return <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInVariations}
        transition={{ duration: 1 }}
        className={`flex ${isLeft ? "md:flex-row flex-col-reverse items-center" : "md:flex-row-reverse flex-col-reverse  items-center"} justify-center lg:w-[80%] w-full  py-4 text-gray-400 font-medium mx-auto overflow-x-hidden`}
    >
        <div className="md:w-[45%] w-[90%]">
            <p className={`xl:text-xl md:text-lg text-md font-semibold lg:w-full w-[80%] ${!isLeft ? "text-end ml-auto" : ""}`}>
                {props.title} - <span className="text-orange-500">{props.category}</span>
            </p>
            <TimeComponent isLeft={isLeft} time={props.time} date={props.date} />
            <p className={`w-[80%] break-words xl:text-lg md:text-md text-sm  ${!isLeft ? "text-end ml-auto" : ""}`}>
                {props.body}
            </p>
        </div>
        <img src={props.image} alt="" className={`lg:w-[40%] md:w-[45%] w-[90%] 2xl:h-72 xl:h-64 md:h-56 h-40 rounded-lg object-cover`} />
    </motion.div>
}