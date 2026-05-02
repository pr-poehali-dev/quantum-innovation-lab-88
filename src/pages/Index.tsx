import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;