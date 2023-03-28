import Image from "next/image";
import log from "../public/images/login.svg";
import Link from "next/link";
import Input from "../components/Input";
import { handleSubmit } from "../components/hof";
import { useSelector } from "react-redux";
import { useState } from "react";

const ForgetPassword = ({ forgetPass }) => {
   const lang = useSelector((state) => state.lang.value);
   return (
      <>
         <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
               {lang == "ar" ? "نسيت كلمة المرور" : "Forgot password"}
            </h1>
            <p className="text-gray-900 dark:text-gray-300 text-sm mt-2">
               {lang == "ar"
                  ? "أدخل بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور الخاصة بك"
                  : "Enter your email and we will send you a link to reset your password"}
            </p>
         </div>
         <div className="mt-10">
            <form onSubmit={(e) => handleSubmit(e)}>
               <div className="mb-6">
                  <Input
                     id="email"
                     label={lang == "ar" ? "البريد الألكتروني" : "Email"}
                     type="email"
                     placeholder={
                        lang == "ar"
                           ? "أدخل بريدك الإلكتروني"
                           : "Enter your email"
                     }
                     required
                     name="email"
                  />
               </div>
               <div className="flex items-center justify-between mb-6">
                  <span
                     onClick={() => forgetPass(false)}
                     className="text-blue-600 cursor-pointer text-sm hover:underline"
                  >
                     {lang == "ar"
                        ? "تذكرت كلمة المرور؟"
                        : "Remember password?"}
                  </span>
               </div>
               <button
                  type="submit"
                  className="text-white text-xl bg-primary hover:bg-primary/75 focus:ring-4 focus:outline-none transition shadow-md font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
               >
                  {lang == "ar" ? "إرسال" : "Send"}
               </button>
            </form>
         </div>
      </>
   );
};

const LoginForm = ({ forgetPass }) => {
   const lang = useSelector((state) => state.lang.value);
   return (
      <>
         <div>
            <h1 className="text-2xl font-semibold dark:text-white mb-4">
               {lang == "ar" ? "مرحبا بعودتك" : "Welcome back"}!
            </h1>
         </div>
         <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-6">
               <Input
                  id="email"
                  label={lang == "ar" ? "البريد الألكتروني" : "Email"}
                  type="email"
                  placeholder="name@email.com"
                  required
                  name="email"
               />
            </div>
            <div className="mb-4">
               <Input
                  id="password"
                  label={lang == "ar" ? "كلمة المرور" : "Password"}
                  type="password"
                  placeholder="•••••••••"
                  required
                  name="password"
               />
            </div>
            <div className="flex items-center justify-between mb-6">
               <span
                  onClick={() => forgetPass(true)}
                  className="text-blue-600 cursor-pointer text-sm hover:underline"
               >
                  {lang == "ar" ? "نسيت كلمة المرور؟" : "Forgot password?"}
               </span>
               <Link href={"/signup"}>
                  <span className="text-gray-900 dark:text-gray-300 text-sm hover:text-blue-500 hover:underline cursor-pointer">
                     {lang == "ar"
                        ? "ليس لديك حساب؟"
                        : "Don't have an account?"}
                  </span>
               </Link>
            </div>
            <button
               type="submit"
               className="text-white text-xl bg-primary hover:bg-primary/75 focus:ring-4 focus:outline-none transition shadow-md font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
            >
               {lang == "ar" ? "تسجيل الدخول" : "Login"}
            </button>
         </form>
      </>
   );
};

const Login = () => {
   const lang = useSelector((state) => state.lang.value);
   const [forgetPass, setForgetPass] = useState(false);
   return (
      <div className="container grid grid-cols-1 md:grid-cols-12 items-center gap-8">
         <div className="hidden md:block col-span-4">
            <Image src={log} alt="hi" />
         </div>
         <div className="min-h-screen flex flex-col justify-center col-span-8">
            <div className="relative py-3 w-full max-w-xl mx-auto">
               <div className="floatingAnimation absolute inset-0 bg-gradient-to-r from-blue-300 to-primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-xl sm:rounded-3xl"></div>
               <div className="relative px-4 py-10 bg-white dark:bg-gray-800 shadow-lg rounded-xl sm:rounded-3xl sm:p-10">
                  <div className="mx-auto">
                     {forgetPass ? (
                        <ForgetPassword forgetPass={setForgetPass} />
                     ) : (
                        <LoginForm forgetPass={setForgetPass} />
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
