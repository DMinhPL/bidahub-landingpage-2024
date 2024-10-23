import Banner from "@/components/Banner";
import Introduction from "@/components/Introduction";
import Partners from "@/components/Partners";
import dynamic from "next/dynamic";
import Head from "next/head";

export default function Home() {
  const CountdownClient = dynamic(() => import('@/components/Countdown'), { ssr: false })

  return (
    <>

      <Banner />
      <CountdownClient />
      <Introduction />
      <Partners />
    </>
  );
}
