import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, User, MessageSquare, Tag } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#111318]/50 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information & Profile Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-[#22D3EE]">
                GET IN TOUCH
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
                Let's Build Something Together
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                I'm always interested in connecting with developers, exploring opportunities, learning new technologies, and working on interesting projects.
              </p>
            </div>

            {/* Profile Info Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#131620]/80 border border-[rgba(255,255,255,0.08)] flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#0B0D12] text-[#8B5CF6]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] text-[#94A3B8]">Name</div>
                  <div className="font-['Space_Grotesk'] text-base font-bold text-[#F8FAFC]">
                    {PERSONAL_INFO.name}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#131620]/80 border border-[rgba(255,255,255,0.08)] flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#0B0D12] text-[#22D3EE]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] text-[#94A3B8]">Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm text-[#F8FAFC] hover:text-[#22D3EE] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Links: Email Me, GitHub, LinkedIn Placeholder */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-5 py-3 rounded-xl font-mono text-xs font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl font-mono text-xs font-medium text-[#F8FAFC] bg-[#131620] hover:bg-[#1A1E2E] border border-[rgba(255,255,255,0.1)] hover:border-[#8B5CF6] transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-[#22D3EE]" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinPlaceholderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl font-mono text-xs font-medium text-[#CBC3D7] bg-[#131620] hover:bg-[#1A1E2E] border border-[rgba(255,255,255,0.1)] hover:border-[#22D3EE] transition-all flex items-center gap-2"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#131620]/90 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8)]">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[rgba(34,211,238,0.1)] border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#F8FAFC]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#94A3B8] max-w-md">
                    Thank you, <span className="text-[#F8FAFC] font-semibold">{formData.name}</span>. Your message regarding "{formData.subject || 'Opportunity / Collaboration'}" has been received. I'll get back to you at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] bg-[#1A1E2E] rounded-lg border border-[rgba(255,255,255,0.08)]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-[#94A3B8]">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-[#0B0D12] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[rgba(139,92,246,0.2)] transition-all font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-[#94A3B8]">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full bg-[#0B0D12] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[rgba(139,92,246,0.2)] transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-[#94A3B8]">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship Opportunity / Project Collaboration"
                      className="w-full bg-[#0B0D12] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[rgba(139,92,246,0.2)] transition-all font-sans"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-[#94A3B8]">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Dhanush, I came across your portfolio and wanted to discuss..."
                      className="w-full bg-[#0B0D12] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[rgba(139,92,246,0.2)] transition-all font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-mono text-sm font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin text-sm">⟳</span>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
