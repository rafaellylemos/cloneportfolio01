
import { Header } from "@/components/Header";
import { LighDark } from "@/components/LighDark";
import { Menu } from "@/components/Menu";
import { Quote } from "@/components/Quote";

export default function Home() {
  return (
    <>
      <main className="flex flex-col bg-white m-10 relative border border-solid border-slate-500">
        <>
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
              <Quote />
            </div>
          </div>
          <div className="absolute bottom-[65px] left-[-80px] transform -rotate-90 font-thin uppercase text-sm">
            <LighDark />
          </div>
        </>
      </main>
    </>
  );
}