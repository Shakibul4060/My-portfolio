import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import CinematicEffects from "@/components/CinematicEffects";

export default function Home() {
  return (
    <>
      <PageTransition />
      <CinematicEffects />
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}