/**
 * ProjectDetailPage — Reusable project detail template.
 *
 * HOW TO USE:
 * 1. Duplicate this file or import it with real data via props / route params.
 * 2. Replace every PLACEHOLDER comment with real content.
 * 3. Add the route in your router (e.g. /projects/:id) and pass project data.
 */

import { ArrowLeft, Github, ExternalLink, BookOpen } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

export interface ProjectDetail {
  title: string;
  tagline: string;
  category: string;
  status: string;
  heroImage: string;
  overview: string;
  problem: string;
  approach: string[];
  solution: string;
  technologies: string[];
  screenshots: { src: string; caption: string }[];
  results: string[];
  lessonsLearned: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  relatedProjects?: { id: string; title: string; category: string; coverImage: string }[];
}

// ── PLACEHOLDER DATA — replace with real project data ──
const placeholderProject: ProjectDetail = {
  title: 'Project Title',
  tagline: 'One-line description of what this project does and why it matters.',
  category: 'Category',
  status: 'In Progress',
  heroImage: '/images/about-workspace.jpg',
  overview:
    'PLACEHOLDER — Write a 2–3 sentence overview of the project. What is it, who is it for, and what problem does it solve?',
  problem:
    'PLACEHOLDER — Describe the specific problem you set out to solve. What pain point existed before this project? Why did it matter?',
  approach: [
    'PLACEHOLDER — Step 1: Describe the first phase of your approach.',
    'PLACEHOLDER — Step 2: Describe how you validated or researched the problem.',
    'PLACEHOLDER — Step 3: Describe the design or technical decisions made.',
    'PLACEHOLDER — Step 4: Describe the build or execution phase.',
  ],
  solution:
    'PLACEHOLDER — Explain the final solution. What did you build? How does it address the original problem? What makes it effective?',
  technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
  screenshots: [
    { src: '/images/career-1.jpg', caption: 'PLACEHOLDER — Screenshot caption' },
    { src: '/images/career-2.jpg', caption: 'PLACEHOLDER — Screenshot caption' },
    { src: '/images/career-3.jpg', caption: 'PLACEHOLDER — Screenshot caption' },
  ],
  results: [
    'PLACEHOLDER — Key result or metric achieved.',
    'PLACEHOLDER — Another measurable outcome.',
    'PLACEHOLDER — Qualitative or quantitative impact.',
  ],
  lessonsLearned: [
    'PLACEHOLDER — What did you learn technically or strategically?',
    'PLACEHOLDER — What would you do differently next time?',
    'PLACEHOLDER — What surprised you during the process?',
  ],
  relatedProjects: [],
};

interface ProjectDetailPageProps {
  project?: ProjectDetail;
  onBack?: () => void;
}

export default function ProjectDetailPage({
  project = placeholderProject,
  onBack,
}: ProjectDetailPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0D0D0D] transition-colors duration-300">

      {/* ── Hero Banner ── */}
      <div className="relative h-[50vh] min-h-[340px] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Back button */}
        <div className="absolute top-6 left-6">
          <button
            onClick={onBack ?? (() => window.history.back())}
            className="flex items-center gap-2 text-white/90 text-sm font-medium bg-black/30 backdrop-blur-sm px-4 py-2.5 rounded-full hover:bg-black/50 transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </button>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-12 pb-10">
          <div className="max-w-[900px]">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B6B] mb-3 block">
              {project.category}
            </span>
            <h1 className="text-[clamp(28px,5vw,56px)] font-extrabold text-white leading-tight mb-2">
              {project.title}
            </h1>
            <p className="text-base text-white/75 max-w-[600px]">{project.tagline}</p>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* Status + action buttons */}
        <SectionReveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FFF5F5] dark:bg-[#E53E3E]/10 text-[#E53E3E] border border-[#FFD5D5] dark:border-[#E53E3E]/20">
              {project.status}
            </span>
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-[#E0E0E0] dark:border-zinc-700 text-[#1A1A1A] dark:text-white hover:border-[#1A1A1A] dark:hover:border-zinc-400 transition-all duration-200">
                <Github size={13} /> View on GitHub
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-dashed border-[#E0E0E0] dark:border-zinc-700 text-[#AAAAAA] cursor-not-allowed">
                <Github size={13} /> GitHub Coming Soon
              </span>
            )}
            {project.liveDemoUrl ? (
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] hover:bg-[#E53E3E] dark:hover:bg-[#E53E3E] dark:hover:text-white transition-all duration-200">
                <ExternalLink size={13} /> Live Demo
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-dashed border-[#E0E0E0] dark:border-zinc-700 text-[#AAAAAA] cursor-not-allowed">
                <ExternalLink size={13} /> Demo Coming Soon
              </span>
            )}
          </div>
        </SectionReveal>

        {/* Overview */}
        <SectionReveal>
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-4">Project Overview</h2>
            <p className="text-base text-[#555555] dark:text-zinc-400 leading-[1.85]">{project.overview}</p>
          </div>
        </SectionReveal>

        {/* Problem */}
        <SectionReveal>
          <div className="bg-[#FFF5F5] dark:bg-[#E53E3E]/8 border border-[#FFE5E5] dark:border-[#E53E3E]/15 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-4">Problem Statement</h2>
            <p className="text-base text-[#555555] dark:text-zinc-400 leading-[1.85]">{project.problem}</p>
          </div>
        </SectionReveal>

        {/* Approach */}
        <SectionReveal>
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-6">My Approach</h2>
            <div className="space-y-4">
              {project.approach.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E53E3E] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-base text-[#555555] dark:text-zinc-400 leading-[1.85] pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Solution */}
        <SectionReveal>
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-4">The Solution</h2>
            <p className="text-base text-[#555555] dark:text-zinc-400 leading-[1.85]">{project.solution}</p>
          </div>
        </SectionReveal>

        {/* Technologies */}
        <SectionReveal>
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-5">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-sm font-medium px-4 py-2 rounded-full bg-[#F5F5F5] dark:bg-zinc-800 text-[#555555] dark:text-zinc-300 border border-[#EBEBEB] dark:border-zinc-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <SectionReveal>
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-6">Screenshots</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.screenshots.map((shot, i) => (
                  <div key={i} className="group rounded-xl overflow-hidden border border-[#F0F0F0] dark:border-zinc-800">
                    <img
                      src={shot.src}
                      alt={shot.caption}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <p className="text-xs text-[#999999] dark:text-zinc-500 px-4 py-2.5 bg-[#FAFAFA] dark:bg-zinc-900">
                      {shot.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        )}

        {/* Results */}
        <SectionReveal>
          <div className="bg-[#F5FFF7] dark:bg-green-900/10 border border-[#D1FAE5] dark:border-green-800/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-5">Results & Outcomes</h2>
            <ul className="space-y-3">
              {project.results.map((result, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <p className="text-base text-[#555555] dark:text-zinc-400 leading-relaxed">{result}</p>
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>

        {/* Lessons Learned */}
        <SectionReveal>
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-5">Lessons Learned</h2>
            <div className="space-y-4">
              {project.lessonsLearned.map((lesson, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-[#FAFAFA] dark:bg-zinc-900 border border-[#F0F0F0] dark:border-zinc-800">
                  <BookOpen size={16} className="text-[#E53E3E] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#555555] dark:text-zinc-400 leading-relaxed">{lesson}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Related projects placeholder */}
        {project.relatedProjects && project.relatedProjects.length > 0 && (
          <SectionReveal>
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-6">Related Projects</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.relatedProjects.map((rel) => (
                  <div key={rel.id} className="group relative rounded-xl overflow-hidden aspect-video border border-[#F0F0F0] dark:border-zinc-800 hover:border-[#E53E3E]/30 transition-all duration-300 hover:shadow-lg">
                    <img src={rel.coverImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60 mb-1">{rel.category}</p>
                      <p className="text-sm font-bold text-white">{rel.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        )}

      </div>
    </div>
  );
}
