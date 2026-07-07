import { Mail, Linkedin, Github, Instagram, Youtube, ArrowUp } from 'lucide-react';

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);
const BehanceIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.454-1.729-5.454-5.675 0-3.91 2.304-5.819 5.387-5.819 3.003 0 4.881 1.791 5.303 4.403.083.516.107 1.201.097 2.158H14.18c.13 3.211 3.115 3.299 4.087 3.299 1.535 0 2.754-.813 3.159-1.963l2.3-.203zm-9.546-3.919h6.427c-.083-1.363-.977-2.439-2.897-2.439-1.824 0-2.918 1.063-3.53 2.439zM8.088 20H1.726V4h6.463c3.219 0 5.096 1.719 5.096 4.322 0 2.156-1.302 3.488-3.065 3.813v.068c2.075.21 3.459 1.634 3.459 3.875 0 3.022-2.217 4.922-5.591 4.922zm-.354-7.168H4.689v5.063h3.067c2.011 0 2.973-.906 2.973-2.531 0-1.625-1.003-2.532-2.995-2.532zm-.155-5.953H4.689v4.375h2.831c1.824 0 2.773-.781 2.773-2.188 0-1.5-.883-2.187-2.844-2.187z" />
  </svg>
);
const DribbbleIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.95-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.878c-.153-.9-.75-4.025-2.19-7.75l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.82zm-11.16-2.99c.235-.405 2.99-5.025 8.195-6.725.13-.04.26-.08.395-.115-.255-.575-.525-1.15-.81-1.705-5.04 1.505-9.93 1.445-10.375 1.435l-.005.275c0 2.615.99 5 2.6 6.835zm-2.36-9.065c.45.005 4.625.025 9.39-1.25-1.68-2.98-3.49-5.48-3.75-5.83-2.835 1.33-5.015 3.865-5.64 7.08zm7.58-7.56c.285.39 2.145 2.87 3.81 5.93 3.635-1.36 5.175-3.435 5.335-3.665-1.8-1.59-4.165-2.555-6.755-2.555-.825 0-1.63.1-2.4.29zm9.46 3.165c-.185.25-1.89 2.475-5.68 4.015.235.485.46.98.67 1.48.075.175.15.35.22.52 3.39-.425 6.76.26 7.1.32-.015-2.41-.885-4.62-2.31-6.335z" />
  </svg>
);
const MediumIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.52 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const socials = [
  { href: 'mailto:mabdullahfrd@gmail.com',             label: 'Email',     Icon: Mail },
  { href: 'https://www.linkedin.com/in/mabdullahfrd',  label: 'LinkedIn',  Icon: Linkedin },
  { href: 'https://github.com/mabdullahfrd',            label: 'GitHub',    Icon: Github },
  { href: 'https://www.instagram.com/mabdullahfrd/',   label: 'Instagram', Icon: Instagram },
  { href: 'https://x.com/mabdullahfrd',                label: 'X',         Icon: XIcon },
  { href: 'https://www.youtube.com/@mabdullahfrd',     label: 'YouTube',   Icon: Youtube },
  { href: 'https://www.behance.net/mabdullahfrd',      label: 'Behance',   Icon: BehanceIcon },
  { href: 'https://dribbble.com/mabdullahfrd',         label: 'Dribbble',  Icon: DribbbleIcon },
  { href: 'https://medium.com/@mabdullahfrd',          label: 'Medium',    Icon: MediumIcon },
];

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Articles',   href: '#articles' },
  { label: 'Contact',    href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0D0D0D] border-t border-zinc-800 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-14 pb-8">

        {/* Top row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* Brand + mission */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block text-2xl font-extrabold tracking-tight text-white mb-4">
              mabdullahfrd<span className="text-[#E53E3E]">.</span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[280px]">
              Building ideas that create meaningful impact through creativity, technology, and execution.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600 mb-5">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-[#E53E3E] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600 mb-5">
              Connect
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-zinc-700 rounded-full text-zinc-400 hover:border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
            <a
              href="mailto:mabdullahfrd@gmail.com"
              className="text-sm text-zinc-400 hover:text-[#E53E3E] transition-colors duration-200 flex items-center gap-1.5"
            >
              <Mail size={13} />
              mabdullahfrd@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Muhammad Abdullah Fareed. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-[#E53E3E] transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
