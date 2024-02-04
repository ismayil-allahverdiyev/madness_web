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
    return <motion.div initial="initial" whileInView="animate" variants={fadeInVariations} transition={{ duration: 0.5 }} className="items-start pl-8 pt-12 overflow-hidden">
        <div className="text-6xl font-bold">
            <p>
                We are the MFC
            </p>
            <p className="text-primary">
                We are here to help you
            </p>
        </div>
        <p className="py-8 text-3xl">
            Welcome to Madness Fitness Center! I'm Madness, your guide to an extraordinary fitness journey.
            With cutting-edge equipment and dynamic classes, we're more than a gym;
            we're a lifestyle. Join us, unleash the madness, break boundaries, and become your best self.
            #UnleashTheMadness 💪🔥
        </p>
    </motion.div>;
}