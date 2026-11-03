import React from 'react';
import { Github, ExternalLink, GitFork, Star, Code2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, GITHUB_REPOSITORIES } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0B0D12] border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header & Main Profile Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#22D3EE]">
              OPEN SOURCE & REPOSITORIES
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
              Explore My Code
            </h2>
            <p className="text-base text-[#94A3B8] leading-relaxed">
              I believe in learning by building. Explore my repositories and follow my development journey.
            </p>
          </div>

          {/* Prominent Profile Button */}
          <div>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-mono text-sm font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2.5 whitespace-nowrap"
            >
              <Github className="w-5 h-5" />
              <span>github.com/{PERSONAL_INFO.githubUsername}</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>

        {/* 4 Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GITHUB_REPOSITORIES.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-[#131620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] hover:border-[rgba(139,92,246,0.4)] shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                    <Code2 className="w-4 h-4 text-[#8B5CF6]" />
                    <h3 className="font-['Space_Grotesk'] text-lg font-bold">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#22D3EE] transition-colors" />
                </div>

                <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[rgba(255,255,255,0.06)] text-xs font-mono">
                <span className="text-[#CBC3D7] bg-[#0B0D12] px-2.5 py-0.5 rounded border border-[rgba(255,255,255,0.05)]">
                  {repo.language}
                </span>
                <span className="text-[#8B5CF6] group-hover:underline">
                  View Repository ❯
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
