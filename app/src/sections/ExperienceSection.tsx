import SectionWatermark from '../components/SectionWatermark';
import SectionReveal from '../components/SectionReveal';
import { Briefcase, Calendar, Award } from 'lucide-react';

const careerImages = [
  { src: '/images/career-1.jpg', alt: 'Digital marketing analytics dashboard', title: 'Analytics' },
  { src: '/images/career-2.jpg', alt: 'Speaking at a youth tech event',         title: 'Events' },
  { src: '/images/career-3.jpg', alt: 'Branding and design work',               title: 'Branding' },
  { src: '/images/career-4.jpg', alt: 'AI and tech workspace',                  title: 'AI Tech' },
];

const experiences = [
  {
    role: 'Freelance Digital Marketer & Brand Strategist',
    org: 'Independent / Various Clients',
    duration: '2022 – Present',
    description:
      'Working independently with startups and personal brands to build their digital presence through content strategy, SEO, social media campaigns, and AI-powered marketing workflows.',
    achievement: 'Helped multiple clients grow their organic reach by 3× within 6 months through data-driven content strategies.',
  },
  {
    role: 'Community Lead & Event Organiser',
    org: 'Youth Tech & Innovation Initiative',
    duration: '2021 – 2022',
    description:
      'Led community-building efforts for a youth-focused tech initiative, organising events, coordinating speakers, and driving engagement among students passionate about technology and entrepreneurship.',
    achievement: 'Successfully organised 5+ events with 200+ attendees, establishing a regional network of young innovators.',
  },
  {
    role: 'Brand & Content Creator',
    org: 'Self-Directed / Personal Brand',
    duration: '2020 – Present',
    description:
      'Building a multidisciplinary personal brand across LinkedIn, Instagram, Medium, and YouTube — exploring AI, marketing, branding, and entrepreneurship through content.',
    achievement: 'Growing an engaged community across platforms by sharing practical insights at the intersection of AI and marketing.',
  },
];

const services = [
  {
    title: 'Digital Growth Strategy',
    description:
      'I help brands turn their online presence into a growth engine. From SEO and content strategy to paid campaigns and analytics — I focus on what actually moves the needle, not just vanity metrics.',
    outcome: 'More visibility, more traffic, more conversions.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: 'AI-Powered Marketing',
    description:
      'I integrate AI tools into marketing workflows to automate repetitive tasks, accelerate content production, and surface sharper audience insights — so you can focus on strategy, not busywork.',
    outcome: 'Faster execution, smarter decisions, reduced overhead.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Brand Building & Identity',
    description:
      'I work with founders and businesses to define who they are and why it matters — crafting brand positioning, voice, visual direction, and narrative systems that resonate with the right audience.',
    outcome: 'A brand that stands out, connects deeply, and scales with you.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#FAFAFA] to-white dark:from-[#111111] dark:to-[#0D0D0D] transition-colors duration-300"
    >
      <SectionWatermark text="CAREER" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E53E3E] mb-3">
                Experience
              </p>
            </SectionReveal>
            <SectionReveal delay={1}>
              <h2 className="text-[clamp(36px,5vw,68px)] font-bold leading-[1.05] tracking-tight text-[#1A1A1A] dark:text-white">
                Career Timeline
              </h2>
            </SectionReveal>
          </div>
          <SectionReveal delay={2}>
            <p className="text-base text-[#666666] dark:text-zinc-400 max-w-[480px] leading-relaxed">
              Working independently with brands and companies, driving growth through
              AI, content, and strategic marketing.
            </p>
          </SectionReveal>
        </div>

        {/* ── Horizontal gallery ── */}
        <SectionReveal delay={2}>
          <div className="gallery-scroll flex gap-5 pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6 mb-20">
            {careerImages.map((img, i) => (
              <div key={i} className="gallery-item flex-shrink-0 w-[260px] lg:w-[300px] group">
                <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-bold text-base">{img.title}</p>
                    <p className="text-white/70 text-xs mt-1">{img.alt}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-9 h-9 bg-[#E53E3E] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* ── Timeline cards ── */}
        <div className="mb-24">
          <SectionReveal>
            <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white mb-10">
              Work History
            </h3>
          </SectionReveal>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-[#E5E5E5] dark:bg-zinc-800 hidden sm:block" />
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <SectionReveal key={exp.role} delay={Math.min(i + 1, 5) as 1|2|3|4|5}>
                  <div className="group relative sm:pl-14 hover:-translate-y-1 transition-transform duration-300">
                    {/* Timeline dot */}
                    <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-[#E5E5E5] dark:border-zinc-700 group-hover:border-[#E53E3E] items-center justify-center transition-colors duration-300 shadow-sm z-10">
                      <Briefcase size={15} className="text-[#999999] group-hover:text-[#E53E3E] transition-colors duration-300" />
                    </div>
                    <div className="bg-white dark:bg-zinc-900/70 border border-[#F0F0F0] dark:border-zinc-800 rounded-2xl p-6 hover:border-[#E53E3E]/25 hover:shadow-xl hover:shadow-[#E53E3E]/5 transition-all duration-400">
                      {/* Top row */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-base font-bold text-[#1A1A1A] dark:text-white group-hover:text-[#E53E3E] transition-colors duration-300">
                            {exp.role}
                          </h4>
                          <p className="text-sm font-medium text-[#666666] dark:text-zinc-400 mt-0.5">{exp.org}</p>
                        </div>
                        <span className="flex items-center gap-1.5 text-xs font-medium text-[#999999] dark:text-zinc-500 whitespace-nowrap shrink-0 bg-[#F5F5F5] dark:bg-zinc-800 px-3 py-1.5 rounded-full">
                          <Calendar size={11} />
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-sm text-[#666666] dark:text-zinc-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      {/* Achievement */}
                      <div className="flex items-start gap-2.5 bg-[#FFF5F5] dark:bg-[#E53E3E]/8 border border-[#FFE5E5] dark:border-[#E53E3E]/15 rounded-xl px-4 py-3">
                        <Award size={14} className="text-[#E53E3E] shrink-0 mt-0.5" />
                        <p className="text-xs font-medium text-[#C53030] dark:text-[#F87171] leading-relaxed">
                          {exp.achievement}
                        </p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>

        {/* ── Services ── */}
        <SectionReveal>
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E53E3E] mb-3">
              What I Offer
            </p>
            <h3 className="text-[clamp(28px,4vw,52px)] font-bold leading-tight tracking-tight text-[#1A1A1A] dark:text-white">
              How I Can Help You
            </h3>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={Math.min(i + 1, 5) as 1|2|3|4|5}>
              <div className="group h-full p-6 border border-[#F0F0F0] dark:border-zinc-800 rounded-2xl hover:border-[#E53E3E]/30 hover:shadow-xl hover:shadow-[#E53E3E]/5 transition-all duration-400 hover:-translate-y-2 bg-white dark:bg-zinc-900/60 flex flex-col">
                <div className="w-12 h-12 bg-[#FFF5F5] dark:bg-[#E53E3E]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#E53E3E] group-hover:scale-110 transition-all duration-400 shrink-0">
                  <div className="text-[#E53E3E] group-hover:text-white transition-colors duration-400">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-base font-bold text-[#1A1A1A] dark:text-white mb-3 group-hover:text-[#E53E3E] transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-sm text-[#666666] dark:text-zinc-400 leading-relaxed flex-1 mb-4">
                  {service.description}
                </p>
                {/* Outcome pill */}
                <div className="inline-flex items-center gap-1.5 bg-[#F5F5F5] dark:bg-zinc-800 text-[#555555] dark:text-zinc-300 text-xs font-semibold px-3 py-2 rounded-full self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E53E3E]" />
                  {service.outcome}
                </div>
                {/* Animated bottom line */}
                <div className="mt-5 h-0.5 bg-[#F0F0F0] dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-[#E53E3E] rounded-full group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
