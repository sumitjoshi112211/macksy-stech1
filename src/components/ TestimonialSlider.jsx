import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";

const data = [
  {
    img: t1,
    text:
      "Skilled in recruitment, HRMS tools, and policy compliance. The practical training gave me confidence to step into my role at ICICI Bank.",
    name: "Vinay",
    role: "HR Domain | ICICI Bank",
  },
  {
    img: t2,
    text:
      "The Data Science program helped me transition confidently into analytics with hands-on tools like Power BI and Tableau.",
    name: "Uday",
    role: "Data Science | Oracle",
  },
  {
    img: t3,
    text:
      "Cybersecurity training here prepares you for real industry challenges. Truly grateful for the guidance.",
    name: "Simran",
    role: "Cyber Security | Amazon",
  },
  {
    img: t4,
    text:
      "Industry-focused learning with real projects made a big difference in my career growth.",
    name: "Ayushi",
    role: "Software Engineer | Deloitte",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setIndex(index === 0 ? data.length - 1 : index - 1);
  };

  const next = () => {
    setIndex((index + 1) % data.length);
  };

  return (
    <section className="w-full py-12 lg:py-16 bg-gradient-to-r from-[#4b3bbd] via-[#5f4fd6] to-[#7b6be6]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* SLIDE */}
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
        >
          {/* IMAGE (LEFT) */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start lg:pl-6">
            <img
              src={data[index].img}
              alt={data[index].name}
              className="h-[280px] w-[200px] lg:h-[360px] lg:w-[260px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* TEXT (RIGHT) */}
          <div className="lg:w-2/3 text-white text-center lg:text-left lg:pr-12 px-4 lg:px-0">
            <p className="text-sm lg:text-base leading-relaxed mb-6 opacity-95">
              {data[index].text}
            </p>
            <h3 className="text-base lg:text-lg font-semibold">{data[index].name}</h3>
            <p className="text-sm text-gray-200">{data[index].role}</p>
          </div>
        </div>

        {/* ARROWS → TOP RIGHT */}
        <div className="absolute top-4 right-4 flex gap-4 z-10">
          <button onClick={prev} className="text-white hover:opacity-80">
            <ChevronLeft size={26} />
          </button>
          <button onClick={next} className="text-white hover:opacity-80">
            <ChevronRight size={26} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
