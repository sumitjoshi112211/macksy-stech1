import { useEffect, useRef } from "react";

const ProgramPlan = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.program-plan-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const plans = [
    {
      title: "ADAPT",
      features: [
        "• Recorded Lectures",
        "• Real Time Projects",
        "• 8+ Hours of Live Sessions",
        "• 1-on-1 Doubt Solving",
        "• Certifications",
        "• Mentor Support",
        "• Placement Guidance",
        "• Interview Assistance"
      ],
      price: "Rs 5,000",
      buttonText: "Get Started",
      paymentLink: "https://rzp.io/rzp/3Ckx16M",
      gradient: "from-purple-600 to-purple-800"
    },
    {
      title: "ADVANCE",
      features: [
        "• Recorded Lectures",
        "• Real Time Projects",
        "• 15+ Hours of Live Sessions",
        "• 1-on-1 Doubt Solving",
        "• Certifications",
        "• Mentor Support",
        "• Placement Guidance",
        "• Interview Assistance"
      ],
      price: "Rs 8,000",
      buttonText: "Get Started",
      paymentLink: "https://pages.razorpay.com/pl_SDznDH2ImNPicR/view",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      title: "ACHIEVE",
      features: [
        "• Recorded Lectures",
        "• Real Time Projects",
        "• 20+ Hours of Live Sessions",
        "• 1-on-1 Doubt Solving",
        "• Certifications",
        "• Mentor Support",
        "• Placement Guidance",
        "• Interview Assistance"
      ],
      price: "Rs 11,000",
      buttonText: "Get Started",
      paymentLink: "https://pages.razorpay.com/pl_SEL1HN8HAsimEL/view",
      gradient: "from-gray-800 to-gray-900"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
          Program Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="program-plan-card group"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              <div className={`bg-gradient-to-br ${plan.gradient} rounded-xl p-8 h-full hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {plan.title}
                </h3>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-white/30 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white">
                    {plan.price}
                  </div>
                </div>

                {/* PAYMENT BUTTON */}
                <div className="text-center">
                  <a
                    href={plan.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-800 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                      {plan.buttonText}
                    </button>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramPlan;
