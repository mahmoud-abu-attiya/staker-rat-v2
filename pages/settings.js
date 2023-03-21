/* eslint-disable @next/next/no-img-element */
import React from "react";
import Accordion from "../components/Accordion";
import Input from "../components/Input";
import { handleSubmit } from "../components/hof";
import { useSelector } from "react-redux";

export default function Settings() {
   const lang = useSelector((state) => state.lang.value);
   return (
      <div className="container min-h-screen dark:text-white ">
         {lang == "ar" ? (
            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl my-4 md:my-6">
               <span className="text-primary drop-shadow-md">ا</span>لأعدادات
            </h1>
         ) : (
            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl my-4 md:my-6">
               <span className="text-primary drop-shadow-md">S</span>ettings
            </h1>
         )}
         <div className="overflow-hidden rounded-lg border dark:border-gray-800 shadow-md">
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-1">
               
               {lang == "ar" ? (
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl my-4">
            <span className="text-primary">ع</span>ام
         </h2>
         ) : (
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl my-4">
                  <span className="text-primary">G</span>lobal
               </h2>
         )}
            </div>
            <div className="flex flex-col md:grid md:grid-cols-7 gap-4 p-2 sm:p-4 lg:p-8 bg-white dark:bg-gray-900">
               <div className="flex flex-col gap-4 col-span-2">
                  <div className="overflow-hidden rounded-full border-4 border-primary shadow-md w-[80%] mx-auto md:w-full">
                     <img
                        src="images/mahmoud.jpg"
                        alt="avatar"
                        className="w-full h-full"
                     />
                  </div>
                  <button className="bg-transparent px-6 py-2 text-primary rounded-lg hover:bg-primary/25 border border-primary shadow transition">
                     {lang == "ar" ? "تغيير الصورة" : "Change Pic"}
                  </button>
               </div>
               <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="flex flex-col md:grid gap-4 lg:gap-6 md:grid-cols-2 grid-rows-2 col-span-5"
               >
                  <div className="lg:text-xl">
                     <Input
                        type="text"
                        id="name"
                        label={lang == "ar" ? "الأسم" : "Name"}
                        placeholder={lang == "ar" ? "أدخل أسمك" : "Enter your name"}
                        required={true}
                        value="Mahmoud"
                        name="name"
                        rel="name"
                     />
                  </div>
                  <div className="lg:text-xl">
                     <Input
                        type="email"
                        id="email"
                        label={lang == "ar" ? "البريد الألكتروني" : "Email"}
                        placeholder={lang == "ar" ? "أدخل بريدك الألكتروني" : "Enter your email"}
                        required={true}
                        value="name@email.com"
                        name="email"
                        rel="email"
                     />
                  </div>
                  <div className="lg:text-xl">
                     <Input
                        type="password"
                        id="password"
                        label={lang == "ar" ? "كلمة المرور" : "Password"}
                        placeholder={lang == "ar" ? "أدخل كلمة المرور" : "Enter your password"}
                        required={true}
                        value="password"
                        name="password"
                        rel="password"
                     />
                  </div>
                  <div className="lg:text-xl">
                     <Input
                        type="tel"
                        id="phone"
                        label={lang == "ar" ? "رقم الهاتف" : "Phone"}
                        placeholder={lang == "ar" ? "أدخل رقم هاتفك" : "Enter your phone"}
                        required={true}
                        value="0123456789"
                        name="phone"
                        rel="phone"
                     />
                  </div>
                  <div className="col-span-2 lg:text-lg">
                     <label
                        htmlFor="bio"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                     >
                        {lang == "ar" ? "جملة تعريفية" : "Bio"}
                     </label>
                     <textarea
                        name="bio"
                        id="bio"
                        rows="4"
                        className="bg-gray-50 border resize-none border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-primary outline-none"
                     ></textarea>
                  </div>
                  <div>
                     <button
                        type="submit"
                        className="bg-primary px-6 py-2 text-white rounded-lg dark:text-gray-800 hover:bg-primary/75 text-xl font-bold shadow-md transition"
                     >
                        {lang == "ar" ? "حفظ" : "Save"}
                     </button>
                  </div>
               </form>
            </div>
         </div>
         <Accordion />
      </div>
   );
}
