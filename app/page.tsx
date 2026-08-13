import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Actions from "@/components/Actions";
import Gallery from "@/components/Gallery";
import News from "@/components/News";
import JoinUs from "@/components/JoinUs";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Actions />
        <Gallery />
        <News />
        <JoinUs />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
