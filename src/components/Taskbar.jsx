import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Terminal, RefreshCw, ExternalLink, ShieldCheck, Sun, Moon, MessageSquare } from 'lucide-react';

export default function Taskbar({ isDarkMode, setIsDarkMode, isMinimized, onRestore }) {
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const social = [
    { icon: <Github size={14}/>, link: "https://github.com/gkayyy", label: "GitHub" },
    { icon: <Linkedin size={14}/>, link: "https://linkedin.com/in/ghufrankhan-dev", label: "LinkedIn" },
    { icon: <Mail size={14}/>, link: "mailto:khan.ghufran20@gmail.com", label: "Gmail" }
  ];

  return (
    <div className="fixed bottom-0 w-full h-10 win-outset flex items-center p-1 z-[500] gap-1 select-none">
      
      {menuOpen && (
        <>
          <div className="fixed inset-0 z-[-1]" onClick={() => setMenuOpen(false)}></div>
          <div className="absolute bottom-11 left-0 w-64 win-outset shadow-2xl animate-in slide-in-from-bottom-2 flex">
            <div className="w-10 bg-win-blue flex flex-col justify-end items-center pb-8 relative flex-shrink-0">
              <span className="text-white font-black text-[10px] tracking-[0.4em] whitespace-nowrap" style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', width: '100px', marginBottom: '55px' }}>CONNECT</span>
            </div>
            <div className="flex-1 bg-win-silver p-1 text-black">
              <div className="px-3 py-2 text-[10px] font-bold border-b border-win-gray mb-1 flex items-center gap-2 font-mono"><ShieldCheck size={12} className="text-blue-800" /> SESSION_AUTH_OK</div>
              {social.map(s => (
                <a key={s.label} href={s.link} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 text-xs hover:bg-win-blue hover:text-white group transition-colors">
                  {s.icon} {s.label} <ExternalLink size={10} className="ml-auto opacity-30" />
                </a>
              ))}
              <div className="h-[1px] bg-win-gray my-1 shadow-[0_1px_0_white]"></div>
              <button onClick={() => window.location.reload()} className="w-full flex items-center gap-3 px-3 py-2 text-xs hover:bg-win-blue hover:text-white text-left"><RefreshCw size={14}/> Restart System...</button>
            </div>
          </div>
        </>
      )}

      {/* START BUTTON */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className={`flex items-center gap-1 px-2 py-0.5 h-full font-bold text-xs win-outset active:win-inset hover:bg-gray-200 text-black ${menuOpen ? 'win-inset bg-gray-300' : ''}`}
      >
        <img src="/win97-logo.png" className="w-4 h-4 mr-1" alt="Start" /> 
        <span className="taskbar-text-adaptive">Start</span>
      </button>

      <div className="h-6 w-[2px] bg-win-darkGray mx-1 shadow-[1px_1px_0_white]/20"></div>

      {/* PROGRAM BUTTON - Now visible on mobile */}
      <div className="flex-1 flex gap-2 items-center overflow-hidden">
        <button 
          onClick={onRestore}
          className={`px-3 py-1 flex items-center gap-2 text-[10px] transition-all min-w-fit font-bold
            ${isMinimized 
              ? 'win-outset bg-[#c0c0c0] opacity-80 text-black' 
              : 'win-inset bg-gray-200 border-b-2 border-blue-700 shadow-[inset_0_-2px_0_rgba(0,0,255,0.2)] text-black'}
          `}
        >
          <Terminal size={12} className={isMinimized ? "text-gray-600" : "text-blue-800 animate-pulse"} />
          <span className="taskbar-text-adaptive">PORTFOLIO.LOG</span>
        </button>

        {/* Hidden only on very small screens to save space */}
        <div className="hidden sm:flex items-center gap-2 px-4 py-1 animate-pulse border-l border-gray-400">
          <MessageSquare size={12} className="cmd-text" />
          <span className="text-[9px] font-bold cmd-text tracking-widest uppercase">
            ...like what you see? connect to discover more.
          </span>
        </div>
      </div>

      {/* SYSTEM TRAY - Phone now visible on mobile */}
      <div className="win-inset px-2 py-1 flex items-center gap-2 sm:gap-3 bg-[#d1d1d1] ml-auto text-black border-l border-white">
        <div className="flex items-center gap-1 sm:gap-2 text-[9px] sm:text-[10px] border-r border-gray-400 pr-2 sm:pr-3">
          <Phone size={10} className="text-blue-800 shrink-0"/> 
          <span className="font-mono font-bold taskbar-text-adaptive">+92 340 2488171</span>
        </div>
        
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="win-outset p-1 hover:bg-white/20 active:win-inset shrink-0">
          {isDarkMode ? <Sun size={12} className="text-orange-600" /> : <Moon size={12} className="text-blue-900" />}
        </button>

        <div className="flex items-center gap-1 sm:gap-2 border-l border-gray-400 pl-1 sm:pl-2 shrink-0">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full animate-pulse shadow-[0_0_5px_green]"></span>
          <span className="font-bold text-[9px] sm:text-[10px] font-mono taskbar-text-adaptive">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
          </span>
        </div>
      </div>
    </div>
  );
}