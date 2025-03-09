import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html lang="en">
         {/* <Head>
            <title>
            Stalker Rat
            </title>
            </Head> */}
         <Head>
            <title>Stalker Rat</title>
            <meta
               name="description"
               content="Experience an upscale steaks chargrilled to perfection, with creative cusine and trendy vibe."
            />
            <link rel="canonical" href="https://staker-rat-v2.vercel.app/" />
            <meta property="og:title" content="Stalker Rat" />
            <meta
               property="og:description"
               content="Experience an upscale steaks chargrilled to perfection, with creative cusine and trendy vibe."
            />
            <meta
               property="og:image"
               content="https://i.postimg.cc/T1WBgGwk/logo.png"
            />
            <meta
               property="og:url"
               content="https://staker-rat-v2.vercel.app/"
            />
            <meta property="og:site_name" content="Stalker Rat" />
            <link
               rel="stylesheet"
               href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
               integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
               crossOrigin="anonymous"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
