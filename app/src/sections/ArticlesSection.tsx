import SectionWatermark from '../components/SectionWatermark';
import SectionReveal from '../components/SectionReveal';
import { Clock, Calendar, ArrowUpRight, Tag } from 'lucide-react';

export interface Article {
  id: string;
  title: string;
  description: string;
  readingTime: string;
  publishDate: string;
  category: string;
  featured?: boolean;
  coverImage: string;
  readMoreUrl?: string;
}

// ── PLACEHOLDER DATA — connect to Medium / CMS / Dev.to later ──
const articles: Article[] = [
  {
    id: 'article-01',
    title: 'How AI Is Changing the Way We Build Personal Brands',
    description:
      'A deep dive into how artificial intelligence tools are enabling creators and entrepreneurs to scale their personal brand faster than ever — and what it means for authenticity.',
    readingTime: '6 min read',
    publishDate: 'Coming Soon',
    category: 'AI & Branding',
    featured: true,
    coverImage: '/images/career-1.jpg',
  },
  {
    id: 'article-02',
    title: 'The Intersection of Creativity and Technology in 2025',
    description:
      'Exploring how the lines between creative work and technical execution are blurring, and why the most valuable professionals will be those who can operate in both worlds.',
    readingTime: '5 min read',
    publishDate: 'Coming Soon',
    category: 'Technology',
    coverImage: '/images/career-2.jpg',
  },
  {
    id: 'article-03',
    title: 'What I Learned From Building My First AI-Powered Marketing Workflow',
    description:
      'Practical lessons from designing an end-to-end content automation pipeline — what worked, what failed, and what I would do differently.',
    readingTime: '8 min read',
    publishDate: 'Coming Soon',
    category: 'Marketing',
    coverImage: '/images/career-3.jpg',
  },
  {
    id: 'article-04',
    title: 'Why Brand Strategy Is the Most Underrated Skill for Entrepreneurs',
    description:
      'Most founders focus on product and growth while neglecting the one asset that makes everything else easier — a clear, compelling brand.',
    readingTime: '4 min read',
    publishDate: 'Coming Soon',
    category: 'Entrepreneurship',
    coverImage: '/images/career-4.jpg',
  },
  {
    id: 'article-05',
    title: 'From Idea to Execution: A Framework for Turning Concepts into Reality',
    description:
      'A personal framework I use to move from a raw idea to a shipped product or campaign — including how I validate, prioritise, and actually finish things.',
    readingTime: '7 min read',
    publishDate: 'Coming Soon',
    category: 'Product Building',
    coverImage: '/images/about-workspace.jpg',
  },
  {
    id: 'article-06',
    title: 'The Case for Being a Generalist in a World That Rewards Specialists',
    description:
      'Why having broad skills across marketing, technology, and creativity is not a weakness — and how to communicate your multidisciplinary value confidently.',
    readingTime: '5 min read',
    publishDate: 'Coming Soon',
    category: 'Personal Learnings',
    coverImage: '/images/career-2.jpg',
  },
];

const categoryColours: Record<string, string> = {
  'AI & Branding':     'bg-purple-50  text-purple-700  dark:bg-purple-900/20 dark:text-purple-300',
  'Technology':        'bg-blue-50    text-blue-700    dark:bg-blue-900/20   dark:text-blue-300',
  'Marketing':         'bg-green-50   text-green-700   dark:bg-green-900/20  dark:text-green-300',
  'Entrepreneurship':  'bg-amber-50   text-amber-700   dark:bg-amber-900/20  dark:text-amber-300',
  'Product Building':  'bg-rose-50    text-rose-700    dark:bg-rose-900/20   dark:text-rose-300',
  'Personal Learnings':'bg-zinc-100   text-zinc-600    dark:bg-zinc-800      dark:text-zinc-300',
};

function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const catColour = categoryColours[article.category] ?? 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300';

  return (
    <div
      className={`group flex flex-col bg-white dark:bg-zinc-900/70 border border-[#F0F0F0] dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-[#E53E3E]/25 hover:shadow-2xl hover:shadow-[#E53E3E]/5 hover:-translate-y-1.5 transition-all duration-400 ${
        featured ? 'md:flex-row md:col-span-2' : ''
      }`}
    >
      {/* Cover */}
      <div className={`relative overflow-hidden shrink-0 ${featured ? 'md:w-[45%] aspect-video md:aspect-auto' : 'aspect-video'}`}>
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {featured && (
          <span className="absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full bg-[#E53E3E] text-white">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta row */}
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${catColour}`}>
            <Tag size={10} />
            {article.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-[#AAAAAA] dark:text-zinc-500">
            <Clock size={11} />
            {article.readingTime}
          </span>
          <span className="flex items-center gap-1 text-xs text-[#AAAAAA] dark:text-zinc-500">
            <Calendar size={11} />
            {article.publishDate}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-[#1A1A1A] dark:text-white mb-2 group-hover:text-[#E53E3E] transition-colors duration-300 leading-snug ${featured ? 'text-xl' : 'text-base'}`}>
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#666666] dark:text-zinc-400 leading-relaxed flex-1 mb-5">
          {article.description}
        </p>

        {/* Read more */}
        <div className="mt-auto">
          {article.readMoreUrl ? (
            <a
              href={article.readMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E53E3E] hover:text-[#C53030] transition-colors group/link"
            >
              Read Article
              <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#CCCCCC] dark:text-zinc-600 cursor-not-allowed">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ArticlesSection() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <section
      id="articles"
      className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#0D0D0D] transition-colors duration-300"
    >
      <SectionWatermark text="WRITING" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E53E3E] mb-3">
                Articles & Insights
              </p>
            </SectionReveal>
            <SectionReveal delay={1}>
              <h2 className="text-[clamp(36px,5vw,68px)] font-bold leading-[1.05] tracking-tight text-[#1A1A1A] dark:text-white">
                Thinking Out Loud
              </h2>
            </SectionReveal>
          </div>
          <SectionReveal delay={2}>
            <div className="flex flex-col gap-3 max-w-[420px]">
              <p className="text-base text-[#666666] dark:text-zinc-400 leading-relaxed">
                Exploring ideas across AI, technology, branding, marketing, and
                the craft of building things that matter.
              </p>
              <div className="flex gap-2 flex-wrap">
                {['Medium', 'Dev.to', 'Personal Blog'].map((platform) => (
                  <span key={platform} className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F5F5F5] dark:bg-zinc-800 text-[#999999] dark:text-zinc-500 border border-dashed border-[#E0E0E0] dark:border-zinc-700">
                    {platform} — coming soon
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Placeholder notice */}
        <SectionReveal delay={1}>
          <div className="flex items-center gap-3 bg-amber-50 dark:bg-amber-900/15 border border-amber-200 dark:border-amber-800/30 rounded-xl px-5 py-3.5 mb-10 w-fit">
            <span className="text-amber-600 dark:text-amber-400 text-lg">✏️</span>
            <p className="text-xs font-medium text-amber-700 dark:text-amber-400">
              Placeholder articles — connect to Medium or your CMS when ready.
            </p>
          </div>
        </SectionReveal>

        {/* Featured + grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured && (
            <SectionReveal delay={1}>
              <ArticleCard article={featured} featured />
            </SectionReveal>
          )}
          {rest.map((article, i) => (
            <SectionReveal key={article.id} delay={Math.min(i + 1, 5) as 1|2|3|4|5}>
              <ArticleCard article={article} />
            </SectionReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <SectionReveal delay={3}>
          <div className="mt-14 text-center">
            <p className="text-sm text-[#999999] dark:text-zinc-500 mb-4">
              More articles coming soon. Follow on Medium to stay updated.
            </p>
            <a
              href="https://medium.com/@mabdullahfrd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] dark:text-white border border-[#E0E0E0] dark:border-zinc-700 px-6 py-3 rounded-full hover:border-[#E53E3E] hover:text-[#E53E3E] transition-all duration-300 hover:scale-105"
            >
              <ArrowUpRight size={15} />
              Read on Medium
            </a>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
