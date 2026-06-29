import SectionWatermark from '../components/SectionWatermark';
import SectionReveal from '../components/SectionReveal';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        backgroundColor: '#FFFFFF',
      }}
    >
      <SectionWatermark text="CONNECT" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <SectionReveal>
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#E53E3E] mb-4 animate-pulse-soft">
            LET'S CONNECT
          </p>
        </SectionReveal>

        <SectionReveal delay={1}>
          <h2 className="text-[clamp(36px,5vw,72px)] font-bold leading-tight tracking-tight text-[#1A1A1A] mb-6">
            Get In Touch
          </h2>
        </SectionReveal>

        <SectionReveal delay={2}>
          <p className="text-base text-[#666666] max-w-[600px] mx-auto leading-relaxed mb-12">
            Open to collaborations, brand partnerships, speaking engagements,
            and projects that challenge me to grow and create value.
          </p>
        </SectionReveal>

        <SectionReveal delay={3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:mabdullahfrd@example.com"
              className="group inline-flex items-center gap-3 bg-[#1A1A1A] text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-[#E53E3E] transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#E53E3E]/20"
            >
              <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                <Mail size={14} />
              </span>
              <span>mabdullahfrd@example.com</span>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="mailto:hello@mabdullahfrd.dev"
              className="group inline-flex items-center gap-3 bg-white border border-[#E5E5E5] text-[#1A1A1A] text-sm font-medium px-8 py-4 rounded-full hover:border-[#1A1A1A] hover:shadow-lg transition-all duration-500 hover:scale-105"
            >
              <span className="w-8 h-8 flex items-center justify-center bg-[#F3F4F6] rounded-full group-hover:bg-[#E53E3E]/10 transition-colors">
                <Mail size={14} className="text-[#666666] group-hover:text-[#E53E3E] transition-colors" />
              </span>
              <span>hello@mabdullahfrd.dev</span>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </SectionReveal>

        {/* Social proof dots */}
        <SectionReveal delay={4}>
          <div className="flex items-center justify-center gap-2 mt-12">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#E5E5E5] animate-dot-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
