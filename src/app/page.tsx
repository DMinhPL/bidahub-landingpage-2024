import Agenda from "@/components/Agenda";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Introduction from "@/components/Introduction";
import Partners from "@/components/Partners";
import Prizes from "@/components/Prizes";
import dynamic from "next/dynamic";

export default function Home() {
  const CountdownClient = dynamic(() => import('@/components/Countdown'), { ssr: false })

  return (
    <>
      <Banner />
      <CountdownClient />
      <Introduction />
      <Agenda />
      <Prizes />
      <Faq />
      <Partners />
    </>
  );
}
