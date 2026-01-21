"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const PhotoGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder gallery items - user can replace with actual photos
  const galleryItems = [
    {
      id: 1,
      src: "/gallery/image.png",
      alt: "সাইফ মোস্তাফিজ জনগণের সাথে",
      rotation: -3,
      zIndex: 1,
      note: "জুলাই আন্দোলন"
    },
    {
      id: 2,
      src: "/gallery/image-copy.png",
      alt: "ছাত্র আন্দোলনে",
      rotation: 2,
      zIndex: 2,
      note: "ঢাকা বিশ্ববিদ্যালয়"
    },
    {
      id: 3,
      src: "/gallery/image-copy-2.png",
      alt: "জনসভায় বক্তব্য",
      rotation: -2,
      zIndex: 3,
      note: "জনসভা, সিরাজগঞ্জ"
    },
    {
      id: 4,
      src: "/gallery/image-copy-3.png",
      alt: "কৃষকদের সাথে",
      rotation: 4,
      zIndex: 1,
      note: "কৃষক সভা"
    },
    {
      id: 5,
      src: "/gallery/image-copy-4.png",
      alt: "যুব সমাবেশ",
      rotation: -4,
      zIndex: 2,
      note: "তরুণ নেতৃত্ব"
    },
    {
      id: 6,
      src: "/gallery/image-copy-5.png",
      alt: "গ্রাম পরিদর্শন",
      rotation: 3,
      zIndex: 1,
      note: "গ্রাম ভ্রমণ"
    },
    {
      id: 7,
      src: "/gallery/image-copy-6.png",
      alt: "মিছিলে অংশগ্রহণ",
      rotation: -2,
      zIndex: 2,
      note: "প্রতিবাদ সমাবেশ"
    },
    {
      id: 8,
      src: "/gallery/image-copy-7.png",
      alt: "সভায় বক্তব্য",
      rotation: 3,
      zIndex: 1,
      note: "জনসভা"
    },
    {
      id: 9,
      src: "/gallery/image-copy-8.png",
      alt: "জনগণের সাথে",
      rotation: -3,
      zIndex: 3,
      note: "জনসংযোগ"
    },
    {
      id: 10,
      src: "/gallery/image-copy-9.png",
      alt: "ক্যাম্পেইন",
      rotation: 2,
      zIndex: 1,
      note: "নির্বাচনী প্রচার"
    },
    {
      id: 11,
      src: "/gallery/image-copy-10.png",
      alt: "সমাবেশে",
      rotation: -4,
      zIndex: 2,
      note: "জনসমাবেশ"
    },
    {
      id: 12,
      src: "/gallery/image-copy-11.png",
      alt: "জনগণের মাঝে",
      rotation: 3,
      zIndex: 1,
      note: "সাথে জনগণ"
    },
    {
      id: 13,
      src: "/gallery/image-copy-12.png",
      alt: "কর্মসূচিতে",
      rotation: -2,
      zIndex: 3,
      note: "রাজনৈতিক কর্মসূচি"
    },
    {
      id: 14,
      src: "/gallery/image-copy-13.png",
      alt: "দলীয় সভা",
      rotation: 4,
      zIndex: 2,
      note: "দলীয় বৈঠক"
    },
    {
      id: 15,
      src: "/gallery/image-copy-14.png",
      alt: "প্রচারণায়",
      rotation: -3,
      zIndex: 1,
      note: "নির্বাচনী প্রচারণা"
    },
    {
      id: 16,
      src: "/gallery/image-copy-15.png",
      alt: "জনগণের সেবায়",
      rotation: 2,
      zIndex: 2,
      note: "সেবা কার্যক্রম"
    },
    {
      id: 17,
      src: "/gallery/image-16.png",
      alt: "নেতৃত্বে",
      rotation: -4,
      zIndex: 1,
      note: "নেতৃত্ব প্রদান"
    }
  ];

  return (
    <>
      <section id="gallery" className="py-20 bg-white overflow-hidden relative">
        {/* Decorative Background Doodles */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="doodles" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#063C2C" />
                <circle cx="150" cy="100" r="2" fill="#063C2C" />
                <path d="M 100 150 Q 110 160 120 150" stroke="#063C2C" fill="none" strokeWidth="1" />
                <path d="M 30 120 L 50 130 L 40 140" stroke="#063C2C" fill="none" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#doodles)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4">
              <span className="bg-[#063C2C] text-white text-xs sm:text-sm px-4 py-2 rounded-full font-semibold tracking-wider">
                ফটো গ্যালারি
              </span>
            </div>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Shahid Osman Hadi', sans-serif" }}
            >
              জনগণের সাথে আমি
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              সংগ্রাম, আন্দোলন এবং জনগণের সাথে প্রতিটি মুহূর্ত
            </p>
          </div>

          {/* Gallery Grid - Scrapbook Style */}
          <div className="relative">
            {/* Desktop Collage Layout */}
            <div className="hidden lg:grid grid-cols-12 gap-3 auto-rows-[200px]">
              {/* Photo 1 - Large */}
              <div 
                className="col-span-5 row-span-2 relative group cursor-pointer"
                style={{ transform: `rotate(${galleryItems[0].rotation}deg)` }}
                onClick={() => setSelectedImage(galleryItems[0])}
              >
                <div className="relative w-full h-full bg-white p-2 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:z-50">
                  <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                    <Image
                      src={galleryItems[0].src}
                      alt={galleryItems[0].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Paperclip */}
                  <div className="absolute -top-2 right-8 w-8 h-12 border-2 border-[#063C2C] rounded-full rotate-45 opacity-60"></div>
                  {/* Note */}
                  <div className="absolute -bottom-3 -right-3 bg-amber-100 px-3 py-1 rotate-6 shadow-md">
                    <p className="text-xs text-gray-700 font-handwriting">{galleryItems[0].note}</p>
                  </div>
                </div>
              </div>

              {/* Photo 2 - Medium */}
              <div 
                className="col-span-3 row-span-1 relative group cursor-pointer"
                style={{ transform: `rotate(${galleryItems[1].rotation}deg)` }}
                onClick={() => setSelectedImage(galleryItems[1])}
              >
                <div className="relative w-full h-full bg-white p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:z-50">
                  <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                    <Image
                      src={galleryItems[1].src}
                      alt={galleryItems[1].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Tape */}
                  <div className="absolute -top-2 left-1/4 w-16 h-6 bg-amber-200/40 -rotate-12"></div>
                </div>
              </div>

              {/* Photo 3 - Medium */}
              <div 
                className="col-span-4 row-span-1 relative group cursor-pointer"
                style={{ transform: `rotate(${galleryItems[2].rotation}deg)` }}
                onClick={() => setSelectedImage(galleryItems[2])}
              >
                <div className="relative w-full h-full bg-white p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:z-50">
                  <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                    <Image
                      src={galleryItems[2].src}
                      alt={galleryItems[2].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Star doodle */}
                  <div className="absolute -top-4 -right-4 text-[#063C2C] opacity-60">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Photo 4 - Small */}
              <div 
                className="col-span-3 row-span-1 relative group cursor-pointer"
                style={{ transform: `rotate(${galleryItems[3].rotation}deg)` }}
                onClick={() => setSelectedImage(galleryItems[3])}
              >
                <div className="relative w-full h-full bg-white p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:z-50">
                  <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                    <Image
                      src={galleryItems[3].src}
                      alt={galleryItems[3].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Paperclip */}
                  <div className="absolute -top-1 left-1/3 w-6 h-10 border-2 border-red-500 rounded-full rotate-12 opacity-50"></div>
                </div>
              </div>

              {/* Photo 5 - Medium */}
              <div 
                className="col-span-4 row-span-1 relative group cursor-pointer"
                style={{ transform: `rotate(${galleryItems[4].rotation}deg)` }}
                onClick={() => setSelectedImage(galleryItems[4])}
              >
                <div className="relative w-full h-full bg-white p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:z-50">
                  <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                    <Image
                      src={galleryItems[4].src}
                      alt={galleryItems[4].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Note */}
                  <div className="absolute -bottom-2 -left-2 bg-blue-100 px-2 py-1 -rotate-6 shadow-md">
                    <p className="text-xs text-gray-700">{galleryItems[4].note}</p>
                  </div>
                </div>
              </div>

              {/* Photo 6 - Large Bottom */}
              <div 
                className="col-span-5 row-span-2 relative group cursor-pointer"
                style={{ transform: `rotate(${galleryItems[5].rotation}deg)` }}
                onClick={() => setSelectedImage(galleryItems[5])}
              >
                <div className="relative w-full h-full bg-white p-2 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:z-50">
                  <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                    <Image
                      src={galleryItems[5].src}
                      alt={galleryItems[5].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Tape corner */}
                  <div className="absolute top-3 right-3 w-12 h-6 bg-amber-200/40 rotate-45"></div>
                  <div className="absolute bottom-3 left-3 w-12 h-6 bg-amber-200/40 -rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Tablet/Mobile Grid Layout */}
            <div className="grid grid-cols-2 lg:hidden gap-3 sm:gap-4">
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative group cursor-pointer ${
                    index % 3 === 0 ? 'col-span-2' : 'col-span-1'
                  }`}
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative w-full aspect-square bg-white p-2 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Decorative tape */}
                    {index % 2 === 0 && (
                      <div className="absolute -top-2 left-1/4 w-12 h-5 bg-amber-200/40 -rotate-12"></div>
                    )}
                    {/* Decorative note */}
                    {index % 3 === 0 && (
                      <div className="absolute -bottom-2 -right-2 bg-blue-100 px-2 py-1 rotate-6 shadow-md text-xs">
                        {item.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Photos CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-500 mb-6">আরও ছবি যোগ করতে পারবেন</p>
            <button className="bg-[#063C2C] hover:bg-[#052f23] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              সম্পূর্ণ গ্যালারি দেখুন
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="bg-white p-6 sm:p-8 rotate-0 shadow-2xl">
              <div className="relative w-full aspect-video bg-gray-200 mb-4">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.alt}</h3>
                <p className="text-gray-600">{selectedImage.note}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallerySection;
