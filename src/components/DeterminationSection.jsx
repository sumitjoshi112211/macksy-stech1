import { useEffect, useRef, useState } from "react";

const DeterminationSection = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false);
          setTimeout(() => setAnimate(true), 60);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.45 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center overflow-hidden relative"
    >
      {/* LEFT CIRCLE */}
      <div
        className={`absolute w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        bg-gradient-to-r from-blue-400 to-indigo-500
        blur-[2px]
        ${
          animate
            ? "left-1/2 -translate-x-[190px] scale-100 opacity-100"
            : "-left-[320px] scale-50 opacity-0"
        }`}
      />

      {/* RIGHT CIRCLE */}
      <div
        className={`absolute w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        bg-gradient-to-r from-purple-400 to-pink-400
        blur-[2px]
        transition-all duration-1000 ease-out delay-150
        ${
          animate
            ? "right-1/2 translate-x-[190px] scale-100 opacity-100"
            : "-right-[320px] scale-50 opacity-0"
        }`}
      />

      {/* CENTER CIRCLE */}
      <div
        className={`absolute w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full
        bg-gradient-to-r from-cyan-400 to-blue-500
        blur-[1px]
        transition-all duration-1000 ease-out delay-300
        ${
          animate ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      />

      {/* TEXT */}
      <div className="relative w-full h-64 lg:h-96 max-w-4xl mx-auto">
        <h2
          className={`relative z-10 text-indigo-900
          text-center
          text-4xl md:text-5xl font-extrabold tracking-wide
          transition-all duration-700
          ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center mb-4 lg:mb-6 z-10 relative px-4">
            <span className="block text-lg md:text-xl font-semibold mb-2">
              We Believe in
            </span>
            The Power of Determination
          </h2>
        </h2>
      </div>
    </section>
  );
};

export default DeterminationSection;