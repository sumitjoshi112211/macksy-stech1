import React from "react";
import { Link } from "react-router-dom";
import ministryAffair from "../assets/ministryAffair-removebg-preview.png";
import startup from "../assets/startup-removebg-preview.png";
import lastImage from "../assets/last-removebg-preview.png";

const RecognitionFooter = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] py-20">

      {/* soft glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        
        <h2 className="text-4xl font-semibold tracking-wide mb-4">
          Recognition & Trust
        </h2>

        <p className="text-gray-200 max-w-3xl mx-auto mb-14 leading-relaxed">
          Macky's Tech is proudly recognised by government initiatives and industry
          bodies for innovation, skill development, and impactful learning
          solutions across India.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center mb-16">
          
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-10 hover:scale-105 transition duration-500 shadow-lg">
            <div className="flex items-center justify-center h-32 mb-4">
              <img src={ministryAffair} alt="Ministry of Corporate Affairs" className="max-h-full max-w-full object-contain" />
            </div>
            <p className="font-medium">Ministry of Corporate Affairs</p>
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-10 hover:scale-105 transition duration-500 shadow-lg">
            <div className="flex items-center justify-center h-32 mb-4">
              <img src={startup} alt="Startup India" className="max-h-full max-w-full object-contain" />
            </div>
            <p className="font-medium">Startup India</p>
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-10 hover:scale-105 transition duration-500 shadow-lg">
            <div className="flex items-center justify-center h-32 mb-4">
              <img src={lastImage} alt="MSME - Govt. of India" className="max-h-full max-w-full object-contain" />
            </div>
            <p className="font-medium">MSME – Govt. of India</p>
          </div>
        </div>

        <div className="mb-10 text-sm text-gray-300 space-y-2">
          <p>Email: <span className="font-medium">info@mackystech.in</span></p>
          <p>Phone: <span className="font-medium">+91 8235910315</span></p>
        </div>

        <Link to="/contact">
          <button className="px-8 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-gray-200 transition">
            Contact Us
          </button>
        </Link>

        <div className="w-full h-px bg-white/20 my-10" />

        <p className="text-sm text-gray-300 tracking-wide">
          © {new Date().getFullYear()} Macky's Tech 
          <span className="block mt-2 text-gray-400">
            Building careers • Empowering skills • Driving innovation
          </span>
        </p>
      </div>
    </section>
  );
};

export default RecognitionFooter;
