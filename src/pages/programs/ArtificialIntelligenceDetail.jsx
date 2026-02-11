import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import aiImg from "../../assets/Ai.jpg";
import trainingCertificate from "../../assets/Training Certificate2.png";
import internshipCertificate from "../../assets/internship Certificate1.png";
import alumniImage from "../../assets/Alumni.png";
import AIProjects from "../../components/aiProjects/AIProjects";
import ProgramPlan from "../../components/programPlan/ProgramPlan";
import AlumniTestimonial from "../../components/alumniTestimonial/AlumniTestimonial";

const ArtificialIntelligenceDetail = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const heroRef = useRef(null);
  const highlightsRef = useRef(null);
  const courseDetailsRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      setTimeout(() => {
        heroRef.current.style.opacity = "1";
        heroRef.current.style.transform = "translateY(0)";
      }, 100);
    }

    const observers = [
      { ref: highlightsRef, selector: ".highlight-item" },
      { ref: courseDetailsRef, selector: ".course-item" },
    ];

    observers.forEach(({ ref, selector }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const items = entry.target.querySelectorAll(selector);
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.style.opacity = "1";
                  item.style.transform = "translateY(0) scale(1)";
                }, index * 150);
              });
            }
          });
        },
        { threshold: 0.3 }
      );

      if (ref.current) observer.observe(ref.current);
    });
  }, []);

  const highlights = [
    "Introduction to AI",
    "Foundation of Machine Learning",
    "Natural Language Processing",
    "Intermediate Algorithms",
  ];

  const courseDetails = [
    {
      title: "AI Fundamentals",
      topics: [
        "Introduction to Artificial Intelligence",
        "Machine Learning Basics",
        "Neural Networks",
        "Deep Learning Overview",
      ],
    },
    {
      title: "Machine Learning",
      topics: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Model Evaluation",
      ],
    },
    {
      title: "Natural Language Processing",
      topics: [
        "Text Processing",
        "Sentiment Analysis",
        "Language Models",
        "Chatbots & Conversational AI",
      ],
    },
    {
      title: "Advanced AI Applications",
      topics: [
        "Computer Vision",
        "Robotics",
        "AI Ethics",
        "Production Deployment",
      ],
    },
  ];

  const toggleCourse = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* HERO */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              ref={heroRef}
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.8s ease",
              }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Artificial Intelligence
              </h1>
              <p className="text-gray-700 text-lg">
                Explore artificial intelligence and machine learning to build
                intelligent systems and real-world AI solutions.
              </p>
            </div>
          </div>

          <div>
            <img
              src={aiImg}
              alt="Artificial Intelligence"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section ref={highlightsRef} className="bg-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Highlights</h2>
        <div className="max-w-5xl mx-auto space-y-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="highlight-item flex items-center gap-4"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.6s ease",
              }}
            >
              <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
              <p className="text-xl">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COURSE DETAILS */}
      <section ref={courseDetailsRef} className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Course Details
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {courseDetails.map((course, index) => (
            <div
              key={index}
              className="course-item bg-white shadow rounded-lg"
              style={{
                opacity: 0,
                transform: "translateY(20px) scale(0.95)",
                transition: "all 0.5s ease",
              }}
            >
              <button
                onClick={() => toggleCourse(index)}
                className="w-full px-6 py-4 flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <span>{expandedCourse === index ? "−" : "+"}</span>
              </button>

              {expandedCourse === index && (
                <div className="px-6 pb-4">
                  <ul className="space-y-2">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <ProgramPlan />
      <AIProjects />

      {/* CERTIFICATES */}
      <section className="py-16 px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <img src={trainingCertificate} alt="Training" />
          <img src={internshipCertificate} alt="Internship" />
        </div>
      </section>

      {/* ALUMNI */}
      <section className="bg-white py-8">
        <img src={alumniImage} alt="Alumni" className="w-full" />
      </section>

      {/* ✅ TESTIMONIAL – Alumni ke niche, Footer se upar */}
      <AlumniTestimonial />

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div>
            <h4 className="font-semibold mb-3">Programs</h4>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Web Development</li>
              <li>Cloud Computing</li>
              <li>Machine Learning</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul>
              <li>Email: info@mackystech.in</li>
              <li>Phone: +91 8235910315</li>
              <li>Bhopal, India</li>
            </ul>
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="text-center mt-8">
          <Link
            to="/programs"
            className="px-6 py-3 bg-gray-800 text-white rounded-full"
          >
            ← Back to Programs
          </Link>
        </div>

        <p className="text-center text-gray-400 mt-8">
          ©️ 2024 Macky's Tech Pvt Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ArtificialIntelligenceDetail;
