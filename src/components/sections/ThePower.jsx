import { useEffect, useRef } from "react";

const ThePower = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const leftContent = entry.target.querySelector('.power-left');
            const rightContent = entry.target.querySelector('.power-right');
            const powerBar = entry.target.querySelector('.power-bar');
            
            setTimeout(() => {
              if (leftContent) {
                leftContent.style.opacity = '1';
                leftContent.style.transform = 'translateX(0)';
              }
            }, 200);
            
            setTimeout(() => {
              if (powerBar) {
                powerBar.style.width = '100%';
              }
            }, 400);
            
            setTimeout(() => {
              if (rightContent) {
                rightContent.style.opacity = '1';
                rightContent.style.transform = 'translateX(0)';
              }
            }, 600);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "Web Development", level: 95 },
    { name: "Cloud Computing", level: 88 },
    { name: "AI & Machine Learning", level: 92 },
    { name: "Data Science", level: 85 },
    { name: "Digital Marketing", level: 90 }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            The Power of Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master the skills that are shaping the future of the digital world
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="power-left"
            style={{
              opacity: 0,
              transform: 'translateX(-50px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Transform Your Career
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              In today's digital age, technology skills are more valuable than ever. 
              Our comprehensive programs are designed to give you the cutting-edge 
              skills that employers are looking for.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-300">Industry-relevant curriculum</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300">Hands-on training approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">Lifetime learning support</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Skills */}
          <div className="power-right"
            style={{
              opacity: 0,
              transform: 'translateX(50px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <h3 className="text-3xl font-bold mb-8">
              Skill Mastery Levels
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="power-bar h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThePower;
