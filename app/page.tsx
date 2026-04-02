import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ribbon from "@/components/Ribbon";
import Plans from "@/components/Plans";
import Addons from "@/components/Addons";
import Advantages from "@/components/Advantages";
import CoverageCTA from "@/components/CoverageCTA";
import Company from "@/components/Company";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <main id="conteudo">
        <Hero />
        <Ribbon />
        <Plans />
        <Addons />
        <Advantages />
        <CoverageCTA />
        <Company />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
