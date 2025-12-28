import React from 'react';
import { X, Square, Minus, Search } from 'lucide-react';

export default function Terminal({ 
  children, 
  query, 
  setQuery, 
  isMaximized, 
  onMinimize, 
  onMaximize, 
  onClose 
}) {
  return (
    <div className={`flex-1 flex flex-col win-outset transition-all duration-300 ${
      isMaximized ? 'fixed inset-0 z-[100] m-0' : 'h-full max-h-[85vh]'
    }`}>
      
      {/* --- WINDOW TITLE BAR --- */}
      <div className="bg-win-blue p-1 flex items-center justify-between select-none">
        <div className="flex items-center gap-2 px-1">
          <img src="./win97-logo.png" className="w-4 h-4" alt="icon" />
          <span className="text-white font-bold text-xs tracking-wide">PORTFOLIO.LOG</span>
        </div>

        {/* WINDOW CONTROLS */}
        <div className="flex gap-1">
          <button 
            onClick={onMinimize}
            className="win-outset bg-win-silver p-0.5 hover:bg-gray-200 active:win-inset"
          >
            <Minus size={12} className="text-black" />
          </button>
          <button 
            onClick={onMaximize}
            className="win-outset bg-win-silver p-0.5 hover:bg-gray-200 active:win-inset"
          >
            <Square size={12} className="text-black" />
          </button>
          <button 
            onClick={onClose}
            className="win-outset bg-win-silver p-0.5 hover:bg-red-500 hover:text-white active:win-inset ml-1"
          >
            <X size={12} className="text-black group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* --- SEARCH BAR / TOOLBAR --- */}
      <div className="bg-win-silver p-2 border-b border-win-gray flex items-center gap-4">
        <div className="flex items-center gap-2 win-inset bg-white px-2 py-1 flex-1 max-w-md">
          <Search size={14} className="text-gray-500" />
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search system logs (e.g. Django, Python)..."
            className="bg-transparent border-none outline-none text-xs w-full text-black font-mono"
          />
        </div>
        <div className="hidden sm:block text-[10px] font-bold text-win-darkGray">
          STATUS: <span className="text-green-700">ONLINE</span>
        </div>
      </div>

      {/* --- TERMINAL CONTENT AREA --- */}
      <div className="flex-1 overflow-hidden p-1 bg-white/5 backdrop-blur-sm">
        <div className="h-full win-inset bg-black/40 p-4 md:p-6 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>

      {/* --- WINDOW FOOTER --- */}
      <div className="bg-win-silver p-1 flex justify-between items-center text-[10px] border-t border-win-gray">
        <div className="win-inset px-4 py-0.5 bg-gray-200 text-black">
          Lines: {Math.floor(Math.random() * 1000) + 500}
        </div>
        <div className="win-inset px-4 py-0.5 bg-gray-200 text-black uppercase">
          Encoding: UTF-8
        </div>
      </div>
    </div>
  );
}