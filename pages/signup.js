import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import sign from "../public/images/signup.svg";
import Input from "../components/Input";
import { handleSubmit } from "../components/hof";
import { useSelector } from "react-redux";

const SignupForm = () => {
   const lang = useSelector((state) => state.lang.value);
   return (
      <form onSubmit={(e) => handleSubmit(e)}>
         <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
               <Input
                  id="name"
                  label={lang == "ar" ? "الاسم" : "Name"}
                  placeholder={lang == "ar" ? "أدخل أسمك" : "Enter your name"}
                  required
                  name="name"
               />
            </div>
            <div>
               <Input
                  id="phone"
                  label={lang == "ar" ? "رقم الهاتف" : "Phone"}
                  placeholder="0123456789"
                  name="phone"
               />
            </div>
         </div>
         <div className="mb-6">
            <Input
               id="email"
               label={lang == "ar" ? "البريد الالكتروني" : "Email"}
               placeholder="name@email.com"
               required
               name="email"
               type="email"
            />
         </div>
         <div className="mb-6">
            <Input
               id="password"
               label={lang == "ar" ? "كلمة المرور" : "Password"}
               placeholder="•••••••••"
               required
               name="password"
               type="password"
            />
         </div>
         <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
               <input
                  id="remember"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
               />
            </div>
            <label
               htmlFor="remember"
               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
               {lang == "ar" ? "انا اوافق علي " : "I agree with the"}
               <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
               >
                  {lang == "ar" ? "الشروط والأحكام" : "terms and conditions"}

               </a>
               .
            </label>
         </div>
         <button
            type="submit"
            className="text-white text-xl bg-primary hover:bg-primary/75 focus:ring-4 focus:outline-none transition shadow-md font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
         >
            {lang == "ar" ? "تسجيل" : "Sign up"}
         </button>
      </form>
   );
};

const Signup = () => {
   const lang = useSelector((state) => state.lang.value);
   return (
         <div
            className="container grid grid-cols-1 md:grid-cols-12 items-center gap-8 min-h-screen"
         >
            <div className="hidden md:block col-span-4">
               <Image src={sign} />
            </div>
            <div className="min-h-screen flex flex-col justify-center col-span-8">
               <div className="relative py-3 sm:mx-auto">
                  <div className="floatingAnimation absolute inset-0 bg-gradient-to-r from-blue-300 to-primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-xl sm:rounded-3xl"></div>
                  <div className="relative px-4 py-10 bg-white dark:bg-gray-800 shadow-lg rounded-xl sm:rounded-3xl sm:p-10">
                     <div className="mx-auto">
                        <div>
                           <h1 className="text-2xl font-semibold dark:text-white mb-4">
                              {lang == "ar" ? "مرحبا" : "Welcome"}!
                           </h1>
                        </div>
                        <SignupForm />
                     </div>
                  </div>
               </div>
            </div>
         </div>
   );
};

export default Signup;
