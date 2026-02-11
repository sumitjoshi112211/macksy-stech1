import { Link } from "react-router-dom";
import aiImg from "../../assets/Ai.jpg";

const AIPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src={aiImg}
            alt="Artificial Intelligence"
            className="w-48 h-48 mx-auto mb-12 rounded-3xl object-cover shadow-2xl"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Artificial Intelligence
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore artificial intelligence and machine learning technologies
          </p>
        </div>
      </section>

      {/* Get All Tools Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Get All The Tools You Need In a Single Platform
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
            <Link to="/programs/datascience" className="text-gray-700 hover:text-gray-900 transition-colors">
              Data Science
            </Link>
            <Link to="/programs/artificialintelligence" className="text-gray-700 hover:text-gray-900 transition-colors">
              Artificial Intelligence
            </Link>
            <Link to="/programs/webdevelopment" className="text-gray-700 hover:text-gray-900 transition-colors">
              Web Development
            </Link>
            <Link to="/programs/machinelearning" className="text-gray-700 hover:text-gray-900 transition-colors">
              Machine Learning
            </Link>
            <Link to="/programs/cloudcomputing" className="text-gray-700 hover:text-gray-900 transition-colors">
              Cloud Computing
            </Link>
            <Link to="/programs/uiux" className="text-gray-700 hover:text-gray-900 transition-colors">
              UI/UX
            </Link>
            <Link to="/programs/cybersecurity" className="text-gray-700 hover:text-gray-900 transition-colors">
              Cyber Security
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
            <Link to="/programs/digitalmarketing" className="text-gray-700 hover:text-gray-900 transition-colors">
              Digital Marketing
            </Link>
            <Link to="/programs/stockmarket" className="text-gray-700 hover:text-gray-900 transition-colors">
              Stock Market
            </Link>
            <Link to="/programs/hr" className="text-gray-700 hover:text-gray-900 transition-colors">
              HR
            </Link>
            <Link to="/programs/finance" className="text-gray-700 hover:text-gray-900 transition-colors">
              Finance
            </Link>
            <Link to="/programs/autocad" className="text-gray-700 hover:text-gray-900 transition-colors">
              AutoCAD
            </Link>
            <Link to="/programs/nanotechnology-biotech" className="text-gray-700 hover:text-gray-900 transition-colors">
              Nanotechnology
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Macky's Tech </h3>
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
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: support info@mackystech.in</li>
                <li>Phone: +91 92443 63581</li>
                <li>Bhopal, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Macky's Tech Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AIPage;
