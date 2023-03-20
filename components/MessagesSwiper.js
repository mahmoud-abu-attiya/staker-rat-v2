import { useState } from "react";

const Messages = ({ text, msgs }) => {
   return (
      <div className="dark:text-white">
         <h1 className="text-2xl md:text-4xl lg:text-5xl drop-shadow-md my-4 font-bold">
            <span className="text-primary">{text.slice(0, 1)}</span>
            {text.slice(1)}
            </h1>
         <div className="flex flex-col px-2 mb-8 md:p-4 gap-4 md:gap-8">
         {msgs.map((msg, i) => (
            <div
               key={i}
               className="flex gap-4 p-2 md:p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md border dark:border-gray-700"
            >
               <div className="flex flex-col justify-center">
                  <p className="text-gray-700 dark:text-gray-200">{msg.text}</p>
                  <div className="flex items-center justify-between border-t border-1 dark:border-gray-700 pt-4 mt-4">
                     <div className="date text-gray-400 dark:text-gray-500 text-xs">2023/3/15 | 05:08 PM</div>
                     <p className="text-xs md:text-sm"><span className="text-primary">S</span>taker <span className="text-primary">R</span>at</p>
                     <div className="flex gap-2 md:gap-4">
                        <button className="px-2 md:px-3 py-1 md:py-2 bg-gray-200 dark:bg-gray-700 text-xs md:text-base hover:shadow-inner transition rounded-md shadow text-blue-500"><i className="fad fa-share-alt"></i></button>
                        <button className="px-2 md:px-3 py-1 md:py-2 bg-gray-200 dark:bg-gray-700 text-xs md:text-base hover:shadow-inner transition rounded-md shadow text-yellow-500"><i className="far fa-heart"></i></button>
                        <button className="px-2 md:px-3 py-1 md:py-2 bg-gray-200 dark:bg-gray-700 text-xs md:text-base hover:shadow-inner transition rounded-md shadow text-red-500"><i className="fad fa-trash-alt"></i></button>
                     </div>
                  </div>
               </div>
            </div>
         ))}
         </div>
      </div>
   );
};

const MessagesSwiper = () => {
   const [translate, setTranslate] = useState("0");
   const msgs = [
      {
         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus consequatur itaque sit? Voluptates provident quibusdam nihil, voluptate deserunt dicta dolorem! Vel exercitationem voluptates laboriosam repellat voluptatibus labore voluptas maiores?",
      },
      {
         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus consequatur itaque sit? Voluptates provident quibusdam nihil, voluptate deserunt dicta dolorem! Vel exercitationem voluptates laboriosam repellat voluptatibus labore voluptas maiores?",
      },
      {
         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus consequatur itaque sit? Voluptates provident quibusdam nihil, voluptate deserunt dicta dolorem! Vel exercitationem voluptates laboriosam repellat voluptatibus labore voluptas maiores?",
      },
   ];
   return (
      <div className="flex gap-4 flex-col">
         <div className="sticky top-16 md:top-20 z-10 grid grid-cols-4 gap-2 md:gap-3 p-2 md:p-3 rounded-lg backdrop-blur-lg bg-gray-50/75 dark:bg-gray-900/75 shadow-md border dark:border-gray-800">
            <div
               className={`p-2 md:p-4 rounded-md cursor-pointer text-center text-xs md:text-xl transition duration-500 shadow dark:text-white md:font-bold ${
                  translate == "0"
                     ? "shadow-inner bg-gray-200 dark:bg-gray-700"
                     : "dark:bg-gray-800 bg-gray-100"
               }`}
               onClick={() => setTranslate("0")}
            >
               Messages
            </div>
            <div
               className={`p-2 md:p-4 rounded-md cursor-pointer text-center text-xs md:text-xl transition duration-500 shadow dark:text-white md:font-bold ${
                  translate == "25"
                     ? "shadow-inner bg-gray-200 dark:bg-gray-700"
                     : "dark:bg-gray-800 bg-gray-100"
               }`}
               onClick={() => setTranslate("25")}
            >
               New
            </div>
            <div
               className={`p-2 md:p-4 rounded-md cursor-pointer text-center text-xs md:text-xl transition duration-500 shadow dark:text-white md:font-bold ${
                  translate == "50"
                     ? "shadow-inner bg-gray-200 dark:bg-gray-700"
                     : "dark:bg-gray-800 bg-gray-100"
               }`}
               onClick={() => setTranslate("50")}
            >
               Favorit
            </div>
            <div
               className={`p-2 md:p-4 rounded-md cursor-pointer text-center text-xs md:text-xl transition duration-500 shadow dark:text-white md:font-bold ${
                  translate == "75"
                     ? "shadow-inner bg-gray-200 dark:bg-gray-700"
                     : "dark:bg-gray-800 bg-gray-100"
               }`}
               onClick={() => setTranslate("75")}
            >
               Sent
            </div>
         </div>
         <div className="w-full overflow-hidden">
            <div
               className="w-[400%] grid grid-cols-4 transition duration-500 "
               style={{ transform: `translateX(-${translate}%)` }}
            >
               <Messages msgs={msgs} text="Messages" />
               <Messages msgs={msgs} text="New" />
               <Messages msgs={msgs} text="Favorit" />
               <Messages msgs={msgs} text="Sent" />
            </div>
         </div>
      </div>
   );
};

export default MessagesSwiper;
