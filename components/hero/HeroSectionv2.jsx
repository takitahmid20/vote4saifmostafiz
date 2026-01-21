'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import DonateButton from '../ui/DonateButton';

export default function HeroSectionv2() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    { word: 'সাইফ', color: 'text-emerald-400' },
    { word: 'সিরাজগঞ্জ', color: 'text-amber-400' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden pt-20 bg-[#063C2C]">
      {/* Background Map Shape */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-3xl animate-pulse">
          <Image
            src="/bgmapshape.png"
            alt="Bangladesh Map Background"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.03)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.02)_0%,transparent_50%)] z-[1]"></div>
      
      {/* Sirajganj Map Logo - Top Right */}
      <div className="absolute top-24 right-8 md:top-28 md:right-12 lg:top-32 lg:right-16 z-10 animate-fadeInDown">
        <Image
          src="/sirajganjmaplogo.svg"
          alt="Sirajganj Map"
          width={150}
          height={100}
          className="w-24 h-auto md:w-32 lg:w-40 opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      
      {/* Background Bengali Text Pattern */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="text-white/[0.02] font-bold leading-none">
          <div className="absolute top-[15%] left-[10%] text-6xl">ন্যায়বিচার</div>
          <div className="absolute top-[25%] right-[15%] text-4xl">নির্বাচন</div>
          <div className="absolute top-[40%] left-[5%] text-5xl">অধিকার</div>
          <div className="absolute bottom-[35%] right-[8%] text-7xl">গণতন্ত্র</div>
          <div className="absolute top-[60%] left-[20%] text-3xl">সাম্য</div>
          <div className="absolute bottom-[20%] right-[25%] text-5xl">স্বাধীনতা</div>
          <div className="absolute top-[50%] right-[35%] text-4xl">ভোট</div>
          <div className="absolute bottom-[45%] left-[15%] text-6xl">পরিবর্তন</div>
          <div className="absolute top-[35%] right-[45%] text-3xl">উন্নয়ন</div>
          <div className="absolute bottom-[55%] left-[40%] text-5xl">ইনসাফ</div>
          <div className="absolute top-[70%] right-[20%] text-4xl">প্রতিশ্রুতি</div>
          <div className="absolute bottom-[30%] left-[35%] text-6xl">জনগণ</div>
          <div className="absolute top-[45%] left-[55%] text-3xl">সংস্কার</div>
          <div className="absolute bottom-[60%] right-[50%] text-5xl">সেবা</div>
        </div>
      </div> */}
      
      {/* Floating animated orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/3 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-emerald-400/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-0">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 items-end lg:items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-5rem)]">
          
          {/* Left - Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start animate-fadeInUp relative">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/saif-hero.png"
                alt="Hero"
                width={600}
                height={600}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Mobile Content - Overlaid at bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 lg:hidden bg-gradient-to-t from-[#063C2C] via-[#063C2C]/95 to-transparent pt-12 pb-0 px-4">
              
              {/* Shapla Icon */}
              <div className="animate-fadeInDown flex justify-center mb-3">
                <Image
                  src="/shapla-koli-icon.svg"
                  alt="Shapla Koli"
                  width={80}
                  height={80}
                  className="w-12 h-12"
                />
              </div>

              {/* Top badge */}
              <div className="flex justify-center mb-3">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-white/20 animate-fadeInDown">
                <div className="relative w-2.5 h-2.5">
                  <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
                  <div className="relative w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>
                </div>
                <span className="text-xs font-semibold text-white">চলুন গড়ি নতুন বাংলাদেশ</span>
              </div>
              </div>

              {/* Main headline */}
              <h1 className="relative text-2xl sm:text-3xl font-black leading-tight mb-3 text-center" style={{ fontFamily: "'Shahid Osman Hadi', sans-serif" }}>
                <span className="text-white">ভোট ফর </span>
                <span className="relative inline-block align-baseline">
                  {texts.map((item, index) => (
                    <span
                      key={index}
                      className={`transition-all duration-500 ${item.color} ${
                        currentText === index
                          ? 'opacity-100 inline-block translate-y-0'
                          : 'opacity-0 absolute left-0 top-0 -translate-y-8'
                      }`}
                    >
                      {item.word}
                    </span>
                  ))}
                </span>
              </h1>
              
              {/* Subtext */}
              <p className="text-xs text-white/80 leading-relaxed text-center mb-4">
                জুলাইয়ের আকাঙ্ক্ষা ও শহীদ ওসমান হাদির
                ইনসাফের বাংলাদেশ গড়ার সংগ্রাম চলবেই
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 justify-center pb-6">
                <DonateButton />
              </div>
            </div>
          </div>
          
          {/* Right - Content with creative typography (Desktop Only) */}
          <div className="hidden lg:block w-full lg:w-7/12 space-y-8 relative z-10 text-left">
            
            {/* Shapla Icon */}
            <div className="animate-fadeInDown flex justify-start">
              <Image
                src="/shapla-koli-icon.svg"
                alt="Shapla Koli"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>

            {/* Top badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20 animate-fadeInDown hover:bg-white/20 transition-colors duration-300">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="relative w-3 h-3 bg-emerald-400 rounded-full"></div>
              </div>
              <span className="text-sm font-semibold text-white">চলুন গড়ি নতুন বাংলাদেশ</span>
            </div>

            {/* Main headline with creative design */}
            <div className="relative space-y-4 animate-fadeInUp">
              {/* Massive background text */}
              <div className="absolute -left-4 -top-16 text-[200px] font-black text-white/[0.02] leading-none pointer-events-none select-none animate-pulse">
                ভোট
              </div>
              
              <h1 className="relative text-7xl font-black leading-tight transition-colors duration-300" style={{ fontFamily: "'Shahid Osman Hadi', sans-serif" }}>
                <span className="text-white">ভোট ফর </span>
                <span className="relative inline-block align-baseline">
                  {texts.map((item, index) => (
                    <span
                      key={index}
                      className={`transition-all duration-500 ${item.color} ${
                        currentText === index
                          ? 'opacity-100 inline-block translate-y-0'
                          : 'opacity-0 absolute left-0 top-0 -translate-y-8'
                      }`}
                    >
                      {item.word}
                    </span>
                  ))}
                </span>
              </h1>
              
              {/* Subtext */}
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl animate-fadeInUp animation-delay-2000">
                জুলাইয়ের আকাঙ্ক্ষা ও শহীদ ওসমান হাদির
                ইনসাফের বাংলাদেশ গড়ার সংগ্রাম চলবেই
              </p>
            </div>

            {/* Quote with border accent */}
            {/* <div className="relative pl-6 border-l-4 border-emerald-600 bg-white/50 backdrop-blur-sm p-4 rounded-r-lg shadow-md">
              <svg className="absolute -left-2 -top-2 w-8 h-8 text-emerald-600/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-sm md:text-base text-gray-700 italic leading-relaxed">
                "ন্যায়সঙ্গত ও সামাজিক ন্যায়বিচার প্রতিষ্ঠার জন্য লড়াই করুন, উৎকৃষ্ট আগামীর জন্য ভোট দিন।"
              </p>
            </div> */}

            {/* CTA buttons */}
            <div className="flex flex-row gap-4 pt-4 animate-fadeInUp animation-delay-4000 justify-start">
              <DonateButton />
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
