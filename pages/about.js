import { useSelector } from "react-redux";

const About = () => {
   const lang = useSelector((state) => state.lang.value);
   return (
      <div className="container py-4 min-h-screen flex flex-col justify-center items-center">
         {lang == "en" || !lang ? (<article className="text-slate-900 dark:text-white">
            <h1 className="drop-shadow-md mb-8 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center ">
               About{" "}
               <span className="text-primary">
                  Staker Rat
               </span>
            </h1>
            <div className="text-slate-600 font-medium dark:text-slate-300 max-w-3xl text-xl text-center mx-auto flex flex-col gap-6">
               <p>
                  Stalker Rat is an application helps you to identi<span className="text-primary">f</span>y your
                  d<span className="text-primary">i</span>sadva<span className="text-primary">n</span>tages and a<span className="text-primary">d</span>vantages by obtaining criticism from your
                  friends, employees and family in complete confidentiality with<span className="text-primary">out</span>{" "}
                  the knowledge of <span className="text-primary">the </span>sender.
               </p>
               <p>
                  Stalker Rat will not reveal the identity of the registered
                  <span className="text-primary">se</span>nders to users without their <span className="text-primary">c</span>onsent.
               </p>
               <p>
                  Stalke<span className="text-primary">r</span> Rat car<span className="text-primary">e</span>s a lot abou<span className="text-primary">t</span> <span className="text-primary">th</span>e privacy of us<span className="text-primary">e</span>rs, so <span className="text-primary">n</span>o
                  one can see your personal information or the messages that you
                  have <span className="text-primary">sen</span>t except you.
               </p>
               <p>
                  We <span className="text-primary">d</span>o not have an app <span className="text-primary">i</span>n any app s<span className="text-primary">t</span>ore, we are curren<span className="text-primary">t</span>ly studying
                  the devel<span className="text-primary">o</span>pment of this feat<span className="text-primary">u</span>re<span className="text-primary">s</span>.
               </p>
            </div>
         </article>) : (
            <article className="text-slate-900 dark:text-white">
               <h1 className="drop-shadow-md mb-8 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center ">
                  عن{" "}
                  <span className="text-primary">
                     ستاكر رات
                  </span>
               </h1>
               <div className="text-slate-600 font-medium dark:text-slate-300 max-w-3xl text-xl text-center mx-auto flex flex-col gap-6">
                  <p>
                     ستاكر رات هو تطبيق يساعدك على تحديد مزاياك وعيوبك من خلال الحصول على رأي من أصدقائك وموظفيك وعائلتك بسرية تامة بدون معرفة المرسل.
                  </p>
                  <p>
                     ستاكر رات لن يكشف هوية المرسلين المسجلين للمستخدمين دون موافقتهم.
                  </p>
                  <p>
                     ستاكر رات يهتم كثيرا بخصوصية المستخدمين، لذلك لا يمكن لأحد رؤية معلوماتك الشخصية أو الرسائل التي قمت بإرسالها إلا لك.
                  </p>
                  <p>
                     ليس لدينا تطبيق في أي متجر تطبيقات، ونحن حاليا ندرس تطوير هذه الميزة.
                  </p>
               </div>
            </article>
         )}
      </div>
   );
};

export default About;
