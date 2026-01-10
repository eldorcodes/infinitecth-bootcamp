import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Pricing from "@/components/Pricing";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <Roadmap />
        <Pricing />
        <Apply />
      </main>
      <Footer />
    </>
  );
}