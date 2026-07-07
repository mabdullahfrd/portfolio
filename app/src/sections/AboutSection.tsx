import SectionWatermark from '../components/SectionWatermark';
import SectionReveal from '../components/SectionReveal';
import { Lightbulb, Rocket, BookOpen, Wrench, TrendingUp, RefreshCw, Zap } from 'lucide-react';

const driveItems = [
  { icon: Lightbulb,   label: 'Curiosity',             placeholder: 'What drives your curiosity? Replace this with your own words.' },
  { icon: Rocket,      label: 'Creativity',             placeholder: 'How does creativity shape the way you work and think?' },
  { icon: BookOpen,    label: 'Lifelong Learning',      placeholder: 'What does continuous learning mean to you personally?' },
  { icon: Wrench,      label: 'Solving Problems',       placeholder: 'What kinds of problems do you find most meaningful to solve?' },
  { icon: TrendingUp,  label: 'Building Products',      placeholder: 'What excites you about building useful things?' },
  { icon: RefreshCw,   label: 'Continuous Improvement', placeholder: 'How do you approach growth and self-improvement?' },
  { icon: Zap,         label: 'Ideas into Execution',   placeholder: 'What does turning an idea into reality mean to you?' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#0D0D0D] transition-colors duration-300"
    >
      <SectionWatermark text="ABOUT" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E53E3E] mb-3">
                About Me
              </p>
            </SectionReveal>
            <SectionReveal delay={1}>
              <h2 className="text-[clamp(36px,5vw,68px)] font-bold leading-[1.05] tracking-tight text-[#1A1A1A] dark:text-white">
                Who I Am
              </h2>
            </SectionReveal>
          </div>
          <SectionReveal delay={2}>
            <p className="text-base text-[#666666] dark:text-zinc-400 max-w-[400px] leading-relaxed">
              A multidisciplinary builder working at the intersection of technology,
              AI, branding, content, and execution.
            </p>
          </SectionReveal>
        </div>

        {/* ── Image + Bio ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">

          {/* Image */}
          <SectionReveal delay={1}>
            <div className="relative rounded-2xl overflow-hidden group shadow-lg">
              <img
                src="/images/about-workspace.jpg"
                alt="Muhammad Abdullah Fareed at work"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white text-3xl font-bold leading-tight drop-shadow-lg">
                  Who<br />Am I?
                </p>
              </div>
              {/* Shine sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>
          </SectionReveal>

          {/* Bio */}
          <SectionReveal delay={2}>
            <div className="space-y-5">
              <p className="text-base text-[#555555] dark:text-zinc-400 leading-[1.8]">
                I'm passionate about marketing, AI, technology, and building ideas that create
                real impact. Over the years I've worked on digital marketing projects, led
                community initiatives, organised youth-focused events, explored emerging
                technologies, and collaborated with people driven to learn and grow.
              </p>
              <p className="text-base text-[#555555] dark:text-zinc-400 leading-[1.8]">
                From fundraising campaigns and public speaking to robotics, AI, and brand
                building — every experience has taught me the value of adaptability and
                continuous learning.
              </p>
              <p className="text-base text-[#555555] dark:text-zinc-400 leading-[1.8]">
                I'm particularly interested in the intersection of AI, marketing, innovation,
                and human potential. I enjoy turning ideas into action, solving problems, and
                helping projects grow through creativity, strategy, and execution.
              </p>
              <p className="text-base text-[#555555] dark:text-zinc-400 leading-[1.8]">
                Currently focused on expanding my expertise in digital marketing, AI, and
                entrepreneurship while sharing insights, experiences, and lessons along the way.
              </p>
              {/* Pull quote */}
              <blockquote className="border-l-4 border-[#E53E3E] pl-5 py-1">
                <p className="text-base font-semibold text-[#1A1A1A] dark:text-white leading-[1.7]">
                  Always open to meaningful conversations, collaborations, and opportunities
                  that challenge me to grow and create value.
                </p>
              </blockquote>
            </div>
          </SectionReveal>
        </div>

        {/* ── What Drives Me ── */}
        <SectionReveal delay={1}>
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E53E3E] mb-3">
              What Drives Me
            </p>
            <h3 className="text-[clamp(28px,4vw,52px)] font-bold leading-tight tracking-tight text-[#1A1A1A] dark:text-white mb-3">
              The Values Behind the Work
            </h3>
            <p className="text-sm text-[#999999] dark:text-zinc-500 italic">
              ✏️ Placeholder — replace each card with your own writing later.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {driveItems.map(({ icon: Icon, label, placeholder }, i) => (
            <SectionReveal key={label} delay={Math.min((i % 4) + 1, 5) as 1 | 2 | 3 | 4 | 5}>
              <div className="group p-5 rounded-2xl border border-[#F0F0F0] dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-[#E53E3E]/30 hover:shadow-lg hover:shadow-[#E53E3E]/5 hover:-translate-y-1.5 transition-all duration-400">
                <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] dark:bg-[#E53E3E]/10 flex items-center justify-center mb-4 group-hover:bg-[#E53E3E] group-hover:scale-110 transition-all duration-300">
                  <Icon size={18} className="text-[#E53E3E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-sm font-bold text-[#1A1A1A] dark:text-white mb-2 group-hover:text-[#E53E3E] transition-colors duration-300">
                  {label}
                </h4>
                <p className="text-xs text-[#AAAAAA] dark:text-zinc-600 leading-relaxed italic">
                  {placeholder}
                </p>
                {/* Bottom accent line */}
                <div className="mt-4 h-0.5 bg-[#F5F5F5] dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-[#E53E3E] rounded-full group-hover:w-full transition-all duration-600" />
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
