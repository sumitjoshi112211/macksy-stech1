import { motion } from "framer-motion";
import promoVideo from "../assets/promo.mp4";

const letters = ["A", "T", " ", "Y", "O", "U", "R", " ", "P", "A", "C", "E"];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const letterAnim = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const ScrollTextVideo = () => {
  return (
    <>
      {/* GAP FROM HERO / HOME (REDUCED) */}
      <div className="h-10 md:h-14"></div>

      {/* FULL SCREEN VIDEO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">

        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={promoVideo} type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* TEXT OVERLAY */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.h1
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-wrap justify-center text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-wider"
          >
            {letters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnim}
                className="mx-1"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

      </section>
    </>
  );
};

export default ScrollTextVideo;
