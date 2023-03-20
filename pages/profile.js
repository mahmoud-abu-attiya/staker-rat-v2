/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import MessagesSwiper from "../components/MessagesSwiper";

const Messages = () => {
   return (
      <div className="pt-4 container">
         <MessagesSwiper />
      </div>
   );
};

export default function Profile() {
   useEffect(() => {
      const share = document.querySelector(".share");
      const popover = document.querySelector(".popover");
      share.querySelector(".icon").onmouseover = () => {
         popover.classList.remove("opacity-0");
      };
      share.onmouseleave = () => {
         popover.classList.add("opacity-0");
      };
      // share.on
   }, []);
   return (
      <div>
         <div className="head">
            <div className="cover border-b-4 md:border-b-8 border-primary py-12 bg-white dark:bg-gray-900">
               <div className="container">
                  <div className="avatar grid grid-cols-12 items-center gap-2 md:gap-4">
                     {/* <img src="https://i.imgur.com/8Q9QY7C.png" alt="avatar" /> */}
                     <div className="img rounded-full border-2 md:border-4 border-primary overflow-hidden col-span-3">
                        <img src={"images/mahmoud.jpg"} alt="avatar" />
                     </div>
                     <div className="col-span-9">
                     <div className="flex items-center justify-between gap-4">
                        <h1 className="col-span-8 font-bold sm:text-2xl md:text-3xl lg:text-5xl drop-shadow-md dark:text-white">
                           Mahmoud Abu-Attiya
                        </h1>
                        <div className="share relative w-fit h-fit shadow-md">
                           <div className="icon cursor-pointer text-white bg-primary w-8 h-8 md:w-12 md:h-12 rounded flex justify-center items-center">
                              <i className="fas fa-share md:text-xl" />
                           </div>
                           <div className="absolute hidden lg:block popover top-[-169%] -translate-x-1/2 left-1/2 z-10 w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                              <div className="px-3 py-2 ">
                                 <p className=" cursor-auto">
                                    And here's some amazing content. It's very
                                    engaging. Right?
                                 </p>
                              </div>
                              <div className="absolute bottom-[-5px] border-b border-r rotate-45 left-1/2 -translate-x-1/2 bg-inherit w-[10px] h-[10px]" />
                           </div>
                        </div>
                     </div>
                     <p className="dark:text-gray-300 text-gray-700 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque, tenetu</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Messages />
      </div>
   );
}
