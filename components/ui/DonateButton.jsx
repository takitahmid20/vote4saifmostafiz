'use client';

export default function DonateButton({ className = '' }) {
  return (
    <button
      className={`group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 sm:px-10 py-3 sm:py-5 text-sm sm:text-lg font-bold text-white shadow-xl shadow-emerald-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/50 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0 ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
        ডোনেট করুন
        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
    </button>
  );
}
