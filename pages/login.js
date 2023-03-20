import Image from "next/image";
// import { useEffect, useState } from "react";
import log from "../public/images/login.svg";
import Link from "next/link";
import Input from "../components/Input";
import { handleSubmit } from "../components/hof";

const LoginForm = () => {
   return (
      <form onSubmit={(e) => handleSubmit(e)}>
         <div className="mb-6">
            <Input
               id="email"
               label="Email address"
               type="email"
               placeholder="name@email.com"
               required
               name="email"
            />
         </div>
         <div className="mb-4">
            <Input
               id="password"
               label="Password"
               type="password"
               placeholder="•••••••••"
               required
               name="password"
            />
         </div>
         <Link href={"/forget_password"}>
            <span className="text-blue-600 text-sm hover:underline cursor-pointer">
               Forget Password!
            </span>
         </Link>
         <div className="flex items-start mt-4 mb-6">
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
               Remember me.
            </label>
         </div>
         <button
            type="submit"
            className="text-white text-xl bg-primary hover:bg-primary/75 focus:ring-4 focus:outline-none transition shadow-md font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
         >
            Log in
         </button>
      </form>
   );
};

const Login = () => {
   return (
      <div
         className="container grid grid-cols-1 md:grid-cols-12 items-center gap-8"
      >
         <div className="hidden md:block col-span-4">
            <Image src={log} alt="hi" />
         </div>
         <div className="min-h-screen flex flex-col justify-center col-span-8">
            <div className="relative py-3 w-full max-w-xl mx-auto">
               <div className="floatingAnimation absolute inset-0 bg-gradient-to-r from-blue-300 to-primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-xl sm:rounded-3xl"></div>
               <div className="relative px-4 py-10 bg-white dark:bg-gray-800 shadow-lg rounded-xl sm:rounded-3xl sm:p-10">
                  <div className="mx-auto">
                     <div>
                        <h1 className="text-2xl font-semibold dark:text-white mb-4">
                           Welcome back!
                        </h1>
                     </div>
                     <LoginForm />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
