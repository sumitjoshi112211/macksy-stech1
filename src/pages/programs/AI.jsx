import { Link } from "react-router-dom";
import aiBg from "../../assets/Ai.jpg";
import ProgramPlan from "../../components/programPlan/ProgramPlan";

const AI = () => {
  const learnPoints = [
    "Machine learning fundamentals and algorithms",
    "Deep learning and neural networks",
    "Natural language processing and computer vision",
    "AI ethics and responsible AI development"
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aiBg})`
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12"
          style={{
            animation: 'detailPageLoad 1.5s ease-out forwards'
          }}
        >
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            AI
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-12">
            Explore artificial intelligence and machine learning to build intelligent systems. 
            Learn cutting-edge AI technologies and their real-world applications. 
            This program bridges theory and practice in the rapidly evolving AI landscape.
          </p>

          {/* What You'll Learn Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              What You'll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learnPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3"
                  style={{
                    animation: `fadeInUp 0.8s ease-out forwards`,
                    animationDelay: `${0.5 + index * 0.1}s`
                  }}
                >
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

        <ProgramPlan />

        {/* Back Button */}
          <div className="text-center">
            <Link
              to="/programs"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
            >
              ← Back to Programs
            </Link>
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes detailPageLoad {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(5deg) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) scale(1);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
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

export default AI;
