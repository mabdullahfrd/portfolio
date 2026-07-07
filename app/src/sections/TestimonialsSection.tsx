import SectionWatermark from '../components/SectionWatermark';
import SectionReveal from '../components/SectionReveal';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, ExternalLink } from 'lucide-react';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  linkedinUrl?: string;
}

// ── Add more testimonials here as they come in ──
const testimonials: Testimonial[] = [
  {
    quote:
      "Muhammad's approach to blending AI with marketing strategy completely transformed how we think about digital growth and audience engagement. His insights are always practical and forward-thinking.",
    name: 'Ahmed Hassan',
    role: 'Brand Director',
    company: 'TechVentures',
    image: '/images/testimonial-portrait.jpg',
    linkedinUrl: undefined,
  },
  {
    quote:
      "Working with Muhammad was a game-changer for our brand. His ability to understand market dynamics and craft compelling narratives helped us double our online presence in just a few months.",
    name: 'Sarah Mitchell',
    role: 'Founder',
    company: 'GrowthLabs',
    image: '/images/testimonial-portrait.jpg',
    linkedinUrl: undefined,
  },
  {
    quote:
      "Muhammad brings a rare combination of creative thinking and strategic execution. His passion for emerging tech and marketing innovation makes him an invaluable collaborator.",
    name: 'David Chen',
    role: 'CMO',
    company: 'InnovateScale',
    image: '/images/testimonial-portrait.jpg',
    linkedinUrl: undefined,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (index: number) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 250);
  };

  const next = () => goTo((current + 1) % testimonials.length);
  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden bg-[#FAFAFA] dark:bg-[#111111] transition-colors duration-300"
    >
      <SectionWatermark text="WORDS" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E53E3E] mb-3">
                Testimonials
              </p>
            </SectionReveal>
            <SectionReveal delay={1}>
              <h2 className="text-[clamp(36px,5vw,68px)] font-bold leading-[1.05] tracking-tight text-[#1A1A1A] dark:text-white">
                What People Say
              </h2>
            </SectionReveal>
          </div>
          <SectionReveal delay={2}>
            <p className="text-base text-[#666666] dark:text-zinc-400 max-w-[400px] leading-relaxed">
              Kind words from people I've worked and collaborated with.
            </p>
          </SectionReveal>
        </div>

        {/* Testimonial card */}
        <SectionReveal delay={1}>
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-start">

            {/* Quote block */}
            <div
              className={`bg-white dark:bg-zinc-900/70 border border-[#F0F0F0] dark:border-zinc-800 rounded-2xl p-8 sm:p-10 transition-all duration-250 ${
                fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              <Quote size={40} className="text-[#E53E3E]/20 mb-5" />
              <blockquote className="text-[clamp(18px,2.5vw,26px)] font-semibold leading-[1.45] text-[#1A1A1A] dark:text-white mb-8">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E53E3E]/20 shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-[#1A1A1A] dark:text-white">{t.name}</p>
                    {t.linkedinUrl && (
                      <a
                        href={t.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#AAAAAA] dark:text-zinc-600 hover:text-[#E53E3E] transition-colors"
                        aria-label={`${t.name} on LinkedIn`}
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-[#666666] dark:text-zinc-400">
                    {t.role}, <span className="font-medium text-[#1A1A1A] dark:text-zinc-300">{t.company}</span>
                  </p>
                </div>
              </div>

              {/* Red accent line */}
              <div className="mt-6 h-0.5 w-14 bg-[#E53E3E] rounded-full" />
            </div>

            {/* Nav sidebar */}
            <div className="flex lg:flex-col gap-3 items-center lg:items-start lg:pt-4">
              {/* Prev / Next */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] dark:border-zinc-700 rounded-full text-[#666666] dark:text-zinc-400 hover:border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={17} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] dark:border-zinc-700 rounded-full text-[#666666] dark:text-zinc-400 hover:border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={17} />
                </button>
              </div>

              {/* Counter */}
              <span className="text-sm font-semibold text-[#999999] dark:text-zinc-500 tabular-nums">
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>

              {/* Dot indicators */}
              <div className="flex lg:flex-col gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`rounded-full transition-all duration-400 ${
                      i === current
                        ? 'bg-[#E53E3E] w-6 h-2 lg:w-2 lg:h-6'
                        : 'bg-[#E0E0E0] dark:bg-zinc-700 w-2 h-2 hover:bg-[#BBBBBB]'
                    }`}
                  />
                ))}
              </div>

              {/* Thumbnail stack */}
              <div className="hidden lg:flex flex-col gap-3 mt-4">
                {testimonials.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`flex items-center gap-3 text-left p-3 rounded-xl transition-all duration-300 ${
                      i === current
                        ? 'bg-white dark:bg-zinc-900 border border-[#E53E3E]/25 shadow-sm'
                        : 'hover:bg-white/60 dark:hover:bg-zinc-900/40'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`w-9 h-9 rounded-full object-cover transition-all duration-300 ${
                        i === current ? 'ring-2 ring-[#E53E3E]' : 'opacity-50'
                      }`}
                    />
                    <div>
                      <p className={`text-xs font-bold leading-tight ${i === current ? 'text-[#1A1A1A] dark:text-white' : 'text-[#AAAAAA] dark:text-zinc-600'}`}>
                        {item.name}
                      </p>
                      <p className="text-[10px] text-[#BBBBBB] dark:text-zinc-600">{item.company}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
