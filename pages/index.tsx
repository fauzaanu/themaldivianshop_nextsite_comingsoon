import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="outline">
      <Head>
        <title>The Maldivian Shop</title>

        <meta name="description" content="The Maldivian Shop" />
        <meta property="og:title" content="The Maldivian Shop" />
        <meta
          property="og:description"
          content="The Maldivian Shop | A registered Online Business in the Maldives"
        />
        <meta property="og:image" content="/facebook.png" />
        <meta property="og:url" content="https://themaldivianshop.com" />
        <meta name="twitter:card" content="The Maldivian Shop" />
        <meta name="twitter:site" content="@maldivianshop" />
        <meta name="twitter:creator" content="@maldivianshop" />
        <meta name="twitter:title" content="The Maldivian Shop" />
        <meta
          name="twitter:description"
          content="The Maldivian Shop | A registered Online Business in the Maldives"
        />
        <meta name="twitter:image" content="/twitter.png" />
        <meta name="twitter:image:alt" content="The Maldivian Shop" />
        <meta name="twitter:domain" content="https://themaldivianshop.com" />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex items-center justify-center h-screen bg-slate-900 select-none">
        <div className="container">
          <div className="bg-gradient-to-br from-green-800 to-blue-700 rounded-lg p-5 md:p-20 mx-2 ">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
                The Maldivian Shop
              </h2>
              <h3 className="text-xl md:text-3xl mt-10 text-white">
                Our e-commerce site is being developed . . .
              </h3>
              <p className="text-md md:text-xl mt-10 text-white">
                We are an online shop with a wide variety of items. Our orders
                are being taken from the following mediums in the meantime.
              </p>
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
              <div className="m-3">
                <a
                  href="https://www.facebook.com/themaldivianshop/"
                  title="The Maldivian Shop On FaceBook"
                  className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2  hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
