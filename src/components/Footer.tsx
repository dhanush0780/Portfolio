import React from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#0B0D12] py-12 relative z-10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Main Footer Copy */}
          <div className="text-center sm:text-left space-y-1">
            <div className="font-['Space_Grotesk'] text-base font-bold text-[#F8FAFC]">
              Designed & Built by Dhanush T
            </div>
            <p className="text-xs text-[#94A3B8]">
              Building, Learning, and Growing with Technology.
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#131620] border border-[rgba(255,255,255,0.08)] hover:border-[#8B5CF6] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-[#131620] border border-[rgba(255,255,255,0.08)] hover:border-[#22D3EE] text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#131620] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
