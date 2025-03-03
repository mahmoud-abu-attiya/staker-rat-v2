import { useSelector } from "react-redux";

const termsData = {
   en: [
      {
         title: "Navigation",
         content:
            "We didn't design this website to collect your personal data from your computer while browsing this site. But will only use the data you provided with you being aware and your personal desire.",
      },
      {
         title: "IP",
         content:
            "At any time you visit any website on the internet including this website, the hosting server will record your internet protocol (IP) and the date and time of your visit and the type of the browser that you use and the URL of any website which referred you to this site on the web and the website may record it for different purposes.",
      },
      {
         title: "Network Surveys",
         content:
            "The surveys that we conduct on our network allows us to collect specific data like the data collected from your regarding your view and feeling about our website. Your responses are of great concern and an area of appreciation as it helps us to improve our site and you have the full freedom and choice to provide data related to your name and other data.",
      },
      {
         title: "Links to External Sites",
         content:
            "Our website may contain links to other sites in the internet or advertisements from other sites like Google AdSense and we are not considered responsible for the data collection methods of these websites. You can find the confidentiality policies and the content of these websites that can be accessed through any link on this site. We may be assisted by third party advertising companies for the reason of displaying ads when you visit our website. These companies have the right to use information about your visit to this website and other websites (excluding the name, address or email or phone). This is to provide ads about products or services that you care about.",
      },
      {
         title: "Disclosure of Information",
         content:
            "We will always maintain your privacy and the confidentiality of your personal data that we get. We will never disclose the this information unless there is a law requirement or with good intention if we feel that this procedure is required or wanted to meet legal requirements. Or to defend or protect the ownership rights of this website or other parties benefiting from this site.",
      },
      {
         title: "Required Data to do the necessary procedures from your side",
         content:
            "When we need any data from you. We will ask you for your consent. As this data will help us contact you and satisfy your orders whenever possible. We will never sell the data you provide to any third party as part of personal marketing without your prior and written consent unless t was a part of bulk data used for statistics and research and it won't contain any data to identify you.",
      },
      {
         title: "When Contacting Us",
         content:
            "We will consider all data provided by you confidential. The forms on our network require data that can help us improve our site. We will use data provided by you to answer all of your questions, observations, or orders through this site or other sites belonging to this site.",
      },
      {
         title: "Disclosure of Information to Third Parties",
         content:
            "We will not sell, trade, rent or disclose any information to any third party out of this website or sites out of our network and we will only disclose information when ordered by a legal or organizational entity.",
      },
      {
         title: "Modification of Data Confidentiality and Privacy Policy",
         content:
            "We have the right to modify the items and conditions of data confidentiality and privacy policy if needed and when adequate",
      },
      {
         title: "Contacting Us",
         content:
            "You can contact us using the methods described in the 'Contact Us' page",
      },
      {
         title: "Cookies",
         content:
            "Some of our services require the use of 'cookies'. Cookies are small quantities of data, which your Internet browser saves onto your computer. Cookies may store information about your visit to our website. For instance, as a result of this data, information may be displayed on the site that is tailored to your interests. In the event of a permanent cookie, see our 'stay logged in' button, your login information will be stored for 30 days on the device with which you last logged in successfully. Therefore, you must be careful when using public computers. Most browsers are set by default in such a way that they accept cookies. However, you can configure your browser so that it rejects cookies or requests prior confirmation from you before it stores cookies. The help function in the menu list of most web browsers explains to you how your prevent your browser from accepting new cookies, how you can set your browser to alert you if you receive a new cookie. It also tells you how you can delete any previous cookies and how you can block all future cookies. Some of our services require the use of 'cookies'. Cookies are small quantities of data, which your Internet browser saves onto your computer. Cookies may store information about your visit to our website. For instance, as a result of this data, information may be displayed on the site that is tailored to your interests.",
      },
      {
         title: "Delete Account",
         content:
            "any user can delete his account any time, by deleting your account You will lose all content and data on this account, such as incoming messages and photos. login to you account from here , then go to Account Setting then click on Delete Account button",
      },
      {
         title: "Finally",
         content:
            "Your concerns and fears regarding data confidentiality and privacy is a highly valuable thing to us. We hope that we will address these concerns by this policy.",
      },
   ],
   ar: [
      {
         title: "التصفح",
         content:
            "لم نقم بتصميم هذا الموقع من أجل تجميع بياناتك الشخصية من جهاز الكمبيوتر الخاص بك أثناء تصفحك لهذا الموقع, وإنما سيتم فقط استخدام البيانات المقدمة من قبلك بمعرفتك ومحض إرادتك.",
      },
      {
         title: "عنوان بروتوكول شبكة الإنترنت (IP)",
         content:
            "في أي وقت تزور فيه اي موقع انترنت بما فيها هذا الموقع , سيقوم السيرفر المضيف بتسجيل عنوان بروتوكول شبكة الإنترنت (IP) الخاص بك , تاريخ ووقت الزيارة ونوع متصفح الإنترنت الذي تستخدمه والعنوان URL الخاص بأي موقع من مواقع الإنترنت التي تقوم بإحالتك إلى الى هذا الموقع على الشبكة وقد يقوم الموقع بتسجيلها لأغراض مختلفة.",
      },
      {
         title: "عمليات المسح على الشبكة",
         content:
            "إن عمليات المسح التي نقوم بها مباشرة على الشبكة تمكننا من تجميع بيانات محددة مثل البيانات المطلوبة منك بخصوص نظرتك وشعورك تجاه موقعنا.تعتبر ردودك ذات أهمية قصوى , ومحل تقديرنا حيث أنها تمكننا من تحسين مستوى موقعنا, ولك كامل الحرية والإختيار في تقديم البيانات المتعلقة بإسمك والبيانات الأخرى.",
      },
      {
         title: "الروابط بالمواقع الأخرى على شبكة الإنترنت",
         content:
            "قد يشتمل موقعنا على روابط بالمواقع الأخرى على شبكة الإنترنت. او علانات من مواقع اخرى مثل Google AdSense ولا نعتبر مسئولين عن أساليب تجميع البيانات من قبل تلك المواقع, يمكنك الاطلاع على سياسات السرية والمحتويات الخاصة بتلك المواقع التي يتم الدخول إليها من خلال أي رابط ضمن هذا الموقع. نحن قد نستعين بشركات إعلان لأطراف ثالثة لعرض الإعلانات عندما تزور موقعنا على الويب. يحق لهذه الشركات أن تستخدم معلومات حول زياراتك لهذا الموقع ولمواقع الويب الأخرى (باستثناء الاسم أو العنوان أو عنوان البريد الإلكتروني أو رقم الهاتف)، وذلك من أجل تقديم إعلانات حول البضائع والخدمات التي تهمك.",
      },
      {
         title: "إفشاء المعلومات",
         content:
            "سنحافظ في كافة الأوقات على خصوصية وسرية كافة البيانات الشخصية التي نتحصل عليها. ولن يتم إفشاء هذه المعلومات إلا إذا كان ذلك مطلوباً بموجب أي قانون أو عندما نعتقد بحسن نية أن مثل هذا الإجراء سيكون مطلوباً أو مرغوباً فيه للتمشي مع القانون , أو للدفاع عن أو حماية حقوق الملكية الخاصة بهذا الموقع أو الجهات المستفيدة منه.",
      },
      {
         title: "البيانات اللازمة لتنفيذ المعاملات المطلوبة من قبلك",
         content:
            "عندما نحتاج إلى أية بيانات خاصة بك , فإننا سنطلب منك تقديمها بمحض إرادتك. حيث ستساعدنا هذه المعلومات في الاتصال بك وتنفيذ طلباتك حيثما كان ذلك ممكنناً. لن يتم اطلاقاً بيع البيانات المقدمة من قبلك إلى أي طرف ثالث بغرض تسويقها لمصلحته الخاصة دون الحصول على موافقتك المسبقة والمكتوبة ما لم يتم ذلك على أساس أنها ضمن بيانات جماعية تستخدم للأغراض الإحصائية والأبحاث دون اشتمالها على أية بيانات من الممكن استخدامها للتعريف بك.",
      },
      {
         title: "عند الاتصال بنا",
         content:
            "سيتم التعامل مع كافة البيانات المقدمة من قبلك على أساس أنها سرية . تتطلب النماذج التي يتم تقديمها مباشرة على الشبكة تقديم البيانات التي ستساعدنا في تحسين موقعنا.سيتم استخدام البيانات التي يتم تقديمها من قبلك في الرد على كافة استفساراتك , ملاحظاتك , أو طلباتك من قبل هذا الموقع أو أيا من المواقع التابعة له .",
      },
      {
         title: "إفشاء المعلومات لأي طرف ثالث",
         content:
            "لن نقوم ببيع , المتاجرة , تأجير , أو إفشاء أية معلومات لمصلحة أي طرف ثالث خارج هذا الموقع, أو المواقع التابعة له.وسيتم الكشف عن المعلومات فقط في حالة صدور أمر بذلك من قبل أي سلطة قضائية أو تنظيمية.",
      },
      {
         title: "التعديلات على سياسة سرية وخصوصية المعلومات",
         content:
            "نحتفظ بالحق في تعديل بنود وشروط سياسة سرية وخصوصية المعلومات إن لزم الأمر ومتى كان ذلك ملائماً.",
      },
      {
         title: "الاتصال بنا",
         content: "يمكنك الاتصال بنا عبر الوسائل الموجودة في صفحة اتصل بنا",
      },
      {
         title: "حذف الحساب",
         content:
            "يمكن لأي مستخدم حذف حسابه في أي وقت ، عن طريق حذف حسابك ستفقد جميع المحتويات والبيانات الموجودة في هذا الحساب ، مثل الرسائل الواردة والصور. سجّل الدخول إلى حسابك من هنا ، ثم انتقل إلى إعداد الحساب ثم انقر فوق حذف الحساب",
      },
      {
         title: "أخيراً",
         content:
            "إن مخاوفك واهتمامك بشأن سرية وخصوصية البيانات تعتبر مسألة في غاية الأهمية بالنسبة لنا. نحن نأمل أن يتم تحقيق ذلك من خلال هذه السياسة.",
      },
   ],
};

const Terms = () => {
   const lang = useSelector((state) => state.lang.value);
   return (
      <div className="container text-white py-10 min-h-screen">
         {lang === "en" ? (
            <h1 className="drop-shadow-md mb-8 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
               Terms <span className="text-primary">&</span> Conditions
            </h1>
         ) : (
            <h1 className="drop-shadow-md mb-8 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
               الشروط <span className="text-primary">و</span> الأحكام
            </h1>
         )}
         <p className="text-lg">
            {lang === "en"
               ? "We understand your fears and concerns regarding the privacy of your data on the internet. We have prepared this policy to help you understand the nature of the data we collect from your when visiting Stalker Rat and how we use this personal data."
               : "نقدر مخاوفكم واهتمامكم بشأن خصوصية بياناتكم على شبكة الإنترنت. لقد تم إعداد هذه السياسة لمساعدتكم في تفهم طبيعة البيانات التي نقوم بتجميعها منكم عند زيارتكم لموقعنا على شبكة الانترنت وكيفية تعاملنا مع هذه البيانات الشخصية."}
         </p>
         <section className="flex flex-col gap-8 mt-10">
            {lang === "en"
               ? termsData.en.map((term, index) => (
                    <div className="" key={index}>
                       <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">{term.title}</h3>
                       <p className="text-lg">{term.content}</p>
                    </div>
                 ))
               : termsData.ar.map((term, index) => (
                    <div className="" key={index}>
                       <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">{term.title}</h3>
                       <p className="text-lg">{term.content}</p>
                    </div>
                 ))}
         </section>
      </div>
   );
};

export default Terms;
