import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Messages from "./Message";

// const Messages = ({ text, msgs }) => {
//    const rtlChar = /[\u0600-\u06FF]/;
//    return (
//       <div className="dark:text-white">
//          <h1 className="text-2xl md:text-4xl lg:text-5xl drop-shadow-md my-4 font-bold">
//             <span className="text-primary">{text.slice(0, 1)}</span>
//             {text.slice(1)}
//          </h1>
//          <div className="flex flex-col px-2 mb-8 md:p-4 gap-4 md:gap-8">
//             {msgs.map((msg, i) => (
//                <div
//                   key={i}
//                   className="flex gap-4 p-2 md:p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md border dark:border-gray-700"
//                >
//                   <div className="flex flex-col justify-center">
//                      <p
//                         dir={msg.text.match(rtlChar) ? "rtl" : "ltr"}
//                         className={`text-gray-700 dark:text-gray-200 ${
//                            msg.text.match(rtlChar) ? "text-right" : "text-left"
//                         }`}
//                      >
//                         {msg.text}
//                      </p>
//                      <div className="flex items-center justify-between border-t border-1 dark:border-gray-700 pt-4 mt-4">
//                         <div className="date text-gray-400 dark:text-gray-500 text-xs">
//                            2023/3/15 | 05:08 PM
//                         </div>
//                         <p className="text-xs md:text-sm">
//                            <span className="text-primary">S</span>taker{" "}
//                            <span className="text-primary">R</span>at
//                         </p>
//                         <div className="flex gap-2 md:gap-4">
//                            <button className="px-2 md:px-3 py-1 md:py-2 bg-gray-200 dark:bg-gray-700 text-xs md:text-base hover:shadow-inner transition rounded-md shadow text-blue-500">
//                               <i className="fad fa-share-alt"></i>
//                            </button>
//                            <button className="px-2 md:px-3 py-1 md:py-2 bg-gray-200 dark:bg-gray-700 text-xs md:text-base hover:shadow-inner transition rounded-md shadow text-yellow-500">
//                               <i className="far fa-heart"></i>
//                            </button>
//                            <button className="px-2 md:px-3 py-1 md:py-2 bg-gray-200 dark:bg-gray-700 text-xs md:text-base hover:shadow-inner transition rounded-md shadow text-red-500">
//                               <i className="fad fa-trash-alt"></i>
//                            </button>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//             ))}
//          </div>
//       </div>
//    );
// };

const MessagesSwiper = () => {
   const lang = useSelector((state) => state.lang.value);
   const [translate, setTranslate] = useState("-0");
   const taps = [
      { en: "Inbox", ar: "الوارد" },
      { en: "Favorit", ar: "المفضلة" },
      { en: "Sent", ar: "المرسلة" },
   ];
   const msgs = [
      {
         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus consequatur itaque sit? Voluptates provident quibusdam nihil, voluptate deserunt dicta dolorem! Vel exercitationem voluptates laboriosam repellat voluptatibus labore voluptas maiores?",
      },
      {
         text: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد  أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات",
      },
      {
         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus consequatur itaque sit? Voluptates provident quibusdam nihil, voluptate deserunt dicta dolorem! Vel exercitationem voluptates laboriosam repellat voluptatibus labore voluptas maiores?",
      },
      {
         text: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد  أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات",
      },
   ];
   return (
      <div className="flex gap-4 flex-col">
         {/* Tabs */}
         <div className="sticky top-16 md:top-20 z-10 grid grid-cols-3 gap-2 md:gap-3 p-2 md:p-3 rounded-lg backdrop-blur-lg bg-gray-50/75 dark:bg-gray-900/75 shadow-md border dark:border-gray-800">
            {taps.map((item, index) => (
               <div
                  key={index}
                  className={`p-2 md:p-4 rounded-md cursor-pointer text-center text-xs md:text-xl transition duration-500 shadow dark:text-white md:font-bold ${
                     +translate === (-index * 100) / 3
                        ? "shadow-inner bg-gray-200 dark:bg-gray-700"
                        : "dark:bg-gray-800 bg-gray-100"
                  }`}
                  onClick={() => setTranslate((-index * 100) / 3)}
               >
                  <p className="hidden sm:block">
                     {lang === "en" ? item.en : item.ar}
                     <span className="bg-primary rounded-xl px-1 text-white h-fit mx-2">
                        3
                     </span>
                  </p>
                  <p className="block sm:hidden">
                     <i
                        className={`fas ${
                           item.en === "Inbox"
                              ? "fa-inbox"
                              : item.en === "Favorit"
                              ? "fa-star"
                              : "fa-paper-plane"
                        }`}
                     ></i>
                     <span className="bg-primary rounded-xl px-1 text-white h-fit mx-2">
                        3
                     </span>
                  </p>
               </div>
            ))}
         </div>

         {/* Messages Sections */}
         <div className="w-full overflow-hidden">
            <div
               className="w-[300%] grid grid-cols-3 transition duration-500"
               style={{
                  transform: `translateX(${
                     lang === "en" ? translate + "%" : -translate + "%"
                  })`,
               }}
            >
               {taps.map((item, index) => (
                  <Messages
                     key={index}
                     msgs={msgs}
                     text={lang === "en" ? item.en : item.ar}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default MessagesSwiper;
