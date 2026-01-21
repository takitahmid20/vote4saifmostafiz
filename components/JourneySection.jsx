"use client";
import React from 'react';

const JourneySection = () => {
  const journeySteps = [
    {
      id: 1,
      year: "২০১৮-২০২৩",
      title: "ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থী",
      description: "রাষ্ট্রবিজ্ঞান বিভাগে অধ্যয়ন এবং ছাত্র আন্দোলনে সক্রিয় অংশগ্রহণ",
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 3,
      year: "২০২৪-বর্তমান",
      title: "জাতীয় নাগরিক কমিটির নেতা",
      description: "তরুণ প্রজন্মের প্রতিনিধি হিসেবে সংগঠন পরিচালনা এবং জনগণের কণ্ঠস্বর",
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 4,
      year: "২০২৫",
      title: "সিরাজগঞ্জ-৬ আসনের সংসদ সদস্য প্রার্থী",
      description: "পরিবর্তনের প্রতিশ্রুতি নিয়ে জনগণের সেবায় প্রস্তুত",
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            সাইফ মোস্তাফিজ-এর পথচলা
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            ছাত্র আন্দোলন থেকে জনগণের প্রতিনিধিত্ব - একটি সংগ্রামী যাত্রা
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#063C2C] via-[#063C2C]/50 to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {journeySteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative animate-fadeInUp`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#063C2C]">
                      {/* Year Badge */}
                      <div className={`inline-block mb-4 ${index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:mr-4'}`}>
                        <span className="bg-[#063C2C]/10 text-[#063C2C] text-sm sm:text-base px-4 py-2 rounded-full font-bold">
                          {step.year}
                        </span>
                      </div>
                      
                      {/* Icon - Mobile only */}
                      <div className="md:hidden w-16 h-16 mx-auto mb-4 bg-[#063C2C]/10 rounded-full flex items-center justify-center text-[#063C2C] group-hover:bg-[#063C2C] group-hover:text-white transition-all duration-300">
                        {step.icon}
                      </div>

                      {/* Title */}
                      <h3 
                        className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#063C2C] transition-colors"
                        style={{ fontFamily: "'Shahid Osman Hadi', sans-serif" }}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Decorative Corner */}
                      <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-12 h-12 opacity-10`}>
                        <div className={`w-full h-full border-t-4 border-[#063C2C] ${index % 2 === 0 ? 'border-r-4 rounded-tr-2xl' : 'border-l-4 rounded-tl-2xl'}`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon - Desktop only */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="relative z-10 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#063C2C] group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 text-[#063C2C]">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Decorative Element */}
          <div className="mt-16 text-center">
            <div className="inline-block relative">
              <div className="w-4 h-4 bg-[#063C2C] rounded-full animate-pulse"></div>
              <div className="absolute -inset-2 bg-[#063C2C]/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
