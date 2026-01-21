'use client';

export default function ManifestoCardsSection() {
  const manifestoCards = [
    {
      id: 1,
      title: "শিক্ষা ও উন্নয়ন",
      description: "মানসম্মত শিক্ষা নিশ্চিত করতে প্রতিটি বিদ্যালয়ে আধুনিক সুবিধা প্রদান",
      iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      id: 2,
      title: "স্বাস্থ্যসেবা",
      description: "সকলের জন্য সহজলভ্য ও মানসম্পন্ন স্বাস্থ্যসেবা নিশ্চিতকরণ",
      iconPath: "M4.5 12.75l6 6 9-13.5"
    },
    {
      id: 3,
      title: "কর্মসংস্থান",
      description: "যুব সমাজের জন্য নতুন কর্মসংস্থানের সুযোগ সৃষ্টি",
      iconPath: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
    },
    {
      id: 4,
      title: "অবকাঠামো উন্নয়ন",
      description: "রাস্তাঘাট ও যোগাযোগ ব্যবস্থার আধুনিকায়ন",
      iconPath: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
    },
    {
      id: 5,
      title: "কৃষি সহায়তা",
      description: "কৃষকদের জন্য ন্যায্য মূল্য ও আধুনিক প্রযুক্তির সহায়তা",
      iconPath: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
    },
    {
      id: 6,
      title: "জনগণের অধিকার",
      description: "প্রতিটি নাগরিকের মৌলিক অধিকার সংরক্ষণ ও নিশ্চিতকরণ",
      iconPath: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    },
    {
      id: 7,
      title: "নিরাপত্তা",
      description: "জনগণের জানমাল ও সম্পদের সুরক্ষা নিশ্চিতকরণ",
      iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    },
    {
      id: 8,
      title: "পরিবেশ রক্ষা",
      description: "পরিবেশ সংরক্ষণ ও সবুজায়নের জন্য বিশেষ উদ্যোগ",
      iconPath: "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
    }
  ];



  return (
    <section id="cards" className="relative py-20 bg-white overflow-hidden">
      
      {/* Decorative background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-40 -right-40 w-80 h-80 border-[40px] border-[#063C2C] rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 border-[40px] border-[#063C2C] rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fadeInDown">
          <div className="inline-block mb-4">
            <span className="bg-[#063C2C] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              আমার প্রতিশ্রুতি
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Shahid Osman Hadi', sans-serif" }}>
            আমার ইশতেহার
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            জনগণের কল্যাণে আমার দৃঢ় প্রতিশ্রুতি ও সুস্পষ্ট কর্মপরিকল্পনা
          </p>
        </div>

        {/* Cards Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {manifestoCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-500 border-2 border-gray-100 hover:border-[#063C2C] animate-fadeInUp overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#063C2C]/5 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Icon Container */}
              <div className="relative mb-4 w-14 h-14 bg-[#063C2C]/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-[#063C2C]">
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
                </svg>
              </div>

              {/* Card Number */}
              <div className="absolute top-5 right-5 text-4xl font-black text-[#063C2C] opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                {card.id}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#063C2C] transition-colors duration-300 relative z-10">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed relative z-10 mb-4">
                {card.description}
              </p>

              {/* Read More Link */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-[#063C2C] font-semibold cursor-pointer group-hover:gap-3 transition-all duration-300 text-sm">
                  <span>বিস্তারিত</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#063C2C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp animation-delay-4000">
          <button className="group relative bg-[#063C2C] hover:bg-[#052f23] text-white px-10 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              সম্পূর্ণ ইশতেহার দেখুন
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
