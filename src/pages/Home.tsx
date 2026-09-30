import About from "../components/home/About";
import CardSection from "../components/home/CardSection";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Impact from "../components/home/Impact";
import Motto from "../components/home/Motto";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";
import { events, services, support } from "../data/home";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="conteudo">
        <About />
        <Impact />
        <CardSection id="servicos" {...services} />
        <CardSection id="eventos" {...events} tinted />
        <Testimonials />
        <CardSection id="apoiar" {...support} />
        <Motto />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
