// components/FloppyDisk.jsx
import React, { useState } from 'react';
import { Save } from 'lucide-react';

export default function FloppyDisk() {
  const [isMounting, setIsMounting] = useState(false);

  const handleDownload = () => {
    setIsMounting(true);
    // Simulate floppy drive noise/delay
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = './resume.pdf'; 
      link.download = 'Ghufran_Khan_Resume.pdf';
      link.click();
      setIsMounting(false);
    }, 1500);
  };

  return (
    <div 
      onClick={handleDownload}
      /* Added min-w and touch-friendly padding for mobile */
      className="win-outset p-2 cursor-pointer hover:bg-gray-200 transition-colors group relative flex flex-col items-center min-w-[70px] sm:min-w-[80px]"
    >
      <div className={`w-10 h-10 bg-win-blue flex items-center justify-center text-white ${isMounting ? 'animate-pulse' : ''}`}>
        <Save size={20} />
      </div>
      
      {/* Changed 'text-black' to 'taskbar-text-adaptive' 
         This ensures it stays visible in Dark Mode (Yellow) and Light Mode (Black)
      */}
      <p className="text-[9px] mt-1 text-center font-bold taskbar-text-adaptive">
        {isMounting ? 'READING...' : 'RESUME.EXE'}
      </p>
      
      {/* Floppy Label Detail */}
      <div className="absolute top-2 right-2 w-1 h-3 bg-white/20"></div>
    </div>
  );
}