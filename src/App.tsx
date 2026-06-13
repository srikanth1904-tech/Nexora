import React, { useState } from "react";
import { 
  Cpu, 
  Code2, 
  Shield, 
  Cloud, 
  Database, 
  Activity, 
  ArrowRight, 
  Check, 
  Terminal, 
  ChevronRight, 
  ChevronLeft, 
  Mail, 
  Building, 
  User, 
  Lock, 
  TrendingUp, 
  Zap 
} from "lucide-react";
import logoImg from "./assets/logo.png";
import { SpaceBackground } from "./components/SpaceBackground";
import { Navbar } from "./components/Navbar";
import { TechOrbit } from "./components/TechOrbit";
import { GlassCard } from "./components/GlassCard";

// Testimonials data
const testimonials = [
  {
    quote: "NEXORA re-engineered our entire cloud pipeline, reducing SLA latency parameters by 42%. Truly world-class tech partners who deliver flawless execution under load.",
    author: "Elena Rostova",
    role: "VP of Engineering, Aetheris Systems",
    node: "AETHERIS-NODE-01"
  },
  {
    quote: "Their cognitive automation workflows transformed our service operations overnight. We scaled system capacity by 3x without increasing support overhead.",
    author: "Marcus Vance",
    role: "Chief Architect, Hyperion Data",
    node: "HYPERION-NODE-04"
  },
  {
    quote: "Strict type safety, robust architectural decisions, and an eye for breathtaking user interfaces. Working with NEXORA is like a peek into the next decade.",
    author: "Sarah Jenkins",
    role: "Director of Product, Nebula Mesh",
    node: "NEBULA-NODE-09"
  }
];

// Project Showcase data
const projects = [
  {
    title: "Aetheris AI Platform",
    category: "AI",
    desc: "An enterprise-grade autonomous LLM pipeline handling multi-agent orchestration and context retrieval at sub-second speeds.",
    tags: ["LLM Agents", "VectorDB", "Node.js"],
    status: "PRODUCTION ACTIVE"
  },
  {
    title: "Hyperion Cyber-Vault",
    category: "Security",
    desc: "Zero-trust network access control systems leveraging biometric proof-of-work protocols and military-grade encryption keys.",
    tags: ["Zero-Trust", "WebAuthn", "Rust"],
    status: "SECURED"
  },
  {
    title: "Nebula Cloud Mesh",
    category: "Cloud",
    desc: "A multi-region auto-healing network mesh providing load balancing, serverless execution parameters, and edge compilation.",
    tags: ["Kubernetes", "gRPC", "AWS"],
    status: "ONLINE"
  },
  {
    title: "Apex Automation Engine",
    category: "AI",
    desc: "Proactive event-driven orchestration pipelines transforming legacy ERP systems into self-healing workflows.",
    tags: ["Workflow", "Temporal", "Go"],
    status: "STAGING"
  },
  {
    title: "Aegis Threat Shield",
    category: "Security",
    desc: "Real-time AI threat monitoring nodes intercepting and modeling security breaches before execution.",
    tags: ["Threat ML", "eBPF", "C++"],
    status: "ACTIVE PROTECTION"
  },
  {
    title: "Cosmos Multi-Region Mesh",
    category: "Cloud",
    desc: "Fully replicated database clusters sync'd across Google Cloud and AWS nodes for high resiliency.",
    tags: ["Multi-Cloud", "CockroachDB", "Terraform"],
    status: "ONLINE"
  }
];

export default function App() {
  const [projectFilter, setProjectFilter] = useState("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", company: "", message: "" });

  const filteredProjects = projectFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setFormState({ name: "", email: "", company: "", message: "" });
    }, 5000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Dynamic Cosmic Background */}
      <SpaceBackground />

      {/* Grid Constellation Overlay */}
      <div className="fixed inset-0 grid-overlay pointer-events-none z-0 opacity-40" />

      {/* Header/Navbar */}
      <Navbar />

      {/* Content wrapper */}
      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6">


          <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">


            {/* Headline */}
            <h1 className="font-display font-black tracking-[0.18em] text-white uppercase leading-[1.05] text-[clamp(2.5rem,8vw,6.5rem)] text-glow-blue filter drop-shadow-[0_0_15px_rgba(0,212,255,0.25)]">
              NEXORA
            </h1>

            {/* Subheadline */}
            <h2 className="text-[#00D4FF] font-display tracking-[0.3em] text-[clamp(0.75rem,2vw,1.125rem)] uppercase mt-4 font-semibold text-glow-blue">
              Engineering Tomorrow Beyond Infinity
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-slate-400 font-light text-base md:text-lg leading-relaxed">
              We build intelligent software, AI-powered solutions, cybersecurity systems, and digital experiences that redefine the future of global enterprise operations.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
              <a 
                href="#services" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cyan-400 text-white font-mono text-xs uppercase tracking-widest font-bold border border-cyan-400 hover:bg-transparent hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all duration-300"
              >
                Explore Services
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-700 bg-slate-950/45 font-mono text-xs uppercase tracking-widest text-white hover:border-cyan-500 hover:text-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all duration-300"
              >
                Start Your Project
              </a>
            </div>


          </div>
        </section>

        {/* ABOUT NEXORA */}
        <section id="about" className="py-28 px-6 border-t border-slate-950/50 bg-[#050816]/10 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
              {/* Text Area */}
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3 block">01 // BRAND OVERVIEW</span>
                 <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] text-white uppercase tracking-wider leading-[1.1]">
                  Driven by Innovation.<br />
                  <span className="text-[#00D4FF] text-glow-blue">Focused on Execution.</span>
                </h2>
                <p className="mt-6 text-slate-400 leading-relaxed font-light text-base">
                  NEXORA architect systems designed to thrive at scale. Working directly with CTOs, enterprise heads, and founders, we replace legacy software architectures with type-safe, resilient cloud structures and agentic AI pipelines.
                </p>
                <p className="mt-4 text-slate-400 leading-relaxed font-light text-base">
                  We operate at the convergence of Artificial Intelligence and Cybersecurity, engineering platforms that are not only future-ready but secure by design from the very first line of code.
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <a 
                    href="#ecosystem" 
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#60A5FA] hover:text-[#00D4FF] transition-colors"
                  >
                    <span>EXPLORE ARCHITECTURE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Stats Area Grid */}
              <div className="grid grid-cols-2 gap-6">
                <GlassCard className="p-6 text-center group">
                  <div className="text-3xl font-mono font-black text-cyan-400 group-hover:scale-105 transition-transform duration-300">99.99%</div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block mt-2">SYS UPTIME SLA</span>
                </GlassCard>
                <GlassCard className="p-6 text-center group">
                  <div className="text-3xl font-mono font-black text-cyan-400 group-hover:scale-105 transition-transform duration-300">45M+</div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block mt-2">DAILY SECURE LOOPS</span>
                </GlassCard>
                <GlassCard className="p-6 text-center group">
                  <div className="text-3xl font-mono font-black text-cyan-400 group-hover:scale-105 transition-transform duration-300">250+</div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block mt-2">NODES DEPLOYED</span>
                </GlassCard>
                <GlassCard className="p-6 text-center group">
                  <div className="text-3xl font-mono font-black text-cyan-400 group-hover:scale-105 transition-transform duration-300">8+ Yrs</div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block mt-2">NEURAL ENGINE R&D</span>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-28 px-6 relative">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-20">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3 block">02 // CORE SERVICES</span>
              <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] text-white uppercase tracking-wider">
                Futuristic Solutions Catalog
              </h2>
              <div className="w-16 h-0.5 bg-cyan-500/50 mx-auto mt-4" />
            </div>

            {/* Grid of 6 services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cpu className="w-7 h-7" />,
                  title: "Artificial Intelligence",
                  desc: "Deploy autonomous LLM agents, cognitive routing layers, and neural-net pipelines that automate enterprise operations 24/7.",
                },
                {
                  icon: <Code2 className="w-7 h-7" />,
                  title: "Software Development",
                  desc: "High-performance, type-safe custom software designed using modern stacks like React, TypeScript, Rust, and Go.",
                },
                {
                  icon: <Shield className="w-7 h-7" />,
                  title: "Cybersecurity",
                  desc: "Implement zero-trust security parameters, biometric API gateways, threat behavior modeling, and end-to-end database encryptions.",
                },
                {
                  icon: <Cloud className="w-7 h-7" />,
                  title: "Cloud Solutions",
                  desc: "Scalable Kubernetes meshes, serverless API endpoints, global CDN arrays, and auto-healing infrastructure scripts.",
                },
                {
                  icon: <Database className="w-7 h-7" />,
                  title: "Data Analytics",
                  desc: "Real-time big data pipelines, automated semantic indexing engines, telemetry visualizers, and predictive database logs.",
                },
                {
                  icon: <Activity className="w-7 h-7" />,
                  title: "Digital Transformation",
                  desc: "Refactor legacy monolithic codebases, integrate modern API gateways, and automate physical server configurations.",
                },
              ].map((service, idx) => (
                <GlassCard key={idx} className="p-8 group">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-wide text-white uppercase font-display group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-slate-400 text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* WHY NEXORA */}
        <section className="py-28 px-6 border-t border-slate-950/50 bg-[#050816]/10 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
              
              {/* Sidebar Info */}
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3 block">03 // ARCHITECTURAL RULES</span>
                <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] text-white uppercase tracking-wider leading-[1.1]">
                  Why Choose<br />
                  <span className="text-[#00D4FF]">NEXORA?</span>
                </h2>
                <p className="mt-6 text-slate-400 font-light text-base leading-relaxed">
                  We don't build generic products. We engineer digital assets optimized for military-grade protection, sub-second latency, and infinite scaling capabilities.
                </p>
                <div className="mt-8 p-4 rounded-xl border border-cyan-500/15 bg-cyan-500/5 flex items-start gap-3.5">
                  <Lock className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">ENCRYPTED TELEMETRY</h4>
                    <p className="text-[10px] text-slate-400 leading-normal mt-1">All client-server telemetry connections are locked with AES-256 keys by default.</p>
                  </div>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Zap className="w-6 h-6 text-yellow-400" />,
                    title: "Innovation First",
                    desc: "We research and deploy advanced tech stacks before they hit mainstream channels, ensuring your edge."
                  },
                  {
                    icon: <Lock className="w-6 h-6 text-red-400" />,
                    title: "Secure by Design",
                    desc: "Zero-trust identity parameters are integrated into the core software layer of all our apps."
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6 text-green-400" />,
                    title: "Scalable Solutions",
                    desc: "Stateless microservices designed to scale across multi-region server nodes under heavy load."
                  },
                  {
                    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
                    title: "Future Ready",
                    desc: "Dynamic APIs, automated cloud meshes, and containerized logic ready for integration."
                  }
                ].map((item, idx) => (
                  <GlassCard key={idx} className="p-7 group">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="font-mono text-[9px] text-slate-600">RULE // 0{idx + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase font-display group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-slate-400 text-xs leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </GlassCard>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* TECHNOLOGY ECOSYSTEM (ORBIT SYSTEM) */}
        <section id="ecosystem" className="py-28 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3 block">04 // ECOSYSTEM COMPILATION</span>
              <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] text-white uppercase tracking-wider">
                Technology Orbit Array
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-slate-400 font-light text-sm md:text-base">
                Hover over the orbital technology nodes to view their structural parameters and deployment details.
              </p>
            </div>

            {/* Orbit Component Container */}
            <div className="relative">
              <TechOrbit />
            </div>

          </div>
        </section>

        {/* PROJECT SHOWCASE */}
        <section id="showcase" className="py-28 px-6 border-t border-slate-950/50 bg-[#050816]/10 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
          
          <div className="max-w-7xl mx-auto">
            
            {/* Header / Filter Buttons */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3 block">05 // CASE ARCHIVES</span>
                <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] text-white uppercase tracking-wider">
                  Featured Systems
                </h2>
              </div>

              {/* Filters */}
              <div className="inline-flex flex-wrap p-1 rounded-xl bg-slate-950/90 border border-slate-900 gap-1.5 font-mono text-[10px]">
                {["All", "AI", "Security", "Cloud"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setProjectFilter(filter)}
                    className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 uppercase tracking-widest ${
                      projectFilter === filter 
                        ? "bg-cyan-500 text-black shadow-[0_0_12px_rgba(0,212,255,0.4)]" 
                        : "text-[#60A5FA] hover:text-[#00D4FF]"
                    }`}
                  >
                    {filter === "All" ? "ALL ARCHIVES" : filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of filtered projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <GlassCard key={idx} className="p-8 group flex flex-col justify-between h-full">
                  <div>
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-cyan-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-wide text-white uppercase font-display group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-slate-400 text-xs md:text-sm leading-relaxed font-light">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-900/50">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="font-mono text-[9px] text-slate-400 px-2 py-0.5 rounded bg-slate-900/40 border border-slate-800/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

          </div>
        </section>

        {/* CLIENT TESTIMONIALS */}
        <section className="py-28 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3 block">06 // FEEDBACK LOOPS</span>
            <h2 className="font-display font-extrabold text-[clamp(2.5rem,4vw,3.5rem)] text-white uppercase tracking-wider mb-14">
              Verified Client Nodes
            </h2>

            {/* Testimonials Deck */}
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-500/5 blur-3xl pointer-events-none rounded-3xl" />
              
              <div className="glass-premium p-8 md:p-14 rounded-2xl relative border-cyan-500/25">
                {/* Node ID indicator */}
                <div className="absolute top-4 right-6 font-mono text-[9px] text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                  {testimonials[activeTestimonial].node}
                </div>

                <p className="text-lg md:text-2xl font-light italic leading-relaxed text-slate-200">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                <div className="mt-10 flex flex-col items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00d4ff] mb-3 animate-ping" />
                  <h4 className="text-base font-bold text-white uppercase tracking-wider font-display">
                    {testimonials[activeTestimonial].author}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="mt-8 flex justify-center gap-4">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-11 h-11 rounded-full border border-slate-800 bg-slate-950/80 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 hover:shadow-[0_0_12px_rgba(0,212,255,0.25)] transition-all duration-300 flex items-center justify-center"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-11 h-11 rounded-full border border-slate-800 bg-slate-950/80 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 hover:shadow-[0_0_12px_rgba(0,212,255,0.25)] transition-all duration-300 flex items-center justify-center"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-28 px-6 border-t border-slate-950/50 bg-[#050816]/10 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16">
              
              {/* Info Sidebar */}
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3 block">07 // CLIENT CONSOLE</span>
                <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] text-white uppercase tracking-wider leading-[0.95]">
                  Start Your <br />
                  <span className="text-[#00D4FF] text-glow-blue italic font-light">Project.</span>
                </h2>
                <p className="mt-6 text-slate-400 font-light text-base max-w-md">
                  Establish a secure channel with our systems developers. Enter your details and project specs below to receive a node briefing in 24 hours.
                </p>

                <div className="mt-12 flex flex-col gap-6 font-mono text-xs text-slate-400">
                  <div>
                    <span className="text-slate-500 uppercase tracking-widest block text-[9px]">DIRECT EMAIL CHANNEL</span>
                    <a href="mailto:contact@nexora.io" className="text-[#60A5FA] hover:text-[#00D4FF] font-bold block mt-1">
                      contact@nexora.io
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-widest block text-[9px]">UTC CLOCK TELEMETRY</span>
                    <span className="text-cyan-400 font-bold block mt-1">OPERATIVE / SCHEDULING ENGINES ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Contact Form Card */}
              <div className="glass-premium p-8 md:p-10 rounded-2xl border-cyan-500/15">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display mb-6">Briefing Form</h3>
                
                {contactSuccess ? (
                  <div className="text-center py-16 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 animate-pulse">
                      <Check className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-white uppercase font-display">CONSOLE TRANSMISSION COMPLETED</h4>
                    <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto">We have logged your system parameters. An engineer will ping you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[9px] uppercase tracking-wider text-slate-400 mb-2">FULL NAME *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                            className="w-full rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/30 focus:border-cyan-400/50 focus:outline-none px-11 py-3 text-sm text-white focus:ring-1 focus:ring-cyan-400/10 transition-all duration-300"
                            placeholder="Alex Mercer"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-mono text-[9px] uppercase tracking-wider text-slate-400 mb-2">COMPANY</label>
                        <div className="relative">
                          <Building className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            value={formState.company}
                            onChange={(e) => setFormState({...formState, company: e.target.value})}
                            className="w-full rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/30 focus:border-cyan-400/50 focus:outline-none px-11 py-3 text-sm text-white focus:ring-1 focus:ring-cyan-400/10 transition-all duration-300"
                            placeholder="Aetheris Corp"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-slate-400 mb-2">EMAIL ADDRESS *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          className="w-full rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/30 focus:border-cyan-400/50 focus:outline-none px-11 py-3 text-sm text-white focus:ring-1 focus:ring-cyan-400/10 transition-all duration-300"
                          placeholder="alex@aetheris.io"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-slate-400 mb-2">SPECIFICATIONS / SCOPE *</label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/30 focus:border-cyan-400/50 focus:outline-none px-4 py-3 text-sm text-white focus:ring-1 focus:ring-cyan-400/10 transition-all duration-300 resize-none"
                        placeholder="Detail your requirements here..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-cyan-400 text-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Terminal className="w-4 h-4" />
                      <span>TRANSMIT BRIEFING</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-black/80 backdrop-blur-md py-16 px-6 relative z-10 text-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-8">
            <div>
              <div className="flex items-center gap-3.5">
                <img src={logoImg} className="w-6 h-6 object-contain" alt="NEXORA Logo" />
                <span className="font-display font-black tracking-[0.25em] text-white">NEXORA</span>
              </div>
              <p className="mt-4 text-slate-400 max-w-xs text-xs font-light leading-relaxed">
                Architecting secure, high-performance systems and intelligent automation for modern enterprise infrastructure.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 font-bold mb-4">Company</h4>
              <div className="flex flex-col gap-2.5 text-xs text-[#60A5FA] font-light">
                <a href="#about" className="hover:text-[#00D4FF] transition-colors">About Us</a>
                <a href="#showcase" className="hover:text-[#00D4FF] transition-colors">Case Archives</a>
                <a href="#" className="hover:text-[#00D4FF] transition-colors">Documentation</a>
                <a href="#contact" className="hover:text-[#00D4FF] transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 font-bold mb-4">Services</h4>
              <div className="flex flex-col gap-2.5 text-xs text-[#60A5FA] font-light">
                <a href="#services" className="hover:text-[#00D4FF] transition-colors">Artificial Intelligence</a>
                <a href="#services" className="hover:text-[#00D4FF] transition-colors">Software Development</a>
                <a href="#services" className="hover:text-[#00D4FF] transition-colors">Cybersecurity</a>
                <a href="#services" className="hover:text-[#00D4FF] transition-colors">Cloud Solutions</a>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-slate-500">
            <span>© 2026 NEXORA. All rights reserved. System time UTC.</span>
            <div className="flex gap-6">
              <a href="#" className="text-[#60A5FA] hover:text-[#00D4FF] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#60A5FA] hover:text-[#00D4FF] transition-colors">Terms of Service</a>
              <a href="#" className="text-[#60A5FA] hover:text-[#00D4FF] transition-colors">Node Registry</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
