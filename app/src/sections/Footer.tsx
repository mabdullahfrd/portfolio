export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#F0F0F0]">
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-lg font-bold text-[#1A1A1A]">
          mabdullahfrd<span className="text-[#E53E3E]">.</span>
        </a>
        <p className="text-sm text-[#999999]">
          &copy; 2025 Muhammad Abdullah Fareed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
