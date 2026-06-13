import { useState, useEffect, useRef } from "react";
import { 
  Code2, 
  Cpu, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  Server, 
  Database,
  CloudLightning 
} from "lucide-react";

interface TechNode {
  name: string;
  icon: React.ReactNode;
  orbitRadius: number;
  speed: number;
  initialAngle: number;
  color: string;
  description: string;
  category: string;
}

export function TechOrbit() {
  const [hoveredNode, setHoveredNode] = useState<TechNode | null>(null);
  const anglesRef = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0]);
  const animationFrameId = useRef<number>(0);
  const [, setTicks] = useState(0);

  const techNodes: TechNode[] = [
    // Inner Orbit
    {
      name: "React / Vite",
      icon: <Code2 className="w-5 h-5" />,
      orbitRadius: 100,
      speed: 0.007,
      initialAngle: 0,
      color: "#60a5fa",
      category: "Frontend Dev",
      description: "Interactive reactive interfaces with 60fps animations and seamless user state integrations.",
    },
    {
      name: "TypeScript",
      icon: <Terminal className="w-5 h-5" />,
      orbitRadius: 100,
      speed: 0.007,
      initialAngle: Math.PI * 0.67,
      color: "#3b82f6",
      category: "Type Security",
      description: "Strict compile-time type-safety schemas protecting enterprise data models across all endpoints.",
    },
    {
      name: "Node.js",
      icon: <Server className="w-5 h-5" />,
      orbitRadius: 100,
      speed: 0.007,
      initialAngle: Math.PI * 1.33,
      color: "#22c55e",
      category: "Runtime Mesh",
      description: "High-throughput server environments managing asynchronous worker threads and WebSockets.",
    },
    // Mid Orbit
    {
      name: "Cybersecurity",
      icon: <ShieldCheck className="w-5 h-5" />,
      orbitRadius: 170,
      speed: 0.004,
      initialAngle: 0,
      color: "#ef4444",
      category: "Threat Defense",
      description: "Zero-trust configurations, biometric auth gates, and edge-level encrypted data pipelines.",
    },
    {
      name: "Python & PyTorch",
      icon: <Cpu className="w-5 h-5" />,
      orbitRadius: 170,
      speed: 0.004,
      initialAngle: Math.PI * 0.67,
      color: "#eab308",
      category: "Agentic AI",
      description: "Autonomous LLM routing nodes, semantic vector storage, and neural net model integration.",
    },
    {
      name: "Docker & K8s",
      icon: <Layers className="w-5 h-5" />,
      orbitRadius: 170,
      speed: 0.004,
      initialAngle: Math.PI * 1.33,
      color: "#06b6d4",
      category: "Container Mesh",
      description: "Self-healing virtual microservice instances dynamically auto-scaling in response to load.",
    },
    // Outer Orbit
    {
      name: "AWS & GCP",
      icon: <CloudLightning className="w-5 h-5" />,
      orbitRadius: 240,
      speed: 0.002,
      initialAngle: Math.PI * 0.25,
      color: "#f97316",
      category: "Multi-Cloud",
      description: "Global low-latency CDN arrays, serverless databases, and redundant cold-backup systems.",
    },
    {
      name: "Data Analytics",
      icon: <Database className="w-5 h-5" />,
      orbitRadius: 240,
      speed: 0.002,
      initialAngle: Math.PI * 1.25,
      color: "#a855f7",
      category: "Telemetry Engine",
      description: "Real-time big data analytical parsing pipelines processing security audit trail logs.",
    },
  ];

  // Initialize angles once
  useEffect(() => {
    anglesRef.current = techNodes.map(node => node.initialAngle);
  }, []);

  // Frame animation loop
  useEffect(() => {
    const updateAngles = () => {
      // Rotate each node unless hovered
      anglesRef.current = anglesRef.current.map((angle, idx) => {
        const node = techNodes[idx];
        const isHovered = hoveredNode && hoveredNode.name === node.name;
        if (isHovered) return angle; // Pause
        return angle + node.speed;
      });
      setTicks(prev => prev + 1); // trigger state update to re-render nodes
      animationFrameId.current = requestAnimationFrame(updateAngles);
    };

    animationFrameId.current = requestAnimationFrame(updateAngles);
    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [hoveredNode]);

  return (
    <div className="relative w-full max-w-2xl aspect-square mx-auto flex items-center justify-center select-none overflow-visible">
      {/* Orbit Rings Background */}
      <div className="absolute w-[200px] h-[200px] rounded-full border border-cyan-500/10 pointer-events-none" />
      <div className="absolute w-[340px] h-[340px] rounded-full border border-cyan-500/10 pointer-events-none" />
      <div className="absolute w-[480px] h-[480px] rounded-full border border-cyan-500/10 pointer-events-none border-dashed animate-[spin_100s_linear_infinite]" />

      {/* Center Core */}
      <div className="absolute z-10 w-28 h-28 rounded-full bg-slate-950 border border-cyan-500/35 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(0,212,255,0.2)]">
        <div className="absolute -inset-1 rounded-full bg-cyan-500/5 blur-md animate-glow-pulse pointer-events-none" />
        <span className="text-xs font-mono tracking-widest text-cyan-400">CORE</span>
        <span className="text-sm font-extrabold tracking-wide text-white uppercase font-display">NEXORA</span>
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00d4ff] mt-1.5 animate-pulse" />
      </div>

      {/* Orbital Technology Nodes */}
      {techNodes.map((node, idx) => {
        const angle = anglesRef.current[idx] || node.initialAngle;
        const x = Math.cos(angle) * node.orbitRadius;
        const y = Math.sin(angle) * node.orbitRadius;
        const isNodeHovered = hoveredNode && hoveredNode.name === node.name;

        return (
          <div
            key={node.name}
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transition: isNodeHovered ? "transform 0.1s ease" : "none",
            }}
            onMouseEnter={() => setHoveredNode(node)}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute z-20 cursor-pointer group"
          >
            {/* Glowing path tracker connection */}
            {isNodeHovered && (
              <div 
                style={{ width: `${node.orbitRadius}px`, transform: `rotate(${angle + Math.PI}deg)` }}
                className="absolute right-1/2 top-1/2 h-px bg-gradient-to-l from-cyan-500/40 to-transparent origin-right pointer-events-none" 
              />
            )}

            {/* Glowing Circle */}
            <div 
              style={{ 
                borderColor: node.color,
                boxShadow: isNodeHovered ? `0 0 20px ${node.color}` : 'none'
              }}
              className="w-10 h-10 rounded-full bg-slate-950 border flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <div style={{ color: node.color }} className="transition-transform group-hover:scale-110">
                {node.icon}
              </div>
            </div>

            {/* Floating text name */}
            <div className="absolute left-12 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-slate-950/90 border border-slate-800 text-[10px] uppercase font-mono tracking-wider text-slate-300 pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {node.name}
            </div>
          </div>
        );
      })}

      {/* Hover Information Box (Center bottom, floating description card) */}
      <div className="absolute bottom-4 inset-x-6 z-30 pointer-events-none">
        <div className={`glass p-4 rounded-xl border border-cyan-500/20 text-center transition-all duration-300 ${hoveredNode ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          {hoveredNode && (
            <>
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase">
                  {hoveredNode.category}
                </span>
                <span className="text-sm font-bold text-white uppercase tracking-wider font-display">
                  {hoveredNode.name}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                {hoveredNode.description}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
