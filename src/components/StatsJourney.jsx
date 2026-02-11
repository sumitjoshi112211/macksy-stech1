import { useEffect, useRef, useState } from "react";

const StatsJourney = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false);
          setTimeout(() => setAnimate(true), 100);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.4 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  const boxBase =
    "w-[260px] h-[180px] rounded-2xl bg-[#3B2E91] text-white flex flex-col justify-center px-6 shadow-xl transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 bg-white flex flex-col items-center"
    >
      {/* HEADING */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-16">
        Our Journey in Numbers
      </h2>

      {/* CARDS */}
      <div className="relative max-w-6xl w-full flex justify-center gap-10 flex-wrap">
        {/* BOX 1 */}
        <div
          className={`${boxBase}
          ${
            animate
              ? "opacity-100 translate-x-0 translate-y-0 rotate-0"
              : "opacity-0 -translate-x-40 translate-y-20 rotate-[120deg]"
          }`}
        >
          <h2 className="text-5xl font-bold mb-2">20+</h2>
          <p className="text-lg leading-snug">
            Industry Seasoned
            <br />
            Instructors
          </p>
        </div>

        {/* BOX 2 */}
        <div
          className={`${boxBase}
          delay-150
          ${
            animate
              ? "opacity-100 translate-x-0 translate-y-0 rotate-0"
              : "opacity-0 translate-y-32 rotate-[-140deg]"
          }`}
        >
          <h2 className="text-5xl font-bold mb-2">3K+</h2>
          <p className="text-lg leading-snug">
            Students Enrolled
            <br />& Certified
          </p>
        </div>

        {/* BOX 3 */}
        <div
          className={`${boxBase}
          delay-300
          ${
            animate
              ? "opacity-100 translate-x-0 translate-y-0 rotate-0"
              : "opacity-0 translate-x-40 translate-y-20 rotate-[160deg]"
          }`}
        >
          <h2 className="text-5xl font-bold mb-2">100+</h2>
          <p className="text-lg leading-snug">
            Live Projects
            <br />
            Completed
          </p>
        </div>
      </div>

      {/* TEXT BELOW CARDS (as per photo) */}
      <p className="mt-20 text-4xl font-medium">
        What Our Clients Say
      </p>
    </section>
  );
};

export default StatsJourney;
