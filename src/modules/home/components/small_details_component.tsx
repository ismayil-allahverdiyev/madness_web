import { Service } from "../store/home-page-context";
import { motion } from "framer-motion";

const fadeInVariations = {
    initial: {
        opacity: 0,
        y: -20
    },
    animate: {
        opacity: 1,
        y: 0
    }
};


export default function SmallDetailsComponent(props: Service) {
    return <motion.div initial="initial" whileInView="animate" variants={fadeInVariations} transition={{ duration: 0.5 }} className="flex  overflow-hidden">
        <div className="flex flex-col h-36 justify-end items-center">
            <p className="w-32 text-center font-bold">
                {props.title}
            </p>
            <img src={props.image} alt="" />
        </div>
    </motion.div>;
}