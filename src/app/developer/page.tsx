import { Header } from "@/components/Header";
import { LighDark } from "@/components/LighDark";
import { Menu } from "@/components/Menu";
import { Quote } from "@/components/Quote";
import IconLinkedinCircled from "@/icons/IconLinkedinCircled";
import IconGithub from "@/icons/iconGithub";

export default function developer() {
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
            <p className="text-6xl pr-14 mb-5"><IconLinkedinCircled /></p>
            <p className="text-6xl pr-14"><IconGithub /></p>
          </div>
        </div>
        <div className="absolute bottom-[65px] left-[-80px] transform -rotate-90 font-thin uppercase text-sm">
          <LighDark />
        </div>
      </>
    </main>
  </>
  )
}