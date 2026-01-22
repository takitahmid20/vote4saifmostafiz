"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* About Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#063C2C] flex items-center justify-center text-white font-black text-xl shadow-lg">
                  সৈ
                </div>
                <div>
                  <div className="text-xl font-bold">সাইফ মোস্তাফিজ</div>
                  <div className="text-sm text-gray-400">সিরাজগঞ্জ-৩</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                সিরাজগঞ্জ-৩ এর পরিবর্তনের জন্য আপনার ভোট দিন
              </p>
              <div className="flex items-start gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-white/70 text-sm leading-relaxed">
                  প্রতিটি ভোট গণতন্ত্রের শক্তি। আপনার অধিকার প্রয়োগ করুন এবং সিরাজগঞ্জ-৬ এর উন্নয়নে অংশীদার হন।
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold mb-4">এলাকার পরিসংখ্যান</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#063C2C]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-400">১৩</div>
                    <div className="text-sm text-gray-400">ইউনিয়ন</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#063C2C]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-400">২০০+</div>
                    <div className="text-sm text-gray-400">গ্রাম</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#063C2C]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-400">৪ লক্ষ ৫০ হাজার+</div>
                    <div className="text-sm text-gray-400">ভোটার</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold mb-4">দ্রুত যোগাযোগ</h3>
              <div className="space-y-3">
                <button className="w-full bg-[#063C2C] hover:bg-[#052f23] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group">
                  <span>স্বেচ্ছাসেবক হন</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg">
                  আমাদের সাথে যোগাযোগ করুন
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold mb-4">যোগাযোগের তথ্য</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="font-semibold">ফোনে যোগাযোগ</div>
                    <div className="text-sm text-gray-400">কল করুন</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold">অফিস ভিজিট</div>
                    <div className="text-sm text-gray-400">সিরাজগঞ্জ-৬</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} সাইফ মোস্তাফিজ। সর্বস্বত্ব সংরক্ষিত।
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                গোপনীয়তা নীতি
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                শর্তাবলী
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
