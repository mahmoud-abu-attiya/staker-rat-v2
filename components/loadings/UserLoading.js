import React from "react";

const UserLoading = () => {
   return (
      <div className="container flex flex-col justify-center items-center gap-8 min-h-screen">
         <div className="avatar text-center mt-4">
            <div className="img h-52 w-52 relative rounded-full overflow-hidden mx-auto shadow-md border-4 border-primary">
               <div
                  role="status"
                  className="h-full animate-pulse"
               >
                  <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
                     <svg
                        className="w-12 h-12 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                     >
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                     </svg>
                  </div>
               </div>
            </div>
            <div role="status" className="animate-pulse mt-4 flex flex-col items-center">
               <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-52 mb-4"></div>
               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-72 mb-2.5"></div>
               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-64 mb-2.5"></div>
            </div>
         </div>
         <div className="send w-full max-w-xl">
            <form onSubmit={(e) => handleSubmit(e)}>
               <div className="w-full shadow-md mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                  <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                     <textarea
                        disabled={true}
                        rows={7}
                        className="w-full outline-none resize-none px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Write what's on your mind..."
                     />
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                     <button
                        disabled={true}
                        className="inline-flex items-center gap-2 py-2.5 px-4 mx-auto w-full max-w-[10rem] justify-center font-medium text-center text-white cursor-not-allowed bg-gray-300 dark:bg-gray-500 rounded-lg"
                     >
                        Send <i className="fas fa-paper-plane"></i>
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default UserLoading;
