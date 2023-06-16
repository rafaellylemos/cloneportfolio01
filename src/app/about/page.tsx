import { Header } from "@/components/Header";
import { LighDark } from "@/components/LighDark";
import { Menu } from "@/components/Menu";

export default function about() {
  return (
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
          <div className="pl-3 text-sm flex flex-col items-start h-60 font-thin">
              <p>Born in Recife/PE.<br></br>
                I've been a photographer since 2014<br></br>
                and I've been studying Frontend<br></br>
                 development for 9 months.<br></br>
                I believe that art makes a difference <br></br>
                in the world... and that's what I've <br></br>
                always tried to convey with <br></br>
                my photography and now with my codes.<br></br></p>
          </div>
          <div className="absolute bottom-[65px] left-[-80px] transform -rotate-90 font-thin uppercase text-sm">
            <LighDark />
          </div>
        </>
      </main>
  )
}