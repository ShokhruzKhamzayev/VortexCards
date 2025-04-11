
import Header from "@/components/header";

import Contact from "@/components/contact";
import { Features } from "@/components/features";
import Footer from "@/components/footer";
import InfoEntry from "@/components/infoEntry";
import InfoPartTwo from "@/components/infoP2";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import UsersInfo from "@/components/usersInfo";

export default function Home() {
  return (
    <div>
    <div className="rounded-b-[20px]">
      <Header withMain={true}/>
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
