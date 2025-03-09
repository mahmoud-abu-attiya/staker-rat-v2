import { useRef } from "react";
import html2canvas from "html2canvas";

const Messages = ({ text, msgs }) => {
   const rtlChar = /[\u0600-\u06FF]/;
   const messageRefs = useRef([]); // Store refs for each message

   // Function to capture a screenshot of a single message
   const captureAndShare = async (index) => {
      setTimeout(async () => {
         const element = messageRefs.current[index];
         if (element) {
            try {
               const canvas = await html2canvas(element, {
                  useCORS: true,
                  scale: 2, // Higher resolution
                  quality: 1, // Image quality (0-1)
                  backgroundColor: null, // For transparent background
               });
               canvas.toBlob(async (blob) => {
                  if (blob) {
                     const file = new File([blob], "message.png", {
                        type: "image/png",
                     });

                     if (navigator.share) {
                        // Web Share API
                        await navigator.share({
                           files: [file],
                           title: "Check out this message!",
                           text: "Hey, look at this message!",
                        });
                     } else {
                        alert("Sharing is not supported on this browser.");
                        // Create an anchor element to download the image
                        const imgData = canvas.toDataURL("image/png");
                        const link = document.createElement("a");
                        link.href = imgData;
                        link.download = `message_${index + 1}.png`; // Set file name dynamically
                        link.click();
                     }
                  }
               }, "image/png");
            } catch (error) {
               console.error("Sharing Error:", error);
            }
         }
      }, 100);
   };

   return (
      <div className="dark:text-white">
         <h1 className="text-2xl md:text-4xl lg:text-5xl drop-shadow-md my-4 font-bold">
            <span className="text-primary">{text.slice(0, 1)}</span>
            {text.slice(1)}
         </h1>
         <div className="flex flex-col px-2 mb-8 md:p-4 gap-4 md:gap-8">
            {msgs.map((msg, i) => (
               <div
                  key={i}
                  ref={(el) => (messageRefs.current[i] = el)} // Assign ref dynamically
                  className="flex gap-4 p-2 md:p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md border dark:border-gray-700"
               >
                  <div className="flex flex-col justify-center">
                     <p
                        dir={msg.text.match(rtlChar) ? "rtl" : "ltr"}
                        className={`text-gray-700 dark:text-gray-200 ${
                           msg.text.match(rtlChar) ? "text-right" : "text-left"
                        }`}
                     >
                        {msg.text}
                     </p>
                     <div className="flex items-center justify-between border-t border-1 dark:border-gray-700 pt-4 mt-4">
                        <div className="date text-gray-400 dark:text-gray-500 text-xs">
                           2023/3/15 | 05:08 PM
                        </div>
                        <p className="text-xs md:text-sm">
                           <span className="text-primary">S</span>taker{" "}
                           <span className="text-primary">R</span>at
                        </p>
                        <div className="flex gap-2 md:gap-4">
                           <button
                              onClick={() => captureAndShare(i)}
                              className="flex justify-center items-center px-2 md:px-3 py-1 md:py-2 bg-gray-200 dark:bg-gray-700 text-xs md:text-base hover:shadow-inner transition rounded-md shadow text-blue-500"
                           >
                              <i className="fad fa-share-alt"></i>
                           </button>
                           <button className="flex justify-center items-center px-2 md:px-3 py-1 md:py-2 bg-gray-200 dark:bg-gray-700 text-xs md:text-base hover:shadow-inner transition rounded-md shadow text-yellow-500">
                              <i className="far fa-heart"></i>
                           </button>
                           <button className="flex justify-center items-center px-2 md:px-3 py-1 md:py-2 bg-gray-200 dark:bg-gray-700 text-xs md:text-base hover:shadow-inner transition rounded-md shadow text-red-500">
                              <i className="fad fa-trash-alt"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Messages;
