'use client';

import Image from 'next/image';
import DonateButton from '../ui/DonateButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20 bg-[#063C2C]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/bg-image1.png"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.03)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.02)_0%,transparent_50%)]"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Left - Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start self-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <Image
                src="/saif-hero.png"
                alt="Hero"
                width={600}
                height={600}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          {/* Right - Content with creative typography */}
          <div className="w-full lg:w-7/12 space-y-8 relative z-10">
            
            {/* Top badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="relative w-3 h-3 bg-emerald-400 rounded-full"></div>
              </div>
              <span className="text-sm font-semibold text-white">চলুন গড়ি নতুন বাংলাদেশ</span>
            </div>

            {/* Main headline with creative design */}
            <div className="relative">
              {/* Massive background text */}
              <div className="absolute -left-4 -top-16 text-[200px] font-black text-white/[0.02] leading-none pointer-events-none select-none">
                সংগ্রাম
              </div>
              
              <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] text-white">
                <span className="inline-block">
                  <span className="relative">
                    জুলাইয়ের আকাঙ্ক্ষা
                    <span className="absolute bottom-1 left-0 w-full h-2 bg-emerald-400/40 -z-10"></span>
                  </span>
                </span>
                {" "}
                <span className="text-emerald-400 font-black">ও</span>
                {" "}
                <span className="inline-block">
                  <span className="relative text-red-400">
                    শহীদ ওসমান হাদির
                    <span className="absolute bottom-1 left-0 w-full h-2 bg-red-400/40 -z-10"></span>
                  </span>
                </span>
                <br />
                <span className="inline-block mt-2">
                  <span className="relative bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-300 bg-clip-text text-transparent font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    ইনসাফের বাংলাদেশ
                  </span>
                </span>
                {" "}
                গড়ার সংগ্রাম
                {" "}
                <span className="relative inline-block">
                  <span className="font-black">চলবেই</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,7 Q25,0 50,7 T100,7" stroke="#4ade80" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
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
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <DonateButton />
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
