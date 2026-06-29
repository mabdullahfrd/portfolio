import SectionWatermark from '../components/SectionWatermark';
import SectionReveal from '../components/SectionReveal';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#121212] transition-colors duration-300">
      <SectionWatermark text="ABOUT" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Row 1: Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionReveal>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#E53E3E] mb-3">
                ABOUT ME
              </p>
            </SectionReveal>
            <SectionReveal delay={1}>
              <h2 className="text-[clamp(36px,5vw,72px)] font-bold leading-tight tracking-tight text-[#1A1A1A] dark:text-white">
                Who I Am
              </h2>
            </SectionReveal>
          </div>
          <SectionReveal delay={2}>
            <p className="text-base text-[#666666] dark:text-zinc-400 max-w-[400px] leading-relaxed">
              Marketer, strategist, and AI enthusiast working at the intersection
              of technology and brand growth.
            </p>
          </SectionReveal>
        </div>

        {/* Row 2: Image + Bio */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <SectionReveal delay={1}>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/images/about-workspace.jpg"
                alt="Muhammad Abdullah Fareed at work"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white text-3xl font-bold leading-tight drop-shadow-lg">
                  Who
                  <br />
                  Am I?
                </p>
              </div>
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </SectionReveal>

          {/* Right: Bio */}
          <SectionReveal delay={2}>
            <div className="space-y-6">
              <p className="text-base text-[#666666] dark:text-zinc-400 leading-[1.7]">
                I'm passionate about marketing, AI, technology, and building ideas
                that create real impact. Over the years, I've worked on digital
                marketing projects, led community initiatives, organized youth-focused
                events, explored emerging technologies, and collaborated with people
                driven to learn and grow.
              </p>
              <p className="text-base text-[#666666] dark:text-zinc-400 leading-[1.7]">
                From fundraising campaigns and public speaking to robotics, AI, and
                brand building, every experience has taught me the value of adaptability
                and continuous learning. I'm particularly interested in the intersection
                of AI, marketing, innovation, and human potential.
              </p>
              <p className="text-base text-[#666666] dark:text-zinc-400 leading-[1.7]">
                I enjoy turning ideas into action, solving problems, and helping
                projects grow through creativity, strategy, and execution. Currently,
                I'm focused on expanding my expertise in digital marketing, AI, and
                entrepreneurship while sharing insights, experiences, and lessons
                along the way.
              </p>
              <p className="text-base text-[#1A1A1A] dark:text-gray-200 font-medium leading-[1.7] border-l-4 border-[#E53E3E] pl-4">
                Always open to meaningful conversations, collaborations, and
                opportunities that challenge me to grow and create value.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
