import SectionWatermark from '../components/SectionWatermark';
import SectionReveal from '../components/SectionReveal';

const careerImages = [
  { src: '/images/career-1.jpg', alt: 'Digital marketing analytics dashboard', title: 'Analytics' },
  { src: '/images/career-2.jpg', alt: 'Speaking at a youth tech event', title: 'Events' },
  { src: '/images/career-3.jpg', alt: 'Branding and design work', title: 'Branding' },
  { src: '/images/career-4.jpg', alt: 'AI and tech workspace', title: 'AI Tech' },
];

const services = [
  {
    title: 'Digital Marketing',
    description: 'Crafting data-driven marketing strategies, managing social media campaigns, SEO optimization, and content marketing for brand growth.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: 'AI & Technology',
    description: 'Exploring and implementing AI-powered tools for content creation, automation, audience analytics, and smarter marketing workflows.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Brand Strategy',
    description: 'Building brand identities, developing positioning strategies, and creating cohesive visual systems that resonate with target audiences.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-[#FAFAFA] to-white dark:from-[#121212] dark:via-[#18181B] dark:to-[#121212] transition-colors duration-300">
      <SectionWatermark text="CAREER" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionReveal>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#E53E3E] mb-3">
                EXPERIENCE
              </p>
            </SectionReveal>
            <SectionReveal delay={1}>
              <h2 className="text-[clamp(36px,5vw,72px)] font-bold leading-tight tracking-tight text-[#1A1A1A] dark:text-white">
                Career Timeline
              </h2>
            </SectionReveal>
          </div>
          <SectionReveal delay={2}>
            <p className="text-base text-[#666666] dark:text-zinc-400 max-w-[480px] leading-relaxed">
              Working independently with brands and companies, driving growth
              through AI, content, and strategic marketing.
            </p>
          </SectionReveal>
        </div>

        {/* Horizontal Gallery */}
        <SectionReveal delay={2}>
          <div className="gallery-scroll flex gap-6 pb-4 -mx-6 px-6">
            {careerImages.map((img, index) => (
              <div
                key={index}
                className="gallery-item flex-shrink-0 w-[280px] lg:w-[320px] group"
              >
                <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-lg">{img.title}</p>
                    <p className="text-white/70 text-sm mt-1">{img.alt}</p>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#E53E3E] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Services */}
        <SectionReveal delay={3}>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 border border-[#F0F0F0] dark:border-zinc-800 rounded-xl hover:border-[#E53E3E]/30 hover:shadow-xl hover:shadow-[#E53E3E]/5 transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-zinc-900"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-[#E53E3E]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E53E3E] group-hover:scale-110 transition-all duration-500">
                  <div className="text-[#E53E3E] group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white mb-2 group-hover:text-[#E53E3E] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-[#666666] dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
                {/* Animated line */}
                <div className="mt-4 h-0.5 bg-[#F0F0F0] dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-[#E53E3E] rounded-full group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
