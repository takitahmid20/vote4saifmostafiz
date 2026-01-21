'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ManifestoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    manifesto: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/manifesto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (data.status === 'success') {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', address: '', manifesto: '' });
      } else {
        setSubmitStatus('error');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="manifesto" className="relative min-h-screen w-full bg-white py-20 flex items-center">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Saif's Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg lg:max-w-xl mx-auto lg:mx-0">
              
              <div className="relative">
                <Image
                  src="/Mask-group.png"
                  alt="সাইফ মোস্তাফিজ"
                  width={600}
                  height={750}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border-2 border-emerald-600 rounded-full px-6 py-3 shadow-xl">
                <span className="text-emerald-700 font-bold">সিরাজগঞ্জ-৬</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              আপনার মতামত, আমার ইশতেহার
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                আপনাদের ইশতেহারই আমার ইশতেহার। তাই আপনার দেওয়া মতামত নিয়েই তৈরি হবে আমার ইশতেহার
              </p>
            </div>

            {/* Button */}
            <div className="pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                মতামত দিন
              </button>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                প্রতিটি মতামত গুরুত্বপূর্ণ এবং আমাদের নীতিমালা গঠনে সহায়ক হবে
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fadeInUp">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold" style={{ fontFamily: "'Shahid Osman Hadi', sans-serif" }}>
                  আপনার মতামত অথবা পরামর্শ লিখুন
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-emerald-100 mt-2">আপনার মতামত আমাদের জন্য গুরুত্বপূর্ণ</p>
            </div>

            {/* Modal Body */}
            {submitStatus === 'success' ? (
              /* Thank You Content */
              <div className="p-8 md:p-12 text-center">
                {/* Success Icon */}
                <div className="mb-6">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                {/* Thank You Message */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Shahid Osman Hadi', sans-serif" }}>
                  ধন্যবাদ!
                </h3>
                <p className="text-lg text-gray-700 mb-2">
                  আপনার মূল্যবান মতামতের জন্য কৃতজ্ঞতা
                </p>
                <p className="text-base text-gray-600 mb-8">
                  আপনার মতামত আমাদের ইশতেহার তৈরিতে গুরুত্বপূর্ণ ভূমিকা পালন করবে
                </p>

                {/* Close Button */}
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSubmitStatus(null);
                  }}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  ঠিক আছে
                </button>
              </div>
            ) : (
              /* Form Content */
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  আপনার নাম <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  মোবাইল নম্বর <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="০১৭xxxxxxxx"
                />
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  ঠিকানা <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="গ্রাম/ইউনিয়ন, সিরাজগঞ্জ-৬"
                />
              </div>

              {/* Manifesto Field */}
              <div>
                <label htmlFor="manifesto" className="block text-sm font-semibold text-gray-700 mb-2">
                  আপনার ইশতেহার/মতামত <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="manifesto"
                  name="manifesto"
                  required
                  value={formData.manifesto}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  placeholder="আপনার মতামত বিস্তারিত লিখুন..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'জমা হচ্ছে...' : 'জমা দিন'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  বাতিল
                </button>
              </div>

              {/* Success/Error Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg animate-fadeIn">
                  ✓ আপনার মতামত সফলভাবে জমা হয়েছে। ধন্যবাদ!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg animate-fadeIn">
                  ✗ কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।
                </div>
              )}

            </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
