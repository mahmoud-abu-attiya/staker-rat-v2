import { useState, useEffect } from "react";
import { handleSubmit } from "../../components/hof";
import { users } from "../api/hello";
import { useRouter } from "next/router";
import UserLoading from "../../components/loadings/UserLoading";

const Bio = ({ bio }) => {
   const [isReadMore, setIsReadMore] = useState(true);
   return (
      <p className="bio max-w-sm text-slate-600 text-center text-sm mx-auto dark:text-slate-400">
         {bio.length <= 100 ? (
            bio
         ) : (
            <>
               {isReadMore ? bio.slice(0, 100) + "..." : bio}
               <br />
               <span
                  onClick={() => setIsReadMore(!isReadMore)}
                  className="text-blue-600 underline cursor-pointer"
               >
                  {isReadMore ? "Show more" : "Show less"}
               </span>
            </>
         )}
      </p>
   );
};

const User = () => {
   const router = useRouter();
   const id = +router.query.id; // + is a shortcut for parseInt coused the router.query.id return a string
   const [user, setUser] = useState();
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      if (router.isReady) {
         setUser(users.find((user) => user.id === id));
         setLoading(false);
      }
   }, [router.isReady]);
   if (loading) {
      return <UserLoading />;
   } else {
      return (
         <div className="container flex flex-col justify-center items-center gap-8 min-h-screen">
            <div className="avatar text-center mt-4">
               <div className="img h-52 w-52 relative rounded-full overflow-hidden mx-auto shadow-md border-4 border-primary">
                  <img src={user.img} alt="" className="w-full h-full object-cover" />
               </div>
               <div className="name mt-4">
                  <h1 className="text-3xl sm:text-4xl font-bold drop-shadow-md dark:text-white">
                     {user.name}
                  </h1>
               </div>
               <Bio bio={user.bio} />
            </div>
            <div className="send w-full max-w-xl">
               <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="w-full shadow-md mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                     <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <textarea
                           id="message"
                           name="message"
                           rows={7}
                           className="w-full outline-none resize-none px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                           placeholder="Write what's on your mind..."
                           required
                           defaultValue={""}
                        />
                     </div>
                     <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button
                           type="submit"
                           className="inline-flex items-center gap-2 py-2.5 px-4 mx-auto w-full max-w-[10rem] justify-center font-medium text-center text-white bg-primary rounded-lg hover:bg-primary/75"
                        >
                           Send <i className="fas fa-paper-plane"></i>
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      );
   }
};

export default User;
