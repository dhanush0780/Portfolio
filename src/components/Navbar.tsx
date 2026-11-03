import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0B0D12]/90 backdrop-blur-md border-[rgba(255,255,255,0.08)] py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'bg-[#0B0D12]/60 backdrop-blur-sm border-transparent py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-decoration-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8B5CF6] to-[#22D3EE] flex items-center justify-center text-white font-['Space_Grotesk'] font-bold text-base shadow-[0_0_15px_rgba(139,92,246,0.4)] group-hover:scale-105 transition-transform">
            D
          </div>
          <span className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#94A3B8]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#F8FAFC] font-semibold'
                    : 'hover:text-[#F8FAFC]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:-translate-y-0.5 active:translate-y-0 rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#94A3B8] hover:text-[#F8FAFC] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[rgba(255,255,255,0.08)] bg-[#0B0D12]/98 backdrop-blur-2xl px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-1 transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-[#22D3EE] font-semibold'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[rgba(255,255,255,0.08)]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-center text-sm font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] rounded-xl flex items-center justify-center gap-2"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
