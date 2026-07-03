import { useEffect, useState, useRef } from 'react';
import SectionWatermark from '../components/SectionWatermark';
import SectionReveal from '../components/SectionReveal';
import { Mail, Linkedin, Download, Github, Instagram, Youtube } from 'lucide-react';

// Twitter/X icon (not in lucide)
const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

// Behance icon
const BehanceIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.454-1.729-5.454-5.675 0-3.91 2.304-5.819 5.387-5.819 3.003 0 4.881 1.791 5.303 4.403.083.516.107 1.201.097 2.158H14.18c.13 3.211 3.115 3.299 4.087 3.299 1.535 0 2.754-.813 3.159-1.963l2.3-.203zm-9.546-3.919h6.427c-.083-1.363-.977-2.439-2.897-2.439-1.824 0-2.918 1.063-3.53 2.439zM8.088 20H1.726V4h6.463c3.219 0 5.096 1.719 5.096 4.322 0 2.156-1.302 3.488-3.065 3.813v.068c2.075.21 3.459 1.634 3.459 3.875 0 3.022-2.217 4.922-5.591 4.922zm-.354-7.168H4.689v5.063h3.067c2.011 0 2.973-.906 2.973-2.531 0-1.625-1.003-2.532-2.995-2.532zm-.155-5.953H4.689v4.375h2.831c1.824 0 2.773-.781 2.773-2.188 0-1.5-.883-2.187-2.844-2.187z" />
  </svg>
);

// Dribbble icon
const DribbbleIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.95-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.878c-.153-.9-.75-4.025-2.19-7.75l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.82zm-11.16-2.99c.235-.405 2.99-5.025 8.195-6.725.13-.04.26-.08.395-.115-.255-.575-.525-1.15-.81-1.705-5.04 1.505-9.93 1.445-10.375 1.435l-.005.275c0 2.615.99 5 2.6 6.835zm-2.36-9.065c.45.005 4.625.025 9.39-1.25-1.68-2.98-3.49-5.48-3.75-5.83-2.835 1.33-5.015 3.865-5.64 7.08zm7.58-7.56c.285.39 2.145 2.87 3.81 5.93 3.635-1.36 5.175-3.435 5.335-3.665-1.8-1.59-4.165-2.555-6.755-2.555-.825 0-1.63.1-2.4.29zm9.46 3.165c-.185.25-1.89 2.475-5.68 4.015.235.485.46.98.67 1.48.075.175.15.35.22.52 3.39-.425 6.76.26 7.1.32-.015-2.41-.885-4.62-2.31-6.335z" />
  </svg>
);

// Medium icon
const MediumIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.52 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [ref, setRef] = useState<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, end]);

  return (
    <span ref={setRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {

  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-white to-[#F8F9FA] dark:from-[#121212] dark:to-[#1A1A1A] group transition-colors duration-300"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out filter grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-50"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4" type="video/mp4" />
        </video>
        {/* Soft overlay to ensure readability of text */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-[#F8F9FA]/90 dark:from-[#121212]/90 dark:via-[#121212]/85 dark:to-[#1A1A1A]/95 group-hover:from-white/70 group-hover:via-white/65 group-hover:to-[#F8F9FA]/70 dark:group-hover:from-[#121212]/70 dark:group-hover:via-[#121212]/60 dark:group-hover:to-[#1A1A1A]/75 transition-all duration-1000 ease-in-out" />
      </div>
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#E53E3E]/20 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <SectionWatermark text="MUHAMMAD" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="relative">
            <SectionReveal>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#666666] dark:text-zinc-400 mb-4">
                HY! I AM
              </p>
            </SectionReveal>

            <SectionReveal delay={1}>
              <h1 className="text-[clamp(48px,7vw,90px)] font-extrabold leading-[0.95] tracking-tight text-[#1A1A1A] dark:text-white mb-6">
                <span className="inline-block animate-slide-right">Muhammad</span>
                <br />
                <span className="inline-block animate-slide-right" style={{ animationDelay: '0.15s' }}>
                  Abdullah Fareed
                </span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={2}>
              <p className="text-base text-[#666666] dark:text-zinc-400 leading-relaxed max-w-[480px] mb-8">
                I turn ideas into growth through AI, content, branding, and execution.
                Building brands, exploring emerging tech, and helping projects scale
                through creativity and strategy.
              </p>
            </SectionReveal>

            {/* Keywords - Glass Pills */}
            <SectionReveal delay={3}>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  'Brand Strategist',
                  'AI Innovator',
                  'Creative Visionary',
                  'Growth Architect',
                  'Content Craftsman',
                  'Entrepreneur',
                  'Tech Explorer',
                ].map((keyword, i) => (
                  <span
                    key={keyword}
                    className="px-4 py-2 text-sm font-medium rounded-xl backdrop-blur-md bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/15 text-[#1A1A1A] dark:text-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/60 dark:hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default animate-fade-badge"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={4}>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#E53E3E] text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-[#C53030] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E53E3E]/25 animate-pulse-soft"
                >
                  Get in touch
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 border border-[#E5E5E5] dark:border-zinc-800 text-[#1A1A1A] dark:text-white text-sm font-medium px-7 py-3 rounded-full hover:border-[#1A1A1A] dark:hover:border-zinc-500 hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </SectionReveal>

            <SectionReveal delay={5}>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm text-[#999999]">Find me on:</span>
                <div className="flex items-center gap-2 flex-wrap">
                  {[
                    { href: 'mailto:mabdullahfrd@gmail.com', label: 'Email', Icon: Mail },
                    { href: 'https://linkedin.com/in/mabdullahfrd', label: 'LinkedIn', Icon: Linkedin },
                    { href: 'https://github.com/mabdullahfrd', label: 'GitHub', Icon: Github },
                    { href: 'https://instagram.com/mabdullahfrd', label: 'Instagram', Icon: Instagram },
                    { href: 'https://x.com/mabdullahfrd', label: 'Twitter/X', Icon: XIcon },
                    { href: 'https://youtube.com/@mabdullahfrd', label: 'YouTube', Icon: Youtube },
                    { href: 'https://www.behance.net/mabdullahfrd', label: 'Behance', Icon: BehanceIcon },
                    { href: 'https://dribbble.com/mabdullahfrd', label: 'Dribbble', Icon: DribbbleIcon },
                    { href: 'https://medium.com/@mabdullahfrd', label: 'Medium', Icon: MediumIcon },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] dark:border-zinc-600 rounded-full text-[#666666] dark:text-white hover:border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={label}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column */}
          <div className="relative flex flex-col items-center">
            <SectionReveal delay={2}>
              <div className="relative group">
                {/* Red background circle with pulse */}
                <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[85%] aspect-square bg-[#E53E3E] rounded-full -z-10 animate-pulse-ring" />
                <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[85%] aspect-square bg-[#E53E3E]/30 rounded-full -z-10 animate-pulse-ring delay-500" />

                {/* Portrait */}
                <img
                  src="/images/hero-portrait.png"
                  alt="Muhammad Abdullah Fareed"
                  className="relative z-10 w-full max-w-[380px] lg:max-w-[420px] mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </SectionReveal>

            {/* Stats Row - Glass Style */}
            <SectionReveal delay={3}>
              <div className="mt-6 flex gap-4 w-full max-w-[420px] justify-center">
                {[
                  { value: 25, suffix: '+', label: 'Projects' },
                  { value: 3, suffix: '+', label: 'Years Exp.' },
                  { value: 50, suffix: '+', label: 'Collabs' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 text-center px-4 py-4 rounded-2xl backdrop-blur-md bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/60 dark:hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  >
                    <p className="text-2xl font-bold text-[#1A1A1A] dark:text-white">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs font-medium uppercase tracking-wider text-[#999999] dark:text-zinc-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
