import Navbar from "./Navbar";
import Footer from "./Footer";
import Overlay from "./Overlay";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Image from "next/image";
import wave from "../public/images/wave.png";

export default function Layout({ children }) {
   const openmenu = useSelector((state) => state.openMenu.value);
   const lang = useSelector((state) => state.lang.value);
   const theme = useSelector((state) => state.theme.value);
   useEffect(() => {
      const theme = localStorage.theme;
      if (
         theme === "dark" ||
         (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, [theme]);
   return (
      <div className={lang == "ar" ? "ar" : ""}>
         <Navbar />
         {openmenu && <Overlay />}
         <main>
            <div className="">
               <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full blur-3xl -z-10 -rotate-180">
                  <Image src={wave} layout="fill" />
               </div>
               {children}
            </div>
         </main>
         <Footer />
      </div>
   );
}
