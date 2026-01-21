'use client';

import Image from 'next/image';

export default function ThirdHeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white flex items-center justify-center py-20">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-red-500 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-emerald-600 rounded-full animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-emerald-200/30 rounded-full animate-ping-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-300/40 rounded-full animate-ping-slow animation-delay-2000"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Constituency Badge */}
          <div className="animate-fadeInDown">
            <div className="inline-flex items-center gap-3 bg-white border-2 border-emerald-600 rounded-full px-8 py-3 shadow-xl">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-xl font-black text-gray-900">সিরাজগঞ্জ-৬</span>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative group animate-fadeInUp">
            {/* Glow effects */}
            <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 to-red-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Image container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl ring-4 ring-emerald-600/30 group-hover:ring-emerald-600/60 transition-all duration-500">
              <Image
                src="/saif-hero.png"
                alt="সাইফ মোস্তাফিজ"
                fill
                className="object-cover scale-110"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"></div>
            </div>

            {/* Rotating badges around image */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full shadow-xl animate-bounce">
              <span className="font-bold text-sm">✓ প্রতিশ্রুতিবদ্ধ</span>
            </div>
            
            <div className="absolute bottom-0 -left-8 bg-red-600 text-white px-5 py-2 rounded-full shadow-xl animate-pulse">
              <span className="font-bold text-sm">✓ সৎ</span>
            </div>
            
            <div className="absolute bottom-0 -right-8 bg-blue-600 text-white px-5 py-2 rounded-full shadow-xl animate-pulse animation-delay-2000">
              <span className="font-bold text-sm">✓ কর্মঠ</span>
            </div>
          </div>

          {/* Name - Big and Bold */}
          <div className="space-y-4 animate-fadeInUp animation-delay-2000">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight">
              <span className="block bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600 bg-clip-text text-transparent animate-gradient">
                সাইফ মোস্তাফিজ
              </span>
            </h1>
            
            {/* Underline decoration */}
            <div className="flex justify-center gap-2 items-center">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
              <div className="w-3 h-3 bg-red-600 rounded-full rotate-45"></div>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
            </div>
          </div>

          {/* Tagline */}
          <div className="animate-fadeInUp animation-delay-4000">
            <p className="text-2xl md:text-3xl font-bold text-gray-700 max-w-2xl">
              জনগণের <span className="text-emerald-600">সেবায়</span> নিবেদিত
            </p>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 pt-8 animate-fadeInUp animation-delay-4000">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-emerald-600">১০+</div>
              <div className="text-sm md:text-base text-gray-600 font-semibold">বছর অভিজ্ঞতা</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-emerald-600">৫০+</div>
              <div className="text-sm md:text-base text-gray-600 font-semibold">সামাজিক প্রকল্প</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-emerald-600">১০০%</div>
              <div className="text-sm md:text-base text-gray-600 font-semibold">স্বচ্ছতা</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-fadeInUp animation-delay-4000">
            <button className="group relative overflow-hidden px-10 py-5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-lg shadow-2xl hover:shadow-emerald-600/50 hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                যোগাযোগ করুন
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>

            <button className="px-10 py-5 rounded-full border-2 border-emerald-600 text-emerald-600 font-bold text-lg hover:bg-emerald-600 hover:text-white transition-all duration-300">
              আরও জানুন
            </button>
          </div>

        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 C300,100 600,0 900,50 C1050,75 1150,50 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
}
