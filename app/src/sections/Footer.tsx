import { Linkedin, Github, Instagram, Youtube, Mail } from 'lucide-react';

// Twitter/X icon
const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

// Behance icon
const BehanceIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.454-1.729-5.454-5.675 0-3.91 2.304-5.819 5.387-5.819 3.003 0 4.881 1.791 5.303 4.403.083.516.107 1.201.097 2.158H14.18c.13 3.211 3.115 3.299 4.087 3.299 1.535 0 2.754-.813 3.159-1.963l2.3-.203zm-9.546-3.919h6.427c-.083-1.363-.977-2.439-2.897-2.439-1.824 0-2.918 1.063-3.53 2.439zM8.088 20H1.726V4h6.463c3.219 0 5.096 1.719 5.096 4.322 0 2.156-1.302 3.488-3.065 3.813v.068c2.075.21 3.459 1.634 3.459 3.875 0 3.022-2.217 4.922-5.591 4.922zm-.354-7.168H4.689v5.063h3.067c2.011 0 2.973-.906 2.973-2.531 0-1.625-1.003-2.532-2.995-2.532zm-.155-5.953H4.689v4.375h2.831c1.824 0 2.773-.781 2.773-2.188 0-1.5-.883-2.187-2.844-2.187z" />
  </svg>
);

// Dribbble icon
const DribbbleIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.95-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.878c-.153-.9-.75-4.025-2.19-7.75l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.82zm-11.16-2.99c.235-.405 2.99-5.025 8.195-6.725.13-.04.26-.08.395-.115-.255-.575-.525-1.15-.81-1.705-5.04 1.505-9.93 1.445-10.375 1.435l-.005.275c0 2.615.99 5 2.6 6.835zm-2.36-9.065c.45.005 4.625.025 9.39-1.25-1.68-2.98-3.49-5.48-3.75-5.83-2.835 1.33-5.015 3.865-5.64 7.08zm7.58-7.56c.285.39 2.145 2.87 3.81 5.93 3.635-1.36 5.175-3.435 5.335-3.665-1.8-1.59-4.165-2.555-6.755-2.555-.825 0-1.63.1-2.4.29zm9.46 3.165c-.185.25-1.89 2.475-5.68 4.015.235.485.46.98.67 1.48.075.175.15.35.22.52 3.39-.425 6.76.26 7.1.32-.015-2.41-.885-4.62-2.31-6.335z" />
  </svg>
);

// Medium icon
const MediumIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.52 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const socials = [
  { href: 'https://linkedin.com/in/mabdullahfrd', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://github.com/mabdullahfrd', label: 'GitHub', Icon: Github },
  { href: 'https://instagram.com/mabdullahfrd', label: 'Instagram', Icon: Instagram },
  { href: 'https://x.com/mabdullahfrd', label: 'Twitter/X', Icon: XIcon },
  { href: 'https://youtube.com/@mabdullahfrd', label: 'YouTube', Icon: Youtube },
  { href: 'https://www.behance.net/mabdullahfrd', label: 'Behance', Icon: BehanceIcon },
  { href: 'https://dribbble.com/mabdullahfrd', label: 'Dribbble', Icon: DribbbleIcon },
  { href: 'https://medium.com/@mabdullahfrd', label: 'Medium', Icon: MediumIcon },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0D0D0D] border-t border-[#F0F0F0] dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col items-center gap-6">
        {/* Brand */}
        <a href="#home" className="text-xl font-bold text-[#1A1A1A] dark:text-white tracking-tight">
          mabdullahfrd<span className="text-[#E53E3E]">.</span>
        </a>

        {/* Email Link */}
        <a
          href="mailto:mabdullahfrd@gmail.com"
          className="flex items-center gap-2 text-[#666666] dark:text-zinc-400 hover:text-[#E53E3E] transition-colors"
        >
          <Mail size={16} />
          <span className="text-sm">mabdullahfrd@gmail.com</span>
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] dark:border-zinc-700 rounded-full text-[#666666] dark:text-zinc-400 hover:border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#666666] dark:text-zinc-400">
          {[
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Experience', href: '#experience' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#E53E3E] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#999999] dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Muhammad Abdullah Fareed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
