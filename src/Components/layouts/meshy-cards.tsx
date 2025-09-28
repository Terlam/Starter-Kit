const features = [
  {
    icon: "🕷️",
    title: 'Cultural AI Mentor',
    desc: 'Get guidance that understands both Western tech industry dynamics and African cultural contexts, helping you navigate your career while staying rooted in your heritage.',
  },
  {
    icon: "💼",
    title: 'Career Guidance',
    desc: 'Receive personalized mentorship on career advancement, workplace dynamics, and professional development tailored to African diaspora experiences.',
  },
  {
    icon: "📚",
    title: 'Skills Assessment',
    desc: 'Test your technical knowledge and cultural intelligence through interactive scenarios that prepare you for real-world challenges in tech.',
  },
  {
    icon: "👥",
    title: 'Community Network',
    desc: 'Connect with African tech professionals across the diaspora, find mentors, and build meaningful relationships that span continents.',
  },
  {
    icon: "📖",
    title: 'Success Stories',
    desc: 'Learn from inspiring journeys of African tech professionals and discover cultural wisdom that connects heritage with innovation.',
  },
  {
    icon: "🌍",
    title: 'Cultural Bridge',
    desc: 'Navigate between different cultural contexts while building your tech career, maintaining your identity and community connections.',
  },
];

export default function Feature1() {
  return (
    <section className="bg-black py-14 text-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-normal sm:text-4xl md:text-5xl">
            How Ananse AI Guides Your Journey
          </h3>
          <p className="mt-4 text-lg text-gray-400">
            Like the spider&apos;s web, we connect wisdom, technology, and culture to help you weave your success story
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="transform-gpu space-y-4 rounded-xl border border-[#FFD700]/20 bg-[#0D1117] p-6 transition-all duration-300 hover:scale-[1.03] hover:border-[#FFD700] hover:bg-[#0D1117] hover:shadow-2xl hover:shadow-[#FFD700]/10 cursor-pointer"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10 text-2xl">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h4>
                <p className="text-[#A0AEC0]">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}