import { useState } from 'react';
import contactImage from '../assets/Conatact.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    course: '',
    message: ''
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const form = new FormData();
    form.append("access_key", "da091ed8-42eb-4541-ade0-28e5cf1c5168");
    form.append("fullName", formData.fullName);
    form.append("email", formData.email);
    form.append("mobile", formData.mobile);
    form.append("course", formData.course);
    form.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        course: '',
        message: ''
      });
    } else {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${contactImage})`,
            animation: 'slowZoom 20s ease-in-out infinite'
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="lg:ml-auto lg:mr-0 mx-auto w-full max-w-md">
              <div 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
                style={{ animation: 'formEntry 1s ease-out forwards' }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  GET IN TOUCH
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="Mobile"
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="" className="bg-gray-800">Which course are you interested in?</option>
                    <option value="web-development" className="bg-gray-800">Web Development</option>
                    <option value="data-science" className="bg-gray-800">Data Science</option>
                    <option value="machine-learning" className="bg-gray-800">Machine Learning</option>
                    <option value="cloud-computing" className="bg-gray-800">Cloud Computing</option>
                    <option value="cybersecurity" className="bg-gray-800">Cybersecurity</option>
                    <option value="other" className="bg-gray-800">Other</option>
                  </select>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                  >
                    Submit
                  </button>

                  {result && (
                    <p className="text-white text-center mt-2">{result}</p>
                  )}
                </form>
              </div>
            </div>

            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slowZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes formEntry {
          0% { opacity: 0; transform: scale(0.8) rotate(3deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
