import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ProgramCard from "../../components/cards/ProgramCard";
import { allPrograms } from "../../data/programsData";

// Footer Component
const Footer = () => {
  const location = useLocation();

  const handleAllProgramsClick = () => {
    if (location.pathname === '/programs') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] py-20">
      
      {/* soft glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
          
          {/* Column 1 - Brand */}
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4">Macky's Tech</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Building careers • Empowering skills • Driving innovation
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/programs" onClick={handleAllProgramsClick} className="text-gray-200 hover:text-white transition-colors">All Programs</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-200">info@mackystech.in</li>
              <li className="text-gray-200">+91 8235910315</li>
              <li className="text-gray-200">Silicon Valley, CA 94025</li>
            </ul>
          </div>

        </div>

        {/* Back to Home Button */}
        <div className="text-center mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
            onClick={() => window.scrollTo(0, 0)}
          >
            ← Back to Home
          </Link>
        </div>

        {/* Copyright */}
        <div className="w-full h-px bg-white/20 my-10" />
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Macky's Tech. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

const Programs = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.program-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = cardsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 text-center mb-12 sm:mb-16 md:mb-20">
          Our Programs
        </h1>

        {/* Program Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {allPrograms.map((program, index) => (
            <div
              key={program.id}
              className="program-card h-full"
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              <ProgramCard
                title={program.title}
                description={program.description}
                image={program.image}
                link={program.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* NEW IMAGE-BASED PROGRAM SECTION */}
      <div className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
            Explore Our Programs
          </h2>

          {/* Image Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {allPrograms.map((program, index) => (
              <div
                key={program.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = program.link}
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${0.2 + index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Program Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay with Program Title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-lg font-bold text-center">
                        {program.title}
                      </h3>
                      <p className="text-white/90 text-sm text-center mt-1">
                        View Program Details →
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Programs;
