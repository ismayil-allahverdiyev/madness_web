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
                Biz MFC'yiz
            </p>
            <p className="text-primary">
                Senin için buradayız
            </p>
        </div>
        <p className="xl:py-8 lg:py-4 py-2 xl:text-3xl lg:text-xl text-lg">
            Madness Fitness Club'a hoş geldiniz! Ben Madness, olağanüstü bir fitness yolculuğundaki rehberiniz. Son teknoloji ekipmanlar ve dinamik sınıflarımızla bir spor salonundan daha fazlasıyız; biz bir yaşam tarzıyız. Bize katılın, çılgınlığı serbest bırakın, sınırları aşın ve kendinizin en iyisi olun. #ÇılgınlığıSerbestBırak 💪🔥
        </p>
    </motion.div>;
}