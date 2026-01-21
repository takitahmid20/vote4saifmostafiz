"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CallToActionSection = () => {
  return (
    <section id="cta" className="relative py-20 bg-[#063C2C] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right Pattern */}
        <div className="absolute top-10 right-10 opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="2" strokeDasharray="8 8"/>
            <circle cx="60" cy="60" r="35" stroke="white" strokeWidth="1.5"/>
          </svg>
        </div>
        
        {/* Bottom Left Pattern */}
        <div className="absolute bottom-10 left-10 opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="80" stroke="white" strokeWidth="2" strokeDasharray="5 5" transform="rotate(45 50 50)"/>
          </svg>
        </div>

        {/* Floating Stars */}
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.3">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-pulse animation-delay-2000">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" opacity="0.3">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Centered Content */}
          <div className="text-center space-y-8 animate-fadeInUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-semibold">আপনার সমর্থন প্রয়োজন</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              {/* Shapla Icon */}
              <div className="flex justify-center mb-6 animate-fadeInDown">
                <Image
                  src="/shapla-koli-icon.svg"
                  alt="Shapla Koli"
                  width={120}
                  height={120}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Shahid Osman Hadi', sans-serif" }}
              >
                নির্বাচনে শাপলা কলি
                <br />
                <span className="text-amber-400">গণভোটে হ্যাঁ বলি</span>
              </h2>

              {/* CTA Button */}
              <div className="flex justify-center mt-8">
                <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white shadow-xl shadow-emerald-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/50">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    ডোনেট করুন
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
