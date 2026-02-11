import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.35 },
  },
};

const leftBlock = {
  hidden: {
    opacity: 0,
    x: -120,
    rotateY: -35,
    z: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    z: 0,
    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  },
};

const rightBlock = {
  hidden: {
    opacity: 0,
    x: 120,
    rotateY: 35,
    z: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    z: 0,
    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  },
};

const divider3D = {
  hidden: { scaleY: 0, opacity: 0 },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 1.6, ease: "easeInOut" },
  },
};

const RevolutionSection = () => {
  return (
    <section className="relative w-full bg-white py-44 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[160px]" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-44"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        style={{ perspective: "1600px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-0">

          {/* LEFT 3D TEXT CARD */}
          <motion.div
            variants={leftBlock}
            whileHover={{
              rotateY: -12,
              rotateX: 6,
              scale: 1.06,
            }}
            transition={{ type: "spring", stiffness: 120 }}
            className="text-center lg:text-right pr-0 lg:pr-14"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)]">
              Revolutionize
              <br />
              The Way
              <br />
              You
            </h2>
          </motion.div>

          {/* 3D ENERGY DIVIDER */}
          <motion.div
            variants={divider3D}
          className="relative w-[3px] lg:w-[5px] h-40 lg:h-56 rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_30px_lg:50px_rgba(124,58,237,0.8)]"
          >
            <span className="absolute inset-0 animate-pulse bg-white/30 blur-md rounded-full" />
          </motion.div>

          {/* RIGHT 3D TEXT CARD */}
          <motion.div
            variants={rightBlock}
            whileHover={{
              rotateY: 12,
              rotateX: 6,
              scale: 1.06,
            }}
            transition={{ type: "spring", stiffness: 120 }}
            className="text-center lg:text-left pl-0 lg:pl-14"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2 className="text-indigo-600 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-[0_25px_40px_rgba(99,102,241,0.35)]">
              Learn
              <br />
              Online
            </h2>
          </motion.div>
        </div>

        {/* SUB TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: false }}
          className="mt-12 lg:mt-24 text-center text-gray-600 text-base lg:text-lg max-w-3xl mx-auto"
        >
          A modern learning experience built for clarity, speed, and real-world
          career growth.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default RevolutionSection;
