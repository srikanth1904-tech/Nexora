import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(0, 212, 255, 0.25)"
  hoverScale?: boolean;
}

export function GlassCard({
  children,
  className = "",
  glowColor = "rgba(0, 212, 255, 0.15)",
  hoverScale = true,
}: GlassCardProps) {
  return (
    <div
      style={{
        boxShadow: `0 10px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
      }}
      className={`
        relative overflow-hidden rounded-2xl border border-cyan-500/10 
        bg-slate-950/45 backdrop-blur-md transition-all duration-500 ease-out
        ${hoverScale ? "hover:scale-[1.03] hover:border-cyan-500/35 hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {/* Glow highlight layer */}
      <div 
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 65%)`
        }}
        className="absolute -top-[120px] left-0 right-0 h-[240px] opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-75" 
      />

      {/* Futuristic corner borders (top-left, bottom-right) */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-cyan-500/35 pointer-events-none group-hover:border-cyan-500 transition-colors" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-cyan-500/35 pointer-events-none group-hover:border-cyan-500 transition-colors" />

      {/* Main card content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
