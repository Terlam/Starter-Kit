export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Connect with Ananse AI",
      description: "Begin your mentorship journey by engaging with our culturally-aware AI mentor. Ask questions about career challenges, cultural dynamics, and professional growth."
    },
    {
      number: "2",
      title: "Assess Your Skills",
      description: "Take our interactive skills assessment to evaluate your technical knowledge and cultural intelligence. Discover areas for growth through real-world scenarios."
    },
    {
      number: "3",
      title: "Build Your Network",
      description: "Join our community of African tech professionals, find mentors, share your story, and weave your own success narrative in the diaspora."
    }
    
  ];

  return (
    <section id="process" className="py-16 bg-[#2B6CB0]">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
        <h3 className="mt-4 text-3xl text-white font-normal sm:text-4xl md:text-5xl">
             Your Journey with Ananse AI
            </h3>
            <p className="mt-4 text-lg text-blue-100">
              Three steps to weave your success story in tech while staying connected to your heritage
            </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Number Circle */}
                             <div className="relative inline-flex items-center justify-center mb-6">
                 {/* Dotted outline circle */}
                 <div className="absolute w-20 h-20 border-2 border-dashed border-gray-300 rounded-full"></div>
                 {/* Number circle */}
                <div className="relative w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-2xl">{step.number}</span>
                </div>
               </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}