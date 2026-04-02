import CoverageHero from "@/components/cobertura/CoverageHero";
import CoverageMap from "@/components/cobertura/CoverageMap";
import CoverageCities from "@/components/cobertura/CoverageCities";
import CoverageCta from "@/components/cobertura/CoverageCta";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Cobertura | Sol Telecom",
  description:
    "Veja onde a Sol Telecom atende. Fibra óptica em Itatira e Caiçara. Em breve em Canindé!",
};

export default function CoberturaPage() {
  return (
    <>
      <Topbar />
      <Header />
      <main id="conteudo">
        <CoverageHero />
        <CoverageMap />
        <CoverageCities />
        <CoverageCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
