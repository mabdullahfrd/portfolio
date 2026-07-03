import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0D0D0D] border-t border-[#F0F0F0] dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 flex flex-col items-center gap-6">
        {/* Brand */}
        <a href="#home" className="text-xl font-bold text-[#1A1A1A] dark:text-white tracking-tight">
          mabdullahfrd<span className="text-[#E53E3E]">.</span>
        </a>

        {/* Email */}
        <a
          href="mailto:mabdullahfrd@gmail.com"
          className="flex items-center gap-2 text-sm text-[#666666] dark:text-zinc-400 hover:text-[#E53E3E] dark:hover:text-[#E53E3E] transition-colors"
        >
          <Mail size={15} />
          mabdullahfrd@gmail.com
        </a>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-[#666666] dark:text-zinc-400">
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
        <p className="text-sm text-[#999999] dark:text-zinc-500 text-center">
          &copy; {new Date().getFullYear()} Muhammad Abdullah Fareed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
