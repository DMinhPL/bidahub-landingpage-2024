import Agenda from "@/components/Agenda";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Introduction from "@/components/Introduction";
import Partners from "@/components/Partners";
import Prizes from "@/components/Prizes";
import Register from "@/components/Register";
import dynamic from "next/dynamic";

export default function HomeEng() {
  const CountdownClient = dynamic(() => import('@/components/Countdown'), { ssr: false })

  return (
    <>
      <Banner lang='en' />
      <CountdownClient lang='en' />
      <Introduction lang='en' />
      <Agenda lang='en' />
      <Prizes lang='en' />
      <Register lang='en' />
      <Faq lang='en' />
      <Partners lang='en' />
    </>
  );
}
