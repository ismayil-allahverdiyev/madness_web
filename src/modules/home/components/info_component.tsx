import { motion } from "framer-motion";

const fadeInVariations = {
    initial: {
        opacity: 0,
        x: "10vw",
    },
    animate: {
        opacity: 1,
        x: "0"
    }
}

export default function InfoComponent() {
    return <motion.div initial="initial" whileInView="animate" variants={fadeInVariations} transition={{ duration: 0.5 }} className="items-start pl-8 lg:pt-12 pt-6 overflow-hidden">
        <div className="font-bold xl:text-6xl lg:text-4xl text-2xl">
            <p>
                We are the MFC
            </p>
            <p className="text-primary">
                We are here to help you
            </p>
        </div>
        <p className="xl:py-8 lg:py-4 py-2 xl:text-3xl lg:text-xl text-lg">
            Welcome to Madness Fitness Center! I'm Madness, your guide to an extraordinary fitness journey.
            With cutting-edge equipment and dynamic classes, we're more than a gym;
            we're a lifestyle. Join us, unleash the madness, break boundaries, and become your best self.
            #UnleashTheMadness 💪🔥
        </p>
    </motion.div>;
}