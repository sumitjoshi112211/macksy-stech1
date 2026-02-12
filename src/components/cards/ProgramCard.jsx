import { Link } from "react-router-dom";

const ProgramCard = ({ title, description, image, link, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-xl p-3 sm:p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col h-full ${className}`}>
      <div className="flex-1 flex flex-col justify-between text-center">
        <div>
          <Link to={link} className="block">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 lg:mb-6">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-xl shadow-lg hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </Link>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 px-2">
            {title}
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 lg:mb-6 leading-relaxed flex-1 px-2">
            {description}
          </p>
        </div>
        <Link
          to={link}
          className="inline-block bg-gray-900 text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full text-xs sm:text-sm lg:text-base font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
        >
          View Program Details
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
