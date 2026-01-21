'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['hero', 'manifesto', 'cards', 'journey', 'gallery', 'cta'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', href: '#hero', id: 'hero' },
    { name: 'ইশতেহার', href: '#manifesto', id: 'manifesto' },
    { name: 'প্রতিশ্রুতি', href: '#cards', id: 'cards' },
    { name: 'যাত্রা', href: '#journey', id: 'journey' },
    { name: 'গ্যালারি', href: '#gallery', id: 'gallery' },
    { name: 'যোগাযোগ', href: '#cta', id: 'cta' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-md' 
        : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Brand */}
          <Link href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#063C2C] blur-lg opacity-30 group-hover:opacity-50 transition-opacity rounded-full"></div>
              <img 
                src="/sirajganjmaplogo.svg" 
                alt="Sirajganj Logo" 
                className="relative w-12 h-12 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className={`text-xl font-black transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>সাইফ মোস্তাফিজ</div>
              <div className={`text-xs transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>সিরাজগঞ্জ-৬</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-2 font-semibold transition-all duration-300 rounded-lg ${
                  activeSection === link.id
                    ? isScrolled
                      ? 'text-white bg-[#063C2C]'
                      : 'text-[#063C2C] bg-white'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-[#063C2C] hover:bg-gray-100' 
                      : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="#cta"
              onClick={(e) => scrollToSection(e, '#cta')}
              className={`px-6 py-3 font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isScrolled
                  ? 'bg-[#063C2C] text-white hover:bg-[#052f23]'
                  : 'bg-white text-[#063C2C] hover:bg-gray-100'
              }`}
            >
              ডোনেট করুন
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                  activeSection === link.id
                    ? isScrolled
                      ? 'bg-[#063C2C] text-white'
                      : 'bg-white text-[#063C2C]'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-[#063C2C] hover:bg-gray-100' 
                      : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#cta"
                onClick={(e) => scrollToSection(e, '#cta')}
                className={`block w-full text-center px-6 py-3 font-bold rounded-full transition-all duration-300 hover:shadow-lg ${
                  isScrolled
                    ? 'bg-[#063C2C] text-white hover:bg-[#052f23]'
                    : 'bg-white text-[#063C2C] hover:bg-gray-100'
                }`}
              >
                যোগাযোগ করুন
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
