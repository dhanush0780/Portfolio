import React from 'react';
import { Github, FileText, CalendarCheck, Package, Trophy, Ticket, ArrowUpRight } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  // Custom visual illustration for each project thumbnail
  const renderProjectVisual = (id: string) => {
    switch (id) {
      case 'ai-resume-analyzer':
        return (
          <div className="h-44 w-full rounded-xl bg-gradient-to-br from-[#1A1E2E] via-[#131620] to-[#0B0D12] p-4 flex flex-col justify-between border border-[rgba(139,92,246,0.2)] relative overflow-hidden group-hover:border-[rgba(139,92,246,0.4)] transition-colors">
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#8B5CF6]/15 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#22D3EE] bg-[#0B0D12] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.06)]">
                AI / Flask / PDF
              </span>
              <div className="p-1.5 rounded-lg bg-[#8B5CF6]/20 text-[#8B5CF6]">
                <FileText className="w-4 h-4" />
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0B0D12]/80 border border-[rgba(255,255,255,0.05)] space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#94A3B8]">Candidate Evaluation</span>
                <span className="text-[#22D3EE] font-bold">88 / 100</span>
              </div>
              <div className="w-full bg-[#1A1E2E] h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] h-full w-[88%]" />
              </div>
              <div className="text-[10px] font-mono text-[#22c55e]">✓ ATS Keyphrases Verified</div>
            </div>
          </div>
        );

      case 'assignment-tracker':
        return (
          <div className="h-44 w-full rounded-xl bg-gradient-to-br from-[#1A1E2E] via-[#131620] to-[#0B0D12] p-4 flex flex-col justify-between border border-[rgba(34,211,238,0.2)] relative overflow-hidden group-hover:border-[rgba(34,211,238,0.4)] transition-colors">
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#22D3EE]/15 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#22D3EE] bg-[#0B0D12] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.06)]">
                React / Supabase
              </span>
              <div className="p-1.5 rounded-lg bg-[#22D3EE]/20 text-[#22D3EE]">
                <CalendarCheck className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-1.5 font-sans">
              <div className="p-2 rounded bg-[#0B0D12]/80 border border-[rgba(255,255,255,0.05)] flex items-center justify-between">
                <span className="text-xs text-[#F8FAFC]">AI Algorithms Lab</span>
                <span className="text-[10px] font-mono text-[#ff8080] bg-[#ef4444]/15 px-1.5 py-0.5 rounded">Due Tomorrow</span>
              </div>
              <div className="p-2 rounded bg-[#0B0D12]/80 border border-[rgba(255,255,255,0.05)] flex items-center justify-between">
                <span className="text-xs text-[#94A3B8]">Database Systems Review</span>
                <span className="text-[10px] font-mono text-[#22c55e] bg-[#22c55e]/15 px-1.5 py-0.5 rounded">Completed</span>
              </div>
            </div>
          </div>
        );

      case 'subscription-box':
        return (
          <div className="h-44 w-full rounded-xl bg-gradient-to-br from-[#1A1E2E] via-[#131620] to-[#0B0D12] p-4 flex flex-col justify-between border border-[rgba(160,120,255,0.2)] relative overflow-hidden group-hover:border-[rgba(160,120,255,0.4)] transition-colors">
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#A078FF]/15 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#A078FF] bg-[#0B0D12] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.06)]">
                Full-Stack Commerce
              </span>
              <div className="p-1.5 rounded-lg bg-[#A078FF]/20 text-[#A078FF]">
                <Package className="w-4 h-4" />
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0B0D12]/80 border border-[rgba(255,255,255,0.05)]">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold text-[#F8FAFC]">Curated Tech Crate</span>
                <span className="font-mono text-[#22D3EE]">Monthly</span>
              </div>
              <div className="flex gap-1.5 mt-2">
                <span className="text-[9px] font-mono bg-[#1A1E2E] px-2 py-0.5 rounded text-[#CBC3D7]">Hardware</span>
                <span className="text-[9px] font-mono bg-[#1A1E2E] px-2 py-0.5 rounded text-[#CBC3D7]">Books</span>
                <span className="text-[9px] font-mono bg-[#1A1E2E] px-2 py-0.5 rounded text-[#CBC3D7]">Electronics</span>
              </div>
            </div>
          </div>
        );

      case 'ipl-booking':
        return (
          <div className="h-44 w-full rounded-xl bg-gradient-to-br from-[#1A1E2E] via-[#131620] to-[#0B0D12] p-4 flex flex-col justify-between border border-[rgba(245,158,11,0.2)] relative overflow-hidden group-hover:border-[rgba(245,158,11,0.4)] transition-colors">
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#F59E0B]/15 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#F59E0B] bg-[#0B0D12] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.06)]">
                Ticket Booking
              </span>
              <div className="p-1.5 rounded-lg bg-[#F59E0B]/20 text-[#F59E0B]">
                <Trophy className="w-4 h-4" />
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0B0D12]/80 border border-[rgba(255,255,255,0.05)] flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-[#F8FAFC]">RCB vs CSK · Bangalore</div>
                <div className="font-mono text-[10px] text-[#94A3B8]">Chinnaswamy Pavilion Stand</div>
              </div>
              <span className="text-xs font-mono text-[#22D3EE] font-bold">₹2,500</span>
            </div>
          </div>
        );

      case 'college-fest':
        return (
          <div className="h-44 w-full rounded-xl bg-gradient-to-br from-[#1A1E2E] via-[#131620] to-[#0B0D12] p-4 flex flex-col justify-between border border-[rgba(236,72,153,0.2)] relative overflow-hidden group-hover:border-[rgba(236,72,153,0.4)] transition-colors">
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#EC4899]/15 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#EC4899] bg-[#0B0D12] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.06)]">
                Event Booking
              </span>
              <div className="p-1.5 rounded-lg bg-[#EC4899]/20 text-[#EC4899]">
                <Ticket className="w-4 h-4" />
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0B0D12]/80 border border-[rgba(255,255,255,0.05)] flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-[#F8FAFC]">REVA University Festival</div>
                <div className="font-mono text-[10px] text-[#94A3B8]">Delegate Pass + Concert Access</div>
              </div>
              <span className="text-[10px] font-mono text-[#EC4899] bg-[#EC4899]/15 px-2 py-0.5 rounded">All-Access</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-[#0B0D12]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-[#22D3EE]">
            FEATURED PORTFOLIO
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Things I've Built
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Practical applications spanning AI resume parsing, academic productivity tools, e-commerce subscription platforms, and ticketing portals.
          </p>
        </div>

        {/* 5 Projects Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            const targetUrl = project.githubUrl || PERSONAL_INFO.githubUrl;

            return (
              <div
                key={project.id}
                className={`group rounded-2xl p-6 bg-[#131620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] hover:border-[rgba(139,92,246,0.4)] shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Project Thumbnail / Illustration */}
                  <div className="mb-5">
                    {renderProjectVisual(project.id)}
                  </div>

                  {/* Project Header */}
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                      {project.name}
                    </h3>
                    <span className="font-mono text-[11px] text-[#8B5CF6] bg-[#0B0D12] px-2 py-0.5 rounded border border-[rgba(139,92,246,0.25)]">
                      {project.badge}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-[#CBC3D7] bg-[#0B0D12] border border-[rgba(255,255,255,0.06)] px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button: Dedicated GitHub Button */}
                  <div className="pt-2 border-t border-[rgba(255,255,255,0.06)]">
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <Github className="w-4 h-4 text-[#22D3EE]" />
                      <span>View on GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
