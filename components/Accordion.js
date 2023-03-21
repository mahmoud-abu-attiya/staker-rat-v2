import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../slices/langSlice";

export const AccordionItem = ({
   children,
   handleToggle,
   active,
   id,
   title,
}) => {
   const contentEl = useRef();

   return (
      <div className="border shadow-md dark:border-gray-700 rounded-lg overflow-hidden">
         <div
            className={`flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 ${
               active === id ? "active" : ""
            }`}
            onClick={() => handleToggle(id)}
         >
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl my-4">
               <span className="text-primary">{title.slice(0, 1)}</span>
               {title.slice(1)}
            </h2>
            <i
               className={`fa fa-chevron-down text-xl transition duration-400 ${
                  active === id && "rotate-180"
               }`}
            ></i>
         </div>
         <div
            ref={contentEl}
            className={`relative h-0 overflow-hidden transition-all duration-400 ${
               active === id && "h-auto"
            }`}
            style={
               active === id
                  ? { height: contentEl.current?.scrollHeight + "px" }
                  : { height: "0px" }
            }
         >
            <div className="p-4 bg-white dark:bg-gray-900 flex gap-4">
               {children}
            </div>
         </div>
      </div>
   );
};
const Accordion = () => {
   const lang = useSelector((state) => state.lang.value);
   const dispatch = useDispatch();
   const [active, setActive] = useState();

   const handleToggle = (index) => {
      if (active === index) {
         setActive(null);
      } else {
         setActive(index);
      }
   };

   const changeLang = (lang) => {
      dispatch(setLang(lang));
      localStorage.setItem("lang", lang);
   };

   return (
      <>
         <div className="container-fluid mt-5 mb-5">
            <div className="row justify-content-center">
               <div className="col-md-8 mt-2">
                  <div className="flex flex-col gap-4">
                     <AccordionItem
                        id={1}
                        active={active}
                        handleToggle={handleToggle}
                        title={lang == "ar" ? "المظهر" : "Theme"}
                     >
                        <button className="shadow px-6 text-xl py-3 rounded-md bg-gray-50 dark:bg-gray-800">
                           {lang == "ar" ? "فاتح" : "Light"}
                        </button>
                        <button className="shadow px-6 text-xl py-3 rounded-md bg-gray-50 dark:bg-gray-800">
                           {lang == "ar" ? "داكن" : "Dark"}
                        </button>
                        <button className="shadow px-6 text-xl py-3 rounded-md bg-gray-50 dark:bg-gray-800">
                           {lang == "ar" ? "النظام" : "System"}
                        </button>
                     </AccordionItem>
                     <AccordionItem
                        id={2}
                        active={active}
                        handleToggle={handleToggle}
                        title={lang == "ar" ? "اللغة" : "Language"}
                     >
                        <button onClick={() => changeLang("en")} className={`shadow px-6 text-xl py-3 rounded-md bg-gray-50 dark:bg-gray-800 transition ${lang == "en" && "shadow-inner bg-gray-100"}`}>
                           English
                        </button>
                        <button onClick={() => changeLang("ar")} className={`ar shadow px-6 text-xl py-3 rounded-md bg-gray-50 dark:bg-gray-800 transition ${lang == "ar" && "shadow-inner bg-gray-100"}`}>
                           العربية
                        </button>
                     </AccordionItem>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Accordion;
