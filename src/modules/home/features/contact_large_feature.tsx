import { motion } from "framer-motion";
import { useContext } from "react";
import { GeneralContext } from "../../shared/store/general-context";

export function ContactLargeView() {

    var { animateToTheEnd } = useContext(GeneralContext);

    return <div className="flex flex-col items-center justify-center w-1/3 text-white absolute inset-0 mx-auto my-auto">
        <motion.h6 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="text-center leading-tight text-7xl font-title tracking-wider">Power is not <br />
            gonna<br />
            wait for you
        </motion.h6>
        <button className="text-lg font-medium bg-primary hover:bg-orange-400 w-1/3 m-8 p-2 rounded-lg" onClick={() => { animateToTheEnd() }}>
            Contact us
        </button>
    </div>;
}