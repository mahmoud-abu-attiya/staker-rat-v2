import { useState } from "react";
import avatar from "../public/images/avatar.svg";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SearchBox = () => {
   const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
   const lang = useSelector((state) => state.lang.value);
   const router = useRouter();


   useEffect(() => {
      setIsSuggestionsOpen(false);
   }, [router])


   const closeSuggestions = () => {
      setTimeout(() => {
         setIsSuggestionsOpen(false);
      }, 100)
   }
   return (
      <div className="flex grow relative">
         <div className="relative md:block w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
               <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fillRule="evenodd"
                     d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                     clipRule="evenodd"
                  />
               </svg>
               <span className="sr-only">Search icon</span>
            </div>
            <input
               onFocus={() => setIsSuggestionsOpen(true)}
               onBlur={closeSuggestions}
               type="text"
               id="search-navbar"
               className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:border-primary outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
               placeholder={lang === "en" ? "Search" : "بحث..."}
            />
         </div>
         {isSuggestionsOpen && (
            <div className="suggetions w-full bg-gray-100 dark:bg-gray-700 p-2 rounded-lg absolute flex flex-col gap-2 shadow-xl border border-gray-300 dark:border-gray-600">
               <Link href={"/user/1"} className="cursor-pointer">
                  <div className="person py-2 sm:px-4 px-2 flex items-center gap-2 sm:gap-4 rounded-lg bg-gray-50 hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 transition dark:text-gray-300 shadow-sm dark:shadow-md">
                     <div className="img-container w-16 h-16">
                        <Image src={avatar} alt="mahmoud abu attiya" />
                     </div>
                     <div className="">
                        <h5 className="sm:text-xl">Mahmoud Abu-Attiya</h5>
                     <p className="text-xs font-light">this is bio...</p>
                     </div>
                  </div>
               </Link>
               <Link href={"/user/1"} className="cursor-pointer">
                  <div className="person py-2 sm:px-4 px-2 flex items-center gap-2 sm:gap-4 rounded-lg bg-gray-50 hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 transition dark:text-gray-300 shadow-sm dark:shadow-md">
                     <div className="img-container w-16 h-16">
                        <Image src={avatar} alt="mahmoud abu attiya" />
                     </div>
                     <div className="">
                        <h5 className="sm:text-xl">Mahmoud Abu-Attiya</h5>
                     <p className="text-xs font-light">this is bio...</p>
                     </div>
                  </div>
               </Link>
               <Link href={"/user/1"} className="cursor-pointer">
                  <div className="person py-2 sm:px-4 px-2 flex items-center gap-2 sm:gap-4 rounded-lg bg-gray-50 hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 transition dark:text-gray-300 shadow-sm dark:shadow-md">
                     <div className="img-container w-16 h-16">
                        <Image src={avatar} alt="mahmoud abu attiya" />
                     </div>
                     <div className="">
                        <h5 className="sm:text-xl">Mahmoud Abu-Attiya</h5>
                     <p className="text-xs font-light">this is bio...</p>
                     </div>
                  </div>
               </Link>
            </div>
         )}
      </div>
   );
};

export default SearchBox;
