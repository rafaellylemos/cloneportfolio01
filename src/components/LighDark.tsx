'use client';

import IconSquare from "@/icons/IconSquare";
import { useState } from "react";

export function LighDark() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex">
      <div className="flex items-center gap-1">
        <IconSquare
          onClick={handleModeToggle}
          className={`bg-${isDarkMode ? 'white' : 'black'}`}
        />
      </div>
      <div className="ml-1 mr-5">Light</div>
      <div className="flex items-center gap-1">
        <IconSquare
          onClick={handleModeToggle}
          className={`bg-${isDarkMode ? 'black' : 'white'}`}
        />
      </div>
      <div className="ml-1">Dark</div>
    </div>
  );
}
