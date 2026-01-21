'use client';

import Image from 'next/image';

export default function SecondHeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/bg-image1.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50"></div>
      </div>

      {/* Animated particles/dots effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-500 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-500 rounded-full animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen">
          
          {/* Left - Hero Image with Creative Layout */}
          <div className="relative flex items-end justify-center order-2 lg:order-1 self-end pb-0 mb-0">
            
            {/* Animated glow rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] rounded-full border-2 border-emerald-500/20 animate-ping-slow"></div>
              <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-emerald-500/30 animate-ping-slow animation-delay-2000"></div>
            </div>

            {/* Main Image Container */}
            <div className="relative z-10 group">
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-emerald-500/30 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-red-500/30 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

              {/* Image with mask */}
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                
                {/* Main image */}
                <div className="relative w-full overflow-hidden rounded-t-3xl shadow-2xl">
                  <Image
                    src="/saif-hero.png"
                    alt="Saif Mostafiz"
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                  
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating badges around image */}
                <div className="absolute -top-6 -right-8 bg-orange-500 text-white px-6 py-3 rounded-full shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                  <span className="font-bold text-sm whitespace-nowrap">জনগণের প্রতিনিধি</span>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="absolute top-1/3 -left-12 bg-teal-600 text-white px-6 py-3 rounded-full shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                  <span className="font-bold text-sm whitespace-nowrap">সমাজসেবক</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="absolute bottom-1/3 -right-10 bg-red-600 text-white px-6 py-3 rounded-full shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
                  <span className="font-bold text-sm whitespace-nowrap">পরিবর্তনের কাণ্ডারী</span>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                </div>
              </div>

            </div>

          </div>

          {/* Right - Content */}
          <div className="space-y-8 relative z-10 order-1 lg:order-2 self-center">
            
            {/* Decorative line */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-transparent"></div>
              <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">সংগ্রাম চলবে</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.2]">
                <span className="block">
                  <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">আমাদের </span>
                  <span className="text-red-500">সিরাজগঞ্জ,</span>
                </span>
                <span className="block">গড়বো একসাথে</span>
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-lg shadow-2xl shadow-emerald-600/50 hover:shadow-emerald-600/70 hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  আরও জানুন
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
