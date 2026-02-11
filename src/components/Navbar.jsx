import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const handleProgramsClick = () => {
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (navRef.current) {
      setTimeout(() => {
        navRef.current.style.opacity = "1";
        navRef.current.style.transform = "translateY(1)";
      }, 100);
    }
  }, []);

  return (
    <header className="w-full h-19 bg-white sticky top-0 z-50 justify-center">
      <div
        ref={navRef}
        style={{
          opacity: 0,
          transform: "translateY(-20px)",
          transition: "all 0.6s ease",
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between"
      >
        {/* LEFT: Logo */}
        <div className="flex items-center group">
          <img
            src={logo}
            alt="Company Logo"
            className="w-24 h-16 sm:w-32 sm:h-20 lg:w-35   lg:h-26 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* RIGHT: Menu - Desktop */}
        <nav className="hidden md:block bg-gray-100/80 backdrop-blur-md rounded-full px-5 py-2 shadow-sm">
          <ul className="flex items-center gap-5 text-gray-700 font-medium">
            <li>
              <Link
                to="/"
                onClick={handleHomeClick}
                className="relative hover:text-purple-600 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/programs"
                onClick={handleProgramsClick}
                className="relative hover:text-purple-600 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Programs
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={handleContactClick}
                className="relative hover:text-purple-600 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-4 text-gray-700 font-medium">
              <li>
                <Link
                  to="/"
                  onClick={handleHomeClick}
                  className="block py-2 hover:text-purple-600 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  onClick={handleProgramsClick}
                  className="block py-2 hover:text-purple-600 transition duration-300"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleContactClick}
                  className="block py-2 hover:text-purple-600 transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
