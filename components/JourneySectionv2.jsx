"use client";
import React from 'react';
import Image from 'next/image';

const JourneySectionv2 = () => {
  const journeySteps = [
    {
      id: 1,
      year: "২০১৮-২০২৩",
      title: "ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থী",
      description: "রাষ্ট্রবিজ্ঞান বিভাগে অধ্যয়ন এবং ছাত্র আন্দোলনে সক্রিয় অংশগ্রহণ",
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      id: 2,
      year: "জুলাই ২০২৪",
      title: "জুলাই গণঅভ্যুত্থানের কর্মী",
      description: "স্বৈরাচার বিরোধী আন্দোলনে সাহসী ভূমিকা এবং জনগণের অধিকার রক্ষায় অগ্রণী",
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 3,
      year: "২০২৪-বর্তমান",
      title: "জাতীয় নাগরিক পার্টি - এনসিপির নেতা",
      description: "তরুণ প্রজন্মের প্রতিনিধি হিসেবে সংগঠন পরিচালনা এবং জনগণের কণ্ঠস্বর",
      icon: (
        <img
          src="/shapla-koli-logo.svg"
          alt="Shapla Koli"
          className="w-full h-full object-cover scale-125"
        />
      )
    },
    {
      id: 4,
      year: "২০২৫",
      title: "সিরাজগঞ্জ-৬ আসনের সংসদ সদস্য প্রার্থী",
      description: "পরিবর্তনের প্রতিশ্রুতি নিয়ে জনগণের সেবায় প্রস্তুত",
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  // Duplicate items for seamless loop
  const duplicatedSteps = [...journeySteps, ...journeySteps, ...journeySteps];

  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="bg-[#063C2C] text-white text-xs sm:text-sm px-4 py-2 rounded-full font-semibold tracking-wider">
              আমার যাত্রা
            </span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Shahid Osman Hadi', sans-serif" }}
          >
            আমার পথচলা
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            ছাত্র আন্দোলন থেকে জনগণের প্রতিনিধিত্ব - একটি সংগ্রামী যাত্রা
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Timeline */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Timeline Track */}
        <div className="relative py-8">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#063C2C]/20 via-[#063C2C] to-[#063C2C]/20 transform -translate-y-1/2"></div>

          {/* Scrolling Container */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-8 animate-scroll-horizontal hover:pause-animation touch-pan-x">
              {duplicatedSteps.map((step, index) => (
                <div
                  key={`${step.id}-${index}`}
                  className="flex-shrink-0 w-64 sm:w-96 lg:w-[420px] relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#063C2C] transition-transform hover:scale-110">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 text-[#063C2C]">
                          {step.icon}
                        </div>
                      </div>
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 bg-[#063C2C]/20 rounded-full animate-ping"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="mt-12 group">
                    <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#063C2C] transform hover:-translate-y-2">
                      {/* Year Badge */}
                      <div className="mb-3 sm:mb-5">
                        <span className="bg-[#063C2C]/10 text-[#063C2C] text-xs sm:text-base px-3 py-1 sm:px-5 sm:py-2 rounded-full font-semibold inline-block">
                          {step.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 
                        className="text-base sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 group-hover:text-[#063C2C] transition-colors line-clamp-2"
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-lg text-gray-600 leading-relaxed line-clamp-3">
                        {step.description}
                      </p>

                      {/* Decorative Element */}
                      <div className="mt-3 sm:mt-6 pt-3 sm:pt-5 border-t border-[#063C2C]/10">
                        <div className="flex items-center gap-2 text-[#063C2C] text-xs sm:text-sm font-semibold">
                          <div className="w-8 h-0.5 bg-[#063C2C] group-hover:w-12 transition-all duration-300"></div>
                          <span>যাত্রার ধাপ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 30s linear infinite;
        }

        @media (max-width: 767px) {
          .animate-scroll-horizontal {
            animation: scroll-horizontal 20s linear infinite;
          }
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }

        .touch-pan-x {
          touch-action: pan-x;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default JourneySectionv2;
