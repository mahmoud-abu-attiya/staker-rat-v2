/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import SearchBox from "../components/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { setOpenMenu } from "../slices/openMenuSlice";
import { setLang } from "../slices/langSlice";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import avatar from "../public/images/avatar.svg";

const Navbar = () => {
   const lang = useSelector((state) => state.lang.value);
   const openMenu = useSelector((state) => state.openMenu.value);
   const dispatch = useDispatch();
   const router = useRouter();
   const isLogin = true;

   useEffect(() => {
      if (openMenu) {
         dispatch(setOpenMenu(false));
      }
   }, [router]);

   useEffect(() => {
      let lang = localStorage.getItem("lang");
      if (!lang) {
         localStorage.setItem("lang", "en");
         lang = "en";
         dispatch(setLang(lang));
      } else {
         dispatch(setLang(lang));
      }
   }, []);
   return (
      <nav
         id="navbar"
         className="bg-white/75 px-2 sm:px-4 border-b border-gray-100 dark:border-gray-800 py-2.5 dark:bg-gray-900/75 backdrop-blur-md shadow-sm z-30 sticky top-0 w-full"
      >
         <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link href="/" className="flex items-center gap-2">
            <Image src={'/logo.svg'} width={35} height={35} alt='Stalker Rat logo' />
               <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  <span className="text-primary">S</span>taker{" "}
                  <span className="text-primary">R</span>at
               </span>
            </Link>
            <div className="flex md:order-2">
               {!isLogin ? (
                  <div className="relative hidden md:block">
                     <div className="flex justify-center items-center gap-2 py-4 md:py-0 text-gray-900 dark:text-gray-100">
                        <Link
                           href={"/signup"}
                           className="bg-primary px-3 py-2 text-white rounded-lg dark:text-gray-800 hover:bg-primary/75 transition"
                        >
                           {lang == "ar" ? "انشاء حساب" : "Sign Up"}
                        </Link>
                        <Link
                           href={"/login"}
                           className="px-3 py-2 font-light hover:bg-primary/25 transition rounded-lg text-primary border border-primary"
                        >
                           {lang == "ar" ? "تسجيل الدخول" : "Login"}
                        </Link>
                     </div>
                  </div>
               ) : (
                  <Link
                     href={"/profile"}
                     className="hidden md:block border-primary border-2 rounded-full overflow-hidden w-10 h-10"
                  >
                     <Image
                        src={avatar}
                        alt="avatar"
                        width={100}
                        height={100}
                     />
                  </Link>
               )}
               <button
                  data-collapse-toggle="navbar-search"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  onClick={() => dispatch(setOpenMenu(!openMenu))}
               >
                  <span className="sr-only">Open menu</span>
                  <svg
                     className="w-6 h-6"
                     aria-hidden="true"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                     />
                  </svg>
               </button>
            </div>
            <div
               className={`items-center justify-between w-full flex-grow-0 md:flex-grow-[0.5] md:flex md:w-auto md:order-1 ${
                  openMenu ? "block  mt-3 md:mt-0" : "hidden"
               } ${isLogin && "flex md:block items-center gap-4"}`}
               id="navbar-search"
            >
               <SearchBox />
               {!isLogin ? (
                  <div className="font-light flex md:hidden justify-center items-center gap-2 py-4 md:py-0 text-gray-900 dark:text-gray-100">
                     <Link
                        href={"/signup"}
                        className="bg-primary px-3 py-2 text-white rounded-lg dark:text-gray-800"
                     >
                        {lang == "ar" ? "انشاء حساب" : "Sign Up"}
                     </Link>
                     <Link
                        href={"/login"}
                        className="px-3 py-2 rounded-lg text-primary border border-primary"
                     >
                        {lang == "ar" ? "تسجيل الدخول" : "Login"}
                     </Link>
                  </div>
               ) : (
                  <Link
                     href={"/profile"}
                     className="block md:hidden border-primary border-2 rounded-full overflow-hidden w-10 h-10"
                  >
                     <Image
                        src={avatar}
                        alt="avatar"
                        width={100}
                        height={100}
                     />
                  </Link>
               )}
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
