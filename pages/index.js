/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Image from "next/image";
import wave from "../public/images/wave.png";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
   const lang = useSelector((state) => state.lang.value);
   return (
      <div className="overflow-hidden">
         <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full blur-3xl -z-10 -rotate-180">
            <Image src={wave} layout="fill" alt="wave Stalker rat" />
         </div>
         <div className="container grid place-content-center gap-8 min-h-screen">
            {lang == "ar" ? (
               <h1 className="text-slate-900 drop-shadow-md font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
                  مع <span className="text-primary">Staker Rat</span> ، اجعل
                  أصدقاءك يصرحون لك بما لا تعرفه عن نفسك.
               </h1>
            ) : (
               <h1 className="text-slate-900 drop-shadow-md font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
                  With{" "}
                  <span className="text-primary text-5xl sm:text-6xl lg:text-7xl">
                     Staker Rat
                  </span>{" "}
                  make your friends frank you what you don't know about
                  yourself.
               </h1>
            )}
            {lang == "ar" ? (
               <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                  يساعدك Stalker Rat على تحديد{" "}
                  <span className="text-primary">عيوبك</span> و{" "}
                  <span className="text-primary">مزاياك</span> من خلال الحصول
                  على انتقادات من أصدقائك وموظفيك وعائلتك في سرية تامة دون علم
                  المرسل.
               </p>
            ) : (
               <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                  Stalker Rat helps you to identify your
                  <span className="ont-mono font-medium text-sky-500 dark:text-sky-400">
                     {" "}
                     disadvantages{" "}
                  </span>{" "}
                  and{" "}
                  <span className="ont-mono font-medium text-sky-500 dark:text-sky-400">
                     {" "}
                     advantages{" "}
                  </span>{" "}
                  by obtaining criticism from your friends, employees and family
                  in complete confidentiality without the knowledge of the
                  sender.
               </p>
            )}
            <div className="font-bold w-full max-w-[500px] mx-auto flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 py-4 md:py-0 text-gray-900 dark:text-gray-100">
               <Link
                  href={"/signup"}
                  className="bg-primary px-6 py-4 text-white rounded-xl grow shadow-md hover:bg-primary/75 transition text-center text-xl"
               >
                  {lang == "ar" ? "سجل الآن" : "Sign Up"}
               </Link>
               <Link
                  href={"/login"}
                  className="px-6 py-4 rounded-xl grow shadow-md hover:bg-primary/25 transition text-center text-xl text-primary border border-primary"
               >
                  {lang == "ar" ? "تسجيل الدخول" : "Login"}
               </Link>
            </div>
         </div>
      </div>
   );
}
