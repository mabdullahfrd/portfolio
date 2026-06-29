interface SectionWatermarkProps {
  text: string;
}

export default function SectionWatermark({ text }: SectionWatermarkProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black uppercase tracking-tighter text-[#F0F0F0] dark:text-zinc-900/10 whitespace-nowrap"
        style={{ fontSize: 'clamp(180px, 25vw, 400px)' }}
      >
        {text}
      </span>
    </div>
  );
}
