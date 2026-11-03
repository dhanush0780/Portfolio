import React from 'react';
import { GraduationCap, BookOpen, Brain, Sparkles, Code2, Rocket } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_CARDS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getCardIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BookOpen className="w-5 h-5 text-[#22D3EE]" />;
      case 1:
        return <GraduationCap className="w-5 h-5 text-[#8B5CF6]" />;
      case 2:
        return <Brain className="w-5 h-5 text-[#6366F1]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#22D3EE]" />;
    }
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 border-t border-[rgba(255,255,255,0.06)] bg-[#0B0D12]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-widest text-[#22D3EE]">
                BACKGROUND & ASPIRATIONS
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
                A Little About Me
              </h2>
            </div>

            {/* Paragraphs exactly as requested */}
            <div className="space-y-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              {PERSONAL_INFO.aboutParagraphs.map((para, i) => (
                <p key={i}>
                  {para}
                </p>
              ))}
            </div>

            {/* Core Drivers */}
            <div className="pt-2 flex flex-wrap gap-3 font-mono text-xs text-[#CBC3D7]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#131620] border border-[rgba(255,255,255,0.08)]">
                <Code2 className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>Hands-on Project Builder</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#131620] border border-[rgba(255,255,255,0.08)]">
                <Brain className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>AI & Full Stack Fusion</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#131620] border border-[rgba(255,255,255,0.08)]">
                <Rocket className="w-3.5 h-3.5 text-[#6366F1]" />
                <span>Continuous Learner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            {ABOUT_CARDS.map((card, idx) => (
              <div
                key={card.title}
                className="group p-6 rounded-2xl bg-[#131620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] hover:border-[rgba(139,92,246,0.35)] shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#0B0D12] border border-[rgba(255,255,255,0.06)] group-hover:border-[rgba(139,92,246,0.3)] transition-colors">
                    {getCardIcon(idx)}
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-[#94A3B8]">
                      {card.title}
                    </div>
                    <div className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#F8FAFC] mt-0.5">
                      {card.value}
                    </div>
                    <div className="font-mono text-xs text-[#22D3EE] mt-0.5">
                      {card.subtext}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
