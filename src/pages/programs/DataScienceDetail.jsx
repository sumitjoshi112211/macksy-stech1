import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import dataImg from "../../assets/data.jpg";
import predictiveImg from "../../assets/predictive salesdata.jpg";
import marketImg from "../../assets/marketanalysisdata.jpg";
import customerImg from "../../assets/customerdashboard data.jpg";
import trainingCertificate from "../../assets/Training Certificate2.png";
import internshipCertificate from "../../assets/internship Certificate1.png";
import alumniImage from "../../assets/Alumni.png";
import ProgramPlan from "../../components/programPlan/ProgramPlan";
import AlumniTestimonial from "../../components/alumniTestimonial/AlumniTestimonial";

const DataScienceDetail = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const heroRef = useRef(null);
  const highlightsRef = useRef(null);
  const courseDetailsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Animate hero section on page load
    if (heroRef.current) {
      setTimeout(() => {
        heroRef.current.style.opacity = '1';
        heroRef.current.style.transform = 'translateY(0)';
      }, 100);
    }

    // Setup scroll observers exactly like original
    const observers = [
      { ref: highlightsRef, selector: '.highlight-item' },
      { ref: courseDetailsRef, selector: '.course-item' },
      { ref: projectsRef, selector: '.project-card' }
    ];

    observers.forEach(({ ref, selector }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const items = entry.target.querySelectorAll(selector);
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.style.opacity = '1';
                  item.style.transform = 'translateY(0) scale(1)';
                }, index * 150);
              });
            }
          });
        },
        { threshold: 0.3 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observers.forEach(({ ref }) => {
        if (ref.current) {
          // Cleanup observers
        }
      });
    };
  }, []);

  const highlights = [
    "Introduction to Data Science",
    "Foundation of Statistics & Probability",
    "Machine Learning Algorithms",
    "Data Visualization & Big Data Technologies"
  ];

  const courseDetails = [
    {
      title: "Data Fundamentals",
      topics: ["Statistics & Probability", "Data Collection", "Data Cleaning", "Exploratory Analysis"]
    },
    {
      title: "Machine Learning",
      topics: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Evaluation"]
    },
    {
      title: "Data Visualization",
      topics: ["Tableau", "Power BI", "Python Visualization", "Storytelling with Data"]
    },
    {
      title: "Big Data & Tools",
      topics: ["SQL & Databases", "Python for Data Science", "R Programming", "Cloud Data Platforms"]
    }
  ];

  const projects = [
    {
      title: "Customer Analytics Dashboard",
      imagePath: predictiveImg
    },
    {
      title: "Predictive Sales Model",
      imagePath: marketImg
    },
    {
      title: "Market Segmentation Analysis",
      imagePath: customerImg
    }
  ];

  const toggleCourse = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* SECTION 1: HERO */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="lg:pr-8">
              <div ref={heroRef}
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                  Data Science
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Master the art of extracting insights from data. Learn statistical analysis, machine learning, 
                  data visualization, and big data technologies. This program prepares you for a career as a data scientist or analyst.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="lg:pl-8">
              <img
                src={dataImg}
                alt="Data Science"
                className="w-full max-w-lg h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: HIGHLIGHTS */}
      <section ref={highlightsRef} className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">
            Highlights
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Course Details (moved slightly left) */}
            <div className="lg:pr-8">
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <div 
                    key={index} 
                    className="highlight-item flex items-start space-x-4"
                    style={{
                      opacity: 0,
                      transform: 'translateY(30px)',
                      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                    }}
                  >
                    <div className="w-3 h-3 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-xl text-gray-800 leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual Element (simplified) */}
            <div className="flex justify-center lg:pl-8">
              <div className="relative w-80 h-80">
                {/* Simple animated dots */}
                <div className="absolute top-12 left-12 w-6 h-6 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute top-24 right-16 w-4 h-4 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-32 left-20 w-8 h-8 bg-orange-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-16 right-12 w-4 h-4 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-orange-700 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: COURSE DETAILS */}
      <section ref={courseDetailsRef} className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Course Details
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {courseDetails.map((course, index) => (
              <div 
                key={index}
                className="course-item bg-white rounded-lg shadow-md overflow-hidden"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px) scale(0.95)',
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}
              >
                <button
                  onClick={() => toggleCourse(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${expandedCourse === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${expandedCourse === index ? 'max-h-48' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-4">
                    <ul className="space-y-2">
                      {course.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PROJECTS */}
      <section ref={projectsRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="project-card group"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease-out, transform 0.3s ease-out'
                }}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 text-center">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img
                src={trainingCertificate}
                alt="Training Certificate"
                className="w-full h-auto max-w-md object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={internshipCertificate}
                alt="Internship Certificate"
                className="w-full h-auto max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <ProgramPlan />

      {/* ALUMNI COMPANIES SECTION */}
      <section className="w-full bg-white py-8">
        <div className="w-full px-0">
          <div className="flex justify-center items-center">
            <img
              src={alumniImage}
              alt="Alumni Companies"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <AlumniTestimonial />

      {/* FOOTER SECTION */}
      <footer className="w-full bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Macky's Tech</h3>
              <p className="text-gray-400">Empowering careers with cutting-edge technology education.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Artificial Intelligence</li>
                <li>Web Development</li>
                <li>Cloud Computing</li>
                <li>Data Science</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email:info@mackystech.in</li>
                <li>Phone: +91 8235910315</li>
                <li>Bhopal, India</li>
              </ul>
            </div>
          </div>
          
          {/* BACK BUTTON */}
          <div className="text-center mt-8">
            <Link
              to="/programs"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
            >
              ← Back to Programs
            </Link>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Macky's Tech Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default DataScienceDetail;
