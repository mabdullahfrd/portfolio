export default function MarqueeStrip() {
  const items = [
    'MARKETING',
    'AI STRATEGY',
    'BRAND BUILDING',
    'CONTENT CREATION',
    'PUBLIC SPEAKING',
    'DIGITAL GROWTH',
  ];

  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 px-4">
      <span className="text-white font-semibold text-sm tracking-widest uppercase whitespace-nowrap">
        {item}
      </span>
      <span className="text-[#E53E3E] text-xs">&#9654;</span>
    </span>
  ));

  return (
    <div className="bg-[#111111] overflow-hidden py-3.5">
      <div className="marquee-track">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
