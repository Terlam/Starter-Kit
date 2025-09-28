'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../layouts/navigation';
import Image from 'next/image';
export default function Globe3D() {
  return (
    <section
      className="relative w-full overflow-hidden pt-32 pb-10 font-light text-white antialiased md:pt-20 md:pb-16"
      style={{
        background: '#0D1117', // updated background
      }}
    >
      <div
        className="absolute top-0 right-0 h-1/2 w-1/2"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(43,108,176,0.15) 0%, rgba(13,17,23,0) 60%)',
        }}
      />
      <div
        className="absolute top-0 left-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(43,108,176,0.15) 0%, rgba(13,17,23,0) 60%)',
        }}
      />
     <Navigation />
      <div className="relative z-10 container mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
           
          <span className="mb-6 inline-block rounded-full border border-[#FFD700]/30 px-3 py-1 text-xs text-[#FFD700] flex items-center gap-2">
            <span>🕷️</span>
            WISDOM OF THE WEB
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl">
            Weave Your Tech Story with{' '}
            <span className="text-[#FFD700] flex items-center gap-2">
              <span>🕷️</span>
              Ananse AI
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-[#A0AEC0] md:text-xl">
            Connect with culturally-aware AI mentorship that understands both Western tech industry dynamics 
            and African cultural contexts. Build your career while staying rooted in your heritage.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-0 sm:flex-row">
            <Link
              prefetch={false}
              href="/AImodel"
              className="relative w-full overflow-hidden rounded-full border border-white/10 bg-[#FFD700] px-8 py-4 text-black shadow-lg transition-all duration-300 hover:bg-[#FFA500] sm:w-auto flex items-center justify-center gap-2 font-bold"
            >
              <span>🕷️</span>
              Begin Your Journey
            </Link>
            <a
              href="#story"
              className="flex w-full items-center justify-center gap-2 text-[#A0AEC0] transition-colors hover:text-[#FFD700] sm:w-auto"
            >
              <span>
                Discover the story
                </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </a>
          </div>
          <div className="relative mt-5 z-10 mx-auto max-w-5xl overflow-hidden rounded-lg shadow-[0_0_50px_rgba(255,215,0,0.3)]">
           <Image src="/images/DasboardUi.png" alt="Ananse AI Dashboard Preview" width={1920} height={1080} className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
