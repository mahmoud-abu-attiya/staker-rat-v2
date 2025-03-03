import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const Footer = () => {
   const lang = useSelector((state) => state.lang.value);
   return (
      <footer id="footer" className="dark:bg-gray-800 bg-gray-100">
         <div className="container p-4 relative z-10 md:flex md:items-center md:justify-between md:p-6 ">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
               {lang == "ar"
                  ? "جميع الحقوق محفوظة © 2022 Stalker Rat™."
                  : "© 2022 Stalker Rat™. All Rights Reserved."}
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
               <li>
                  <Link href="/about" className="mr-4 hover:underline md:mr-6">
                     {lang == "ar" ? "من نحن" : "About"}
                  </Link>
               </li>
               <li>
                  <Link href="/terms" className="mr-4 hover:underline md:mr-6">
                     {lang == "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
                  </Link>
               </li>
               <li>
                  <Link href={"/contact"} className="hover:underline">
                     {lang == "ar" ? "تواصل معنا" : "Contact"}
                  </Link>
               </li>
            </ul>
         </div>
      </footer>
   );
};

export default Footer;
