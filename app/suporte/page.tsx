import SupportHero from "@/components/suporte/SupportHero";
import SupportChannels from "@/components/suporte/SupportChannels";
import SupportTopics from "@/components/suporte/SupportTopics";
import SupportFaq from "@/components/suporte/SupportFaq";
import SupportCta from "@/components/suporte/SupportCta";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Atendimento | Sol Telecom",
  description:
    "Fale com a Sol Telecom via WhatsApp ou Instagram. Suporte técnico, 2ª via de boleto, contratação de planos e muito mais.",
};

export default function SuportePage() {
  return (
    <>
      <Topbar />
      <Header />
      <main id="conteudo">
        <SupportHero />
        <SupportChannels />
        <SupportTopics />
        <SupportFaq />
        <SupportCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
