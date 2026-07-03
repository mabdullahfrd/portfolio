import SectionWatermark from '../components/SectionWatermark';
import SectionReveal from '../components/SectionReveal';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Muhammad's approach to blending AI with marketing strategy completely transformed how we think about digital growth and audience engagement. His insights are always practical and forward-thinking.",
    name: 'Ahmed Hassan',
    role: 'Brand Director, TechVentures',
    image: '/images/testimonial-portrait.jpg',
  },
  {
    quote:
      "Working with Muhammad Abdullah Fareed was a game-changer for our brand. His ability to understand market dynamics and craft compelling narratives helped us double our online presence in just months.",
    name: 'Sarah Mitchell',
    role: 'Founder, GrowthLabs',
    image: '/images/testimonial-portrait.jpg',
  },
  {
    quote:
      "Muhammad brings a rare combination of creative thinking and strategic execution. His passion for emerging tech and marketing innovation makes him an invaluable collaborator.",
    name: 'David Chen',
    role: 'CMO, InnovateScale',
    image: '/images/testimonial-portrait.jpg',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 300);
  };

  const next = () => goTo((current + 1) % testimonials.length);
  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#121212] transition-colors duration-300">
      <SectionWatermark text="WORDS" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#E53E3E] mb-8">
            TESTIMONIALS
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Quote */}
          <div>
            <SectionReveal delay={1}>
              <div className={`mb-8 transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <Quote size={48} className="text-[#E53E3E]/30 mb-4" />
                <p className="text-[clamp(20px,3vw,42px)] font-semibold leading-[1.35] text-[#1A1A1A]">
                  {t.quote}
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={2}>
              <div className={`flex items-center gap-4 transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div>
                  <p className="text-lg font-semibold text-[#1A1A1A]">{t.name}</p>
                  <p className="text-base text-[#666666]">{t.role}</p>
                </div>
              </div>
              <div className="w-[60px] h-[3px] bg-[#E53E3E] mt-3 animate-expand-width" />
            </SectionReveal>

            {/* Navigation */}
            <SectionReveal delay={3}>
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] rounded-full hover:border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white group transition-all duration-300 hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} className="text-[#666666] group-hover:text-white transition-colors" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] rounded-full hover:border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white group transition-all duration-300 hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} className="text-[#666666] group-hover:text-white transition-colors" />
                </button>
                <span className="text-sm text-[#999999] ml-2 font-medium">
                  {current + 1} / {testimonials.length}
                </span>
              </div>
            </SectionReveal>
          </div>

          {/* Portrait */}
          <SectionReveal delay={2}>
            <div className="hidden lg:block relative">
              <div className={`relative transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                {/* Red accent behind */}
                <div className="absolute -top-3 -right-3 w-[200px] h-[240px] bg-[#E53E3E] rounded-2xl -z-10 rotate-3 group-hover:rotate-6 transition-transform" />
                <div className="w-[200px] h-[240px] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current ? 'w-8 bg-[#E53E3E]' : 'w-2 bg-[#E5E5E5] hover:bg-[#999999]'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
