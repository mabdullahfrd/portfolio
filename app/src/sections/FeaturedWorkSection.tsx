import { useState } from 'react';
import SectionWatermark from '../components/SectionWatermark';
import SectionReveal from '../components/SectionReveal';
import { Github, ExternalLink, BookOpen, Tag, ChevronDown, ChevronUp } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  challenge: string;
  solution: string;
  technologies: string[];
  status: 'Live' | 'In Progress' | 'Coming Soon' | 'Completed';
  tags: string[];
  coverImage: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudyUrl?: string;
}

// ── PLACEHOLDER DATA — replace each entry with real project details ──
const projects: Project[] = [
  {
    id: 'project-01',
    title: 'AI-Powered Brand Dashboard',
    shortDescription: 'A centralised dashboard that uses AI to surface brand health metrics, content performance, and audience sentiment in real time.',
    category: 'AI & Marketing',
    challenge: 'Brands struggle to get a unified view of how their content is performing across multiple platforms without spending hours in spreadsheets.',
    solution: 'Built an AI-powered dashboard that aggregates data from multiple sources, applies NLP sentiment analysis, and surfaces actionable insights in one clean interface.',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Node.js'],
    status: 'In Progress',
    tags: ['AI', 'Dashboard', 'Marketing', 'Analytics'],
    coverImage: '/images/about-workspace.jpg',
  },
  {
    id: 'project-02',
    title: 'Content Strategy Automation Tool',
    shortDescription: 'An AI workflow tool that generates, schedules, and optimises content ideas based on audience data and trending topics.',
    category: 'Content & Automation',
    challenge: 'Creating consistent, high-quality content at scale is time-consuming and often lacks strategic alignment with audience behaviour.',
    solution: 'Designed an automation pipeline that uses AI to analyse trending topics, generate content briefs, and suggest optimal publishing windows.',
    technologies: ['Python', 'OpenAI API', 'Make.com', 'Notion API', 'Zapier'],
    status: 'Coming Soon',
    tags: ['Automation', 'Content', 'AI', 'Productivity'],
    coverImage: '/images/career-1.jpg',
  },
  {
    id: 'project-03',
    title: 'Personal Brand Identity System',
    shortDescription: 'A complete visual and verbal identity system built for a multidisciplinary creator — including logo, typography, colour palette, and tone of voice guidelines.',
    category: 'Branding & Design',
    challenge: 'Communicating a multidisciplinary personal brand without it feeling scattered or inconsistent across touchpoints.',
    solution: 'Created a modular identity system with clear rules for how the brand expresses itself visually and verbally across digital and print contexts.',
    technologies: ['Figma', 'Adobe Illustrator', 'Notion', 'Framer'],
    status: 'Completed',
    tags: ['Branding', 'Identity', 'Design', 'Strategy'],
    coverImage: '/images/career-3.jpg',
  },
];

const statusColour: Record<Project['status'], string> = {
  'Live':        'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800',
  'In Progress': 'bg-blue-50  text-blue-700  border-blue-200  dark:bg-blue-900/20  dark:text-blue-400  dark:border-blue-800',
  'Coming Soon': 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800',
  'Completed':   'bg-zinc-50  text-zinc-700  border-zinc-200  dark:bg-zinc-800      dark:text-zinc-300  dark:border-zinc-700',
};

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group flex flex-col bg-white dark:bg-zinc-900/70 border border-[#F0F0F0] dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-[#E53E3E]/25 hover:shadow-2xl hover:shadow-[#E53E3E]/5 hover:-translate-y-1.5 transition-all duration-400">

      {/* Cover image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Status badge */}
        <span className={`absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColour[project.status]}`}>
          {project.status}
        </span>

        {/* Category badge */}
        <span className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full bg-black/40 text-white backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white mb-2 group-hover:text-[#E53E3E] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-[#666666] dark:text-zinc-400 leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#E53E3E] hover:text-[#C53030] transition-colors mb-3 self-start"
        >
          {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          {expanded ? 'Less detail' : 'See challenge & solution'}
        </button>

        {expanded && (
          <div className="space-y-3 mb-4 animate-fade-badge">
            <div className="bg-[#FFF5F5] dark:bg-[#E53E3E]/8 border border-[#FFE5E5] dark:border-[#E53E3E]/15 rounded-xl p-4">
              <p className="text-xs font-bold text-[#E53E3E] uppercase tracking-wider mb-1.5">Challenge</p>
              <p className="text-xs text-[#666666] dark:text-zinc-400 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="bg-[#F5FFF7] dark:bg-green-900/10 border border-[#D1FAE5] dark:border-green-800/30 rounded-xl p-4">
              <p className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wider mb-1.5">Solution</p>
              <p className="text-xs text-[#666666] dark:text-zinc-400 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F5F5F5] dark:bg-zinc-800 text-[#555555] dark:text-zinc-300 border border-[#EBEBEB] dark:border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex items-center gap-1.5 flex-wrap mb-5">
          <Tag size={11} className="text-[#AAAAAA] dark:text-zinc-600" />
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] text-[#AAAAAA] dark:text-zinc-600">
              #{tag}
            </span>
          ))}
        </div>

        {/* Action buttons — pushed to bottom */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-[#E0E0E0] dark:border-zinc-700 text-[#1A1A1A] dark:text-white hover:border-[#1A1A1A] dark:hover:border-zinc-400 hover:bg-[#F5F5F5] dark:hover:bg-zinc-800 transition-all duration-200"
            >
              <Github size={13} /> GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-dashed border-[#E0E0E0] dark:border-zinc-700 text-[#AAAAAA] dark:text-zinc-600 cursor-not-allowed">
              <Github size={13} /> Coming Soon
            </span>
          )}

          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] hover:bg-[#E53E3E] dark:hover:bg-[#E53E3E] dark:hover:text-white transition-all duration-200"
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-dashed border-[#E0E0E0] dark:border-zinc-700 text-[#AAAAAA] dark:text-zinc-600 cursor-not-allowed">
              <ExternalLink size={13} /> Coming Soon
            </span>
          )}

          {project.caseStudyUrl ? (
            <a
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-[#E53E3E] text-[#E53E3E] hover:bg-[#E53E3E] hover:text-white transition-all duration-200"
            >
              <BookOpen size={13} /> Case Study
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-dashed border-[#FFD5D5] dark:border-[#E53E3E]/25 text-[#FFAAAA] dark:text-[#E53E3E]/50 cursor-not-allowed">
              <BookOpen size={13} /> Case Study Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWorkSection() {
  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden bg-[#FAFAFA] dark:bg-[#111111] transition-colors duration-300"
    >
      <SectionWatermark text="WORK" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E53E3E] mb-3">
                Featured Work
              </p>
            </SectionReveal>
            <SectionReveal delay={1}>
              <h2 className="text-[clamp(36px,5vw,68px)] font-bold leading-[1.05] tracking-tight text-[#1A1A1A] dark:text-white">
                Things I've Built
              </h2>
            </SectionReveal>
          </div>
          <SectionReveal delay={2}>
            <p className="text-base text-[#666666] dark:text-zinc-400 max-w-[420px] leading-relaxed">
              A selection of projects that showcase how I combine AI, branding,
              content, and execution to build meaningful things.
            </p>
          </SectionReveal>
        </div>

        {/* Placeholder notice */}
        <SectionReveal delay={1}>
          <div className="flex items-center gap-3 bg-amber-50 dark:bg-amber-900/15 border border-amber-200 dark:border-amber-800/30 rounded-xl px-5 py-3.5 mb-10 w-fit">
            <span className="text-amber-600 dark:text-amber-400 text-lg">✏️</span>
            <p className="text-xs font-medium text-amber-700 dark:text-amber-400">
              Placeholder projects — replace with your real work when ready.
            </p>
          </div>
        </SectionReveal>

        {/* Project cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <SectionReveal key={project.id} delay={Math.min(i + 1, 5) as 1|2|3|4|5}>
              <ProjectCard project={project} />
            </SectionReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <SectionReveal delay={3}>
          <div className="mt-14 text-center">
            <p className="text-sm text-[#999999] dark:text-zinc-500 mb-4">
              More projects are in progress and will be added soon.
            </p>
            <a
              href="https://github.com/mabdullahfrd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] dark:text-white border border-[#E0E0E0] dark:border-zinc-700 px-6 py-3 rounded-full hover:border-[#E53E3E] hover:text-[#E53E3E] transition-all duration-300 hover:scale-105"
            >
              <Github size={16} />
              See all on GitHub
            </a>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
