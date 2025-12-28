import React, { useState } from 'react';
import { DATA } from './data/content';
import Taskbar from './components/Taskbar';
import Terminal from './components/Terminal';
import FloppyDisk from './components/FloppyDisk';

export default function App() {
  const [query, setQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const bgCommands = [
    "GET /api/v1/auth", "docker-compose up -d", "systemctl restart django",
    "python manage.py migrate", "kubectl get pods", "npm run build",
    "ssh root@production", "git commit -m 'fix: security'", "redis-cli FLUSHALL"
  ];

  const filteredExperience = DATA.experience.filter(job => 
    job.role.toLowerCase().includes(query.toLowerCase()) ||
    job.company.toLowerCase().includes(query.toLowerCase()) ||
    job.points.some(p => p.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className={`${isDarkMode ? 'dark-theme' : 'light-theme'} h-screen w-full flex flex-col font-mono relative overflow-hidden transition-colors duration-300`}>
      
      {/* 1. INTERACTIVE BACKGROUND STREAM */}
      <div className="data-stream select-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="data-line whitespace-nowrap text-[11px] font-black opacity-40 hover:opacity-100" 
            onMouseDown={() => setQuery(bgCommands[i % bgCommands.length].split(' ')[0])}
            style={{ 
              left: `${i * 7}%`, 
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${12 + (i % 8)}s`
            }}
          >
            {bgCommands[i % bgCommands.length]}
            <span className="ml-32">{bgCommands[(i + 4) % bgCommands.length]}</span>
          </div>
        ))}
      </div>

      <main className={`flex-1 p-4 md:p-8 flex flex-col md:flex-row gap-6 items-start relative z-10 overflow-hidden mb-10 ${isMaximized ? 'md:p-0' : ''}`}>
  {!isMaximized && (
    /* Changed 'hidden lg:flex' to 'flex' so it shows on mobile.
       Added 'mx-auto md:mx-0' to center it on phones. */
    <aside className="flex flex-col gap-6 mx-auto md:mx-0 mb-4 md:mb-0">
      <FloppyDisk />
    </aside>
  )}

        {!isMinimized && (
          <Terminal 
            query={query} 
            setQuery={setQuery}
            isMaximized={isMaximized}
            onMinimize={() => setIsMinimized(true)}
            onMaximize={() => setIsMaximized(!isMaximized)}
            onClose={() => {
              if(window.confirm("C:\\> Terminate session and restart?")) window.location.reload();
            }}
          >
            <div className="flex flex-col lg:flex-row gap-8 h-full min-h-0">
              <div className="lg:w-1/3 flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
                <section>
                  <h1 className="text-3xl font-black title-text mb-1 neon-glow tracking-tighter uppercase">GHUFRAN KHAN</h1>
                  <p className="text-[10px] cmd-text font-bold mb-4 tracking-widest uppercase">&gt; Backend_Engineer_v1.0</p>
                  <div className="win-inset p-3 bg-black/20 text-[11px] leading-relaxed body-text border-l-2 border-cyber-cyan">
                    {DATA.about}
                  </div>
                </section>

                <section>
                  <h2 className="text-[10px] font-bold title-text mb-3 uppercase tracking-widest border-b border-win-gray/30 pb-1">/SYS/EDUCATION</h2>
                  <div className="space-y-4">
                    <div className="win-inset p-2 bg-black/10 group transition-all">
                      <h3 className="text-[10px] font-bold title-text uppercase">BS Software Engineering</h3>
                      <p className="text-[9px] body-text opacity-70">University of Karachi (UBIT)</p>
                      <p className="text-[8px] cmd-text">2022 - 2025</p>
                    </div>
                    <div className="win-inset p-2 bg-black/10 group transition-all">
                      <h3 className="text-[10px] font-bold title-text uppercase">Intermediate CS</h3>
                      <p className="text-[9px] body-text opacity-70">Govt. College for Men, Nazimabad</p>
                      <p className="text-[8px] cmd-text">2019 - 2021</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-[10px] font-bold title-text mb-3 uppercase tracking-widest border-b border-win-gray/30 pb-1">/SYS/CERTIFICATIONS</h2>
                  <div className="win-inset p-2 bg-black/10 group transition-all">
                    <h3 className="text-[10px] font-bold title-text uppercase">Meta Backend Specialization</h3>
                    <ul className="text-[9px] body-text opacity-70 mt-1 space-y-1">
                      <li>• Django & MS SQL Architecture</li>
                      <li>• JWT & Role-based Auth</li>
                      <li>• Relational DB Design</li>
                    </ul>
                  </div>
                </section>
              </div>

              <div className="lg:w-2/3 flex flex-col min-h-0">
                <h2 className="text-[10px] font-bold title-text mb-3 uppercase tracking-widest border-b border-win-gray/30 pb-1 flex justify-between">
                  <span>/VAR/LOG/EXPERIENCE</span>
                  <span className="cmd-text animate-pulse">● LIVE_FEED</span>
                </h2>
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
                  {filteredExperience.length > 0 ? filteredExperience.map((job, idx) => (
                    <div key={idx} className="win-inset p-4 bg-black/5 group transition-all border-l-2 border-transparent 
                                              hover:border-cyber-yellow hover:shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-sm font-bold title-text group-hover:text-cyber-yellow transition-colors">{job.role}</h3>
                          <p className="text-[11px] cmd-text font-bold">@ {job.company}</p>
                        </div>
                        <span className="text-[9px] px-2 py-1 bg-win-blue text-white font-bold">{job.period}</span>
                      </div>
                      <ul className="space-y-2 mt-3 text-[11px] body-text opacity-80 group-hover:opacity-100">
                        {job.points.map((p, i) => <li key={i} className="flex gap-2"><span className="text-cyber-cyan font-bold">»</span>{p}</li>)}
                      </ul>
                    </div>
                  )) : (
                    <div className="text-center py-20 opacity-40 uppercase text-xs tracking-tighter">No logs found for "{query}"</div>
                  )}
                </div>
              </div>
            </div>
          </Terminal>
        )}
      </main>

      <Taskbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isMinimized={isMinimized} onRestore={() => setIsMinimized(false)} />
    </div>
  );
}