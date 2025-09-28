export default function StorySection() {
  return (
    <section id="story" className="py-16 bg-gradient-to-br from-[#0D1117] to-[#161B22]">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🕷️</span>
              <h2 className="text-3xl font-bold text-white">The Story of Ananse AI</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                In West African folklore, Ananse the spider is the keeper of stories and wisdom. 
                Known for his cleverness and ability to connect different worlds, Ananse weaves 
                intricate webs that bring people together.
              </p>
              
              <p className="text-lg leading-relaxed">
                Just as Ananse bridges the gap between the earthly and spiritual realms, 
                <strong className="text-[#FFD700]"> Ananse AI bridges the gap between Western tech culture 
                and African heritage</strong>, helping you navigate your career while staying rooted in your identity.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our platform recognizes that success in tech isn&apos;t just about technical skills—it&apos;s about 
                understanding cultural dynamics, building meaningful relationships, and maintaining your 
                connection to community and heritage.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6 rounded-lg border border-[#FFD700]/20">
              <p className="text-[#FFD700] italic text-lg">
                &quot;Like the spider&apos;s web, wisdom connects all things. In technology, as in life, 
                the strongest connections are those that honor both innovation and tradition.&quot;
              </p>
              <p className="text-gray-400 text-sm mt-2">— African Proverb</p>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 rounded-2xl flex items-center justify-center border border-[#FFD700]/30">
              <div className="text-center space-y-4">
                <div className="text-8xl">🕷️</div>
                <div className="text-white text-lg font-semibold">Connecting Wisdom</div>
                <div className="text-gray-400 text-sm">Technology • Culture • Community</div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFD700] rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#FFA500] rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-[#FFD700]/60 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
