import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import logoImg from "../assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Showcase", href: "#showcase" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "py-3 bg-black/75 backdrop-blur-md border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo & Title */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-500/30 flex items-center justify-center bg-slate-950 shadow-[0_0_12px_rgba(0,212,255,0.25)] group-hover:border-cyan-400 group-hover:shadow-[0_0_16px_rgba(0,212,255,0.4)] transition-all duration-300">
              <img src={logoImg} className="w-6 h-6 object-contain" alt="NEXORA Logo" />
            </div>
            <span className="font-display font-black tracking-[0.3em] text-white text-base transition-colors group-hover:text-[#00D4FF]">
              NEXORA
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 text-xs font-mono uppercase tracking-widest text-[#60A5FA] transition-colors hover:text-[#00D4FF] group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 shadow-[0_0_8px_#00d4ff] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Trigger / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/30 text-xs font-mono tracking-wider text-white bg-cyan-500/5 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>LAUNCH CLIENT</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex w-10 h-10 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 text-white hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center bg-black/98 backdrop-blur-xl px-8 py-12 md:hidden">
          <nav className="flex flex-col gap-6 text-center text-3xl font-display font-extrabold uppercase tracking-widest mb-16">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#60A5FA] hover:text-[#00D4FF] hover:scale-105 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="flex flex-col items-center gap-6 border-t border-slate-900 pt-10">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full max-w-xs text-center py-4 rounded-full border border-cyan-400 text-sm font-mono tracking-widest text-white bg-cyan-400/5 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              LAUNCH CONSOLE
            </a>
          </div>
        </div>
      )}
    </>
  );
}
