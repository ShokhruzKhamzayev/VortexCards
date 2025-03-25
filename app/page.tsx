import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

import InfoEntry from "@/components/infoEntry";
import UsersInfo from "@/components/usersInfo";
import { Features } from "@/components/features";
import InfoPartTwo from "@/components/infoP2";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
    <div className="custom_bg rounded-b-[20px]">
      <Header/>
    </div>
      <InfoEntry/>
      <UsersInfo/>
      <Features/>
      <InfoPartTwo/>
      <Testimonials/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}
