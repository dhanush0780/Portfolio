import React from 'react';
import { GraduationCap, School, BookOpen, Calendar, Award } from 'lucide-react';
import { EDUCATION_TIMELINE } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'school':
        return <School className="w-5 h-5 text-[#22D3EE]" />;
      case 'university':
        return <GraduationCap className="w-5 h-5 text-[#8B5CF6]" />;
      case 'specialization':
        return <Award className="w-5 h-5 text-[#5DE6FF]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="education" className="relative py-20 lg:py-28 bg-[#111318]/40 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-[#8B5CF6]">
            ACADEMIC BACKGROUND
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            My Education Journey
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Academic milestones shaping my foundations in Computer Science, Artificial Intelligence, and Software Engineering.
          </p>
        </div>

        {/* Vertical Timeline with Connectors */}
        <div className="relative pl-6 sm:pl-10 space-y-10 max-w-4xl mx-auto">
          {/* Vertical 2px Spine Track */}
          <div className="absolute top-4 bottom-4 left-[11px] sm:left-[19px] w-[2px] bg-gradient-to-b from-[#22D3EE] via-[#8B5CF6] to-[#6366F1]" />

          {EDUCATION_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Concentric Timeline Node */}
              <div className="absolute -left-[24px] sm:-left-[32px] top-2 flex items-center justify-center">
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#8B5CF6]/40 group-hover:scale-125 transition-transform" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#0B0D12] border-2 border-[#8B5CF6] group-hover:border-[#22D3EE] group-hover:bg-[#22D3EE] transition-colors" />
                </div>
              </div>

              {/* Milestone Card */}
              <div className="rounded-2xl p-6 sm:p-7 bg-[#131620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] hover:border-[rgba(139,92,246,0.35)] shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#0B0D12] border border-[rgba(255,255,255,0.06)]">
                      {getIcon(item.iconType)}
                    </div>
                    <div>
                      <div className="font-mono text-xs text-[#22D3EE]">
                        {item.period}
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F8FAFC]">
                        {item.institution}
                      </h3>
                    </div>
                  </div>

                  {item.statusBadge && (
                    <span className="font-mono text-xs text-[#8B5CF6] bg-[#8B5CF6]/10 px-3 py-1 rounded-full border border-[#8B5CF6]/30 self-start sm:self-center">
                      {item.statusBadge}
                    </span>
                  )}
                </div>

                <div className="font-mono text-xs text-[#CBC3D7] font-medium mt-2">
                  Stage: {item.stage}
                </div>

                <p className="text-sm text-[#94A3B8] leading-relaxed mt-2">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
