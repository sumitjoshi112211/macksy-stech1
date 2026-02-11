import { motion } from "framer-motion";
import heroImg from "../assets/Hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* LEFT WHITE GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full grid grid-cols-1 lg:grid-cols-2 items-center min-h-[90vh]">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
            Upskill Your <br /> Career.
          </h1>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-indigo-600 mt-4">
            Anytime, Anywhere
          </h2>

          <button className="mt-8 sm:mt-12 bg-indigo-600 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full hover:bg-indigo-700 transition">
            Get Started →
          </button>
        </motion.div>

        {/* FLOATING CARD */}
        <motion.div
          className="hidden lg:flex justify-end"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 max-w-sm"
          >
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Master the art of{" "}
              <strong>
                AI, Finance, Coding, HR, Cloud Computing, Digital Marketing
              </strong>{" "}
              and more...
            </p>

            <p className="text-indigo-600 font-bold mt-4 text-sm sm:text-base tracking-wide">
              ALL UNDER ONE ROOF!
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
