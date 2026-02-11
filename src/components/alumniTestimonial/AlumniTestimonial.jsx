import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import t1 from "../../assets/t1.jpg";
import t2 from "../../assets/t2.jpg";
import t3 from "../../assets/t3.jpg";
import t4 from "../../assets/t4.jpg";

const AlumniTestimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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

  const prev = () => {
    setIndex(index === 0 ? 4 - 1 : index - 1);
  };

  const next = () => {
    setIndex((index + 1) % 4);
  };

  return (
    <section className="w-full py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        
        {/* SLIDE */}
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          {/* IMAGE (LEFT) */}
          <div className="md:w-1/3 flex justify-start md:pl-6">
            <img
              src={data[index].img}
              alt={data[index].name}
              className="h-[360px] w-[260px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* TEXT (RIGHT) */}
          <div className="md:w-2/3 text-white md:pr-12">
            <p className="text-base leading-relaxed mb-6 opacity-95">
              {data[index].text}
            </p>
            <h3 className="text-lg font-semibold">{data[index].name}</h3>
            <p className="text-sm text-gray-200">{data[index].role}</p>
          </div>

          {/* ARROWS → TOP RIGHT */}
          <div className="absolute top-4 right-4 flex gap-4">
            <button onClick={prev} className="text-white hover:opacity-80">
              <ChevronLeft size={26} />
            </button>
            <button onClick={next} className="text-white hover:opacity-80">
              <ChevronRight size={26} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniTestimonial;
