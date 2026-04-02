import PlansHero from "@/components/planos/PlansHero";
import PlansGrid from "@/components/planos/PlansGrid";
import Addons from "@/components/planos/Addons";
import WhatsIncluded from "@/components/planos/WhatsIncluded";
import PlansFaq from "@/components/planos/PlansFaq";
import PlansCta from "@/components/planos/PlansCta";
import Ribbon from "@/components/Ribbon";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Planos para Você | Sol Telecom",
  description:
    "Escolha seu plano de internet fibra óptica. 120M R$ 75,80 | 350M R$ 92,90 | 550M R$ 102,90 | 700M R$ 132,90. Instalação grátis!",
};

export default function PlanosPage() {
  return (
    <>
      <Topbar />
      <Header />
      <main id="conteudo">
        <PlansHero />
        <Ribbon />
        <PlansGrid />
        <WhatsIncluded />
        <PlansFaq />
        <PlansCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
