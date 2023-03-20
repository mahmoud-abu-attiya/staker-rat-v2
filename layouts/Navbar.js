/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "../components/SearchBox";
import Logo from "../public/images/logo.png";
import { useSelector, useDispatch } from 'react-redux'
import { setOpenMenu } from '../slices/openMenuSlice'

const Navbar = () => {
   const openMenu = useSelector(state => state.openMenu.value)
   const dispatch = useDispatch();
   return (
      <nav id="navbar" className="bg-white/75 px-2 sm:px-4 border-b border-gray-100 dark:border-gray-800 py-2.5 dark:bg-gray-900/75 backdrop-blur-lg shadow-sm z-30 sticky top-0 w-full">
         <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href='/' className="flex items-center">
               {/* <div className="mr-3 h-7 sm:h-10 aspect-square">
                  <Image src={Logo} alt="Stalker Rat" className="w-full" />
               </div> */}
               <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  <span className="text-primary">S</span>taker <span className="text-primary">R</span>at
               </span>
            </a>
            <div className="flex md:order-2">
               <div className="relative hidden md:block">
                  <div className="flex justify-center items-center gap-2 py-4 md:py-0 text-gray-900 dark:text-gray-100">
                     <Link href={"/signup"}>
                        <a className="bg-primary px-3 py-2 text-white rounded-lg dark:text-gray-800 hover:bg-primary/75 transition">
                           Sign Up
                        </a>
                     </Link>
                     <Link href={"/login"}>
                        <a className="px-3 py-2 font-light hover:bg-primary/25 transition rounded-lg text-primary border border-primary">
                           Log In
                        </a>
                     </Link>
                  </div>
               </div>
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
               className={`items-center justify-between w-full flex-grow-0 md:flex-grow-[0.5] md:flex md:w-auto md:order-1 ${openMenu ? "block" : "hidden"}`}
               id="navbar-search"
            >
               <SearchBox />
               <div className="font-light flex md:hidden justify-center items-center gap-2 py-4 md:py-0 text-gray-900 dark:text-gray-100">
                  <Link href={"/signup"}>
                     <a className="bg-primary px-3 py-2 text-white rounded-lg dark:text-gray-800">
                        Sign up
                     </a>
                  </Link>
                  <Link href={"/login"}>
                     <a className="px-3 py-2 rounded-lg text-primary border border-primary">
                        Log In
                     </a>
                  </Link>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
