import { useState } from 'react';
import SectionWatermark from '../components/SectionWatermark';
import SectionReveal from '../components/SectionReveal';
import { Mail, Linkedin, Github, Instagram, Youtube, ArrowUpRight, Send, CheckCircle } from 'lucide-react';

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);
const BehanceIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.454-1.729-5.454-5.675 0-3.91 2.304-5.819 5.387-5.819 3.003 0 4.881 1.791 5.303 4.403.083.516.107 1.201.097 2.158H14.18c.13 3.211 3.115 3.299 4.087 3.299 1.535 0 2.754-.813 3.159-1.963l2.3-.203zm-9.546-3.919h6.427c-.083-1.363-.977-2.439-2.897-2.439-1.824 0-2.918 1.063-3.53 2.439zM8.088 20H1.726V4h6.463c3.219 0 5.096 1.719 5.096 4.322 0 2.156-1.302 3.488-3.065 3.813v.068c2.075.21 3.459 1.634 3.459 3.875 0 3.022-2.217 4.922-5.591 4.922zm-.354-7.168H4.689v5.063h3.067c2.011 0 2.973-.906 2.973-2.531 0-1.625-1.003-2.532-2.995-2.532zm-.155-5.953H4.689v4.375h2.831c1.824 0 2.773-.781 2.773-2.188 0-1.5-.883-2.187-2.844-2.187z" />
  </svg>
);
const DribbbleIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.95-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.878c-.153-.9-.75-4.025-2.19-7.75l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.82zm-11.16-2.99c.235-.405 2.99-5.025 8.195-6.725.13-.04.26-.08.395-.115-.255-.575-.525-1.15-.81-1.705-5.04 1.505-9.93 1.445-10.375 1.435l-.005.275c0 2.615.99 5 2.6 6.835zm-2.36-9.065c.45.005 4.625.025 9.39-1.25-1.68-2.98-3.49-5.48-3.75-5.83-2.835 1.33-5.015 3.865-5.64 7.08zm7.58-7.56c.285.39 2.145 2.87 3.81 5.93 3.635-1.36 5.175-3.435 5.335-3.665-1.8-1.59-4.165-2.555-6.755-2.555-.825 0-1.63.1-2.4.29zm9.46 3.165c-.185.25-1.89 2.475-5.68 4.015.235.485.46.98.67 1.48.075.175.15.35.22.52 3.39-.425 6.76.26 7.1.32-.015-2.41-.885-4.62-2.31-6.335z" />
  </svg>
);
const MediumIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.52 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const socials = [
  { href: 'https://www.linkedin.com/in/mabdullahfrd',  label: 'LinkedIn',  Icon: Linkedin },
  { href: 'https://github.com/mabdullahfrd',            label: 'GitHub',    Icon: Github },
  { href: 'https://www.instagram.com/mabdullahfrd/',   label: 'Instagram', Icon: Instagram },
  { href: 'https://x.com/mabdullahfrd',                label: 'X',         Icon: XIcon },
  { href: 'https://www.youtube.com/@mabdullahfrd',     label: 'YouTube',   Icon: Youtube },
  { href: 'https://www.behance.net/mabdullahfrd',      label: 'Behance',   Icon: BehanceIcon },
  { href: 'https://dribbble.com/mabdullahfrd',         label: 'Dribbble',  Icon: DribbbleIcon },
  { href: 'https://medium.com/@mabdullahfrd',          label: 'Medium',    Icon: MediumIcon },
];

const helpOptions = [
  'Brand Strategy & Identity',
  'Digital Marketing',
  'AI Integration & Automation',
  'Content Strategy',
  'Product Building',
  'Consulting & Advisory',
  'Speaking Engagement',
  'Other',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  helpType: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', company: '', helpType: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /**
   * Connect to Formspree, Resend, or any backend here.
   * Replace the action attribute with your Formspree endpoint, or
   * replace this handler with a fetch() call to your API.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate network request — replace with real submission logic
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputBase =
    'w-full px-4 py-3 text-sm rounded-xl border border-[#E5E5E5] dark:border-zinc-700 bg-white dark:bg-zinc-900 text-[#1A1A1A] dark:text-white placeholder:text-[#BBBBBB] dark:placeholder:text-zinc-600 outline-none focus:border-[#E53E3E] focus:ring-2 focus:ring-[#E53E3E]/15 transition-all duration-200';

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#0D0D0D] transition-colors duration-300"
    >
      <SectionWatermark text="CONNECT" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E53E3E] mb-3">
                Get In Touch
              </p>
            </SectionReveal>
            <SectionReveal delay={1}>
              <h2 className="text-[clamp(36px,5vw,68px)] font-bold leading-[1.05] tracking-tight text-[#1A1A1A] dark:text-white">
                Let's Build Something
              </h2>
            </SectionReveal>
          </div>
          <SectionReveal delay={2}>
            <p className="text-base text-[#666666] dark:text-zinc-400 max-w-[420px] leading-relaxed">
              Have an idea, a project, or simply want to connect? I'd love to hear
              from you. Let's build something meaningful together.
            </p>
          </SectionReveal>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">

          {/* ── Contact Form ── */}
          <SectionReveal delay={1}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-[#F5FFF7] dark:bg-green-900/10 border border-[#D1FAE5] dark:border-green-800/30 rounded-2xl">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white mb-2">Message Sent!</h3>
                <p className="text-sm text-[#666666] dark:text-zinc-400 max-w-[300px]">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', helpType: '', message: '' }); }}
                  className="mt-6 text-sm font-semibold text-[#E53E3E] hover:text-[#C53030] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#555555] dark:text-zinc-400 mb-1.5 uppercase tracking-wide">
                      Full Name <span className="text-[#E53E3E]">*</span>
                    </label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange}
                      required placeholder="Muhammad Abdullah"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#555555] dark:text-zinc-400 mb-1.5 uppercase tracking-wide">
                      Email Address <span className="text-[#E53E3E]">*</span>
                    </label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      required placeholder="you@company.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#555555] dark:text-zinc-400 mb-1.5 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#555555] dark:text-zinc-400 mb-1.5 uppercase tracking-wide">
                      Company <span className="text-[#AAAAAA] font-normal normal-case">(optional)</span>
                    </label>
                    <input
                      type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Your company name"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* How can I help */}
                <div>
                  <label className="block text-xs font-semibold text-[#555555] dark:text-zinc-400 mb-1.5 uppercase tracking-wide">
                    How Can I Help You? <span className="text-[#E53E3E]">*</span>
                  </label>
                  <select
                    name="helpType" value={form.helpType} onChange={handleChange}
                    required
                    className={`${inputBase} cursor-pointer`}
                  >
                    <option value="" disabled>Select a service…</option>
                    {helpOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#555555] dark:text-zinc-400 mb-1.5 uppercase tracking-wide">
                    What Exactly Do You Need? <span className="text-[#E53E3E]">*</span>
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    required rows={5}
                    placeholder="Tell me about your project, goals, timeline, and any details that would help me understand what you're looking for…"
                    className={`${inputBase} resize-none leading-relaxed`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#E53E3E] text-white text-sm font-bold py-4 rounded-xl hover:bg-[#C53030] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-[#E53E3E]/25 active:scale-[0.99]"
                >
                  {submitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-[#AAAAAA] dark:text-zinc-600 text-center">
                  I typically respond within 24–48 hours.
                </p>
              </form>
            )}
          </SectionReveal>

          {/* ── Right sidebar ── */}
          <SectionReveal delay={2}>
            <div className="space-y-6">
              {/* Direct email CTA */}
              <div className="bg-[#1A1A1A] dark:bg-zinc-900 rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                  Prefer email?
                </p>
                <a
                  href="mailto:mabdullahfrd@gmail.com"
                  className="group flex items-center gap-3 hover:gap-4 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E53E3E] flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/50 mb-0.5">Email me directly</p>
                    <p className="text-sm font-semibold text-white truncate">mabdullahfrd@gmail.com</p>
                  </div>
                  <ArrowUpRight size={16} className="text-white/30 group-hover:text-white/70 shrink-0 transition-colors" />
                </a>
              </div>

              {/* Availability card */}
              <div className="border border-[#F0F0F0] dark:border-zinc-800 rounded-2xl p-6 bg-white dark:bg-zinc-900/50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                    Available for new projects
                  </p>
                </div>
                <p className="text-sm text-[#666666] dark:text-zinc-400 leading-relaxed">
                  Open to collaborations, brand partnerships, speaking engagements,
                  and projects that challenge me to grow and create value.
                </p>
              </div>

              {/* Social icons */}
              <div className="border border-[#F0F0F0] dark:border-zinc-800 rounded-2xl p-6 bg-white dark:bg-zinc-900/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#AAAAAA] dark:text-zinc-600 mb-4">
                  Find me on
                </p>
                <div className="flex flex-wrap gap-2">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] dark:border-zinc-700 rounded-full text-[#666666] dark:text-zinc-400 hover:border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

      </div>
    </section>
  );
}
