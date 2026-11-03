import React from 'react';
import { Terminal, Code, Cpu, Database, Layout, Sparkles, Layers, FileCode, Server } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'python':
        return <Terminal className="w-5 h-5 text-[#22D3EE]" />;
      case 'javascript':
        return <FileCode className="w-5 h-5 text-[#F59E0B]" />;
      case 'html':
        return <Layout className="w-5 h-5 text-[#EF4444]" />;
      case 'css':
        return <Code className="w-5 h-5 text-[#3B82F6]" />;
      case 'react':
        return <Sparkles className="w-5 h-5 text-[#22D3EE]" />;
      case 'flask':
        return <Server className="w-5 h-5 text-[#A078FF]" />;
      case 'supabase':
        return <Database className="w-5 h-5 text-[#10B981]" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-[#8B5CF6]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#C0C1FF]" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-[#5DE6FF]" />;
      default:
        return <Code className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-[#111318]/40 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-[#8B5CF6]">
            TECHNICAL EXPERTISE
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Technologies I Work With
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            A practical toolset spanning modern frontend interfaces, reliable backends, databases, and applied AI integration.
          </p>
        </div>

        {/* 4 Categorized Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl p-6 bg-[#131620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] hover:border-[rgba(139,92,246,0.3)] shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(255,255,255,0.06)]">
                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#F8FAFC]">
                    {cat.category}
                  </h3>
                  <span className="font-mono text-[10px] text-[#22D3EE] uppercase tracking-wider">
                    {cat.skills.length} Skills
                  </span>
                </div>

                {/* Skill Items */}
                <div className="space-y-3.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-[#0B0D12]/70 border border-[rgba(255,255,255,0.05)] hover:border-[rgba(139,92,246,0.25)] transition-colors group"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="p-1.5 rounded-lg bg-[#1A1E2E] group-hover:scale-105 transition-transform">
                          {getSkillIcon(skill.icon)}
                        </div>
                        <span className="font-['Space_Grotesk'] text-sm font-semibold text-[#F8FAFC]">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-xs text-[#94A3B8] leading-normal pl-8">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
