'use client';

import { Header } from "@/components/Header";
import { LighDark } from "@/components/LighDark";
import { Menu } from "@/components/Menu";
import { useState } from "react";
import IconBxlInstagramAlt from "@/icons/IconBxlInstagramAlt";
import IconWorldWww from "@/icons/IconWorldWww";

export default function Developer() {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (iconName) => {
    setIsHovered(iconName);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <>
      <main className="flex flex-col bg-white m-10 relative border border-solid border-slate-500">
        <div className="flex flex-col items-start h-60 font-thin uppercase">
          <div className="header-wrapper">
            <Header />
          </div>
        </div>
        <div className="flex flex-col items-start h-48 font-thin uppercase">
          <div className="sidebar-wrapper">
            <Menu />
          </div>
        </div>
        <div className="flex flex-col items-end h-60 font-thin uppercase">
          <div className="aboutme-wrapper">

            
            <div>
              <p
                className={`text-5xl pr-5 mb-4 hover:cursor-pointer ${
                  isHovered === "instagram" ? "opacity-50" : "opacity-100"
                }`}
                onMouseEnter={() => handleMouseEnter("instagram")}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className={`inline-block w-14 ${
                    isHovered === "instagram" ? "opacity-50" : ""
                  }`}
                  style={{
                    marginRight: isHovered === "instagram" ? "0" : "",
                  }}
                >
                  <IconBxlInstagramAlt />
                </span>
                <span
                  className={`${
                    isHovered === "instagram" ? "invisible" : ""
                  }`}
                >
                  Instagram
                </span>
              </p>
            </div>
            <div>
              <p
                className={`text-5xl pr-5 mb-5 hover:cursor-pointer ${
                  isHovered === "site" ? "opacity-50" : "opacity-100"
                }`}
                onMouseEnter={() => handleMouseEnter("site")}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className={`inline-block w-14 ${
                    isHovered === "site" ? "opacity-50" : ""
                  }`}
                  style={{
                    marginRight: isHovered === "site" ? "0" : "",
                  }}
                >
                  <IconWorldWww />
                </span>
                <span
                  className={`${
                    isHovered === "site" ? "invisible" : ""
                  }`}
                >
                  Site
                </span>
              </p>
            </div>

            
          </div>
        </div>
        <div className="absolute bottom-[65px] left-[-80px] transform -rotate-90 font-thin uppercase text-sm">
          <LighDark />
        </div>
      </main>
    </>
  );
}
