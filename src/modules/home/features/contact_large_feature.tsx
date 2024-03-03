import { motion } from "framer-motion";
import { useContext } from "react";
import { GeneralContext } from "../../shared/store/general-context";

export function ContactLargeView() {

    var { animateToTheEnd } = useContext(GeneralContext);

    return <div className="flex flex-col items-center justify-center w-1/3 text-white absolute inset-0 mx-auto my-auto z-0">
        <motion.h6 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="text-center leading-tight font-title tracking-wider sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-3xl">Power is not <br />
            gonna<br />
            wait for you
        </motion.h6>
        <button className="font-medium bg-primary hover:bg-orange-400  m-8 p-2 rounded-lg sm:text-base lg:text-lg text-xs" onClick={() => { animateToTheEnd() }}>
            Contact us
        </button>
    </div>;
}