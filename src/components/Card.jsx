import React from 'react';

export default function Card({ title, desc, tags = [] }) {
  return (
    <div className="win-inset p-5 bg-black/20 hover:bg-black/40 transition-all border-l-4 border-cyber-cyan">
      <h3 className="title-text font-black text-base uppercase mb-2 neon-glow">
        {title}
      </h3>
      <p className="body-text text-xs leading-relaxed opacity-90 mb-4">
        {desc}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-0.5 text-[9px] font-bold bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}