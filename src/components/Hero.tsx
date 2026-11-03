import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] radiant-purple-glow pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] radiant-cyan-glow pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[rgba(34,211,238,0.08)] border border-[rgba(34,211,238,0.25)] text-xs font-mono text-[#22D3EE]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
            </span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {/* Small Introduction */}
          <div className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#8B5CF6] uppercase">
            {PERSONAL_INFO.intro}
          </div>

          {/* Main Heading */}
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.12] tracking-tight text-[#F8FAFC]">
            Building <span className="heading-gradient">Intelligent Solutions</span> Through Code.
          </h1>

          {/* Subtitle */}
          <div className="font-mono text-sm sm:text-base text-[#22D3EE] font-medium">
            {PERSONAL_INFO.subtitle}
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
            {PERSONAL_INFO.description}
          </p>

          {/* Quick Education & University Anchor Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#94A3B8] pt-1">
            <span className="text-[#F8FAFC]">REVA University</span>
            <span aria-hidden="true" className="text-[#494454]">·</span>
            <span>3rd Semester</span>
            <span aria-hidden="true" className="text-[#494454]">·</span>
            <span>AI & Machine Learning</span>
          </div>

          {/* Two CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] rounded-xl hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 text-sm font-medium text-[#F8FAFC] bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(139,92,246,0.12)] border border-[rgba(255,255,255,0.12)] hover:border-[#8B5CF6] rounded-xl transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#22D3EE]" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
