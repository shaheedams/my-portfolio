import About from "../components/about/page";
import Contact from "../components/contact/page";
import Experience from "../components/experience/page";
import Header from "../components/header/page";
import Hero from "../components/hero/page";
import Projects from "../components/projects/page";
import Services from "../components/services/page";
import Skills from "../components/skills/page";
import Slider from "../components/slider/page";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
       <About />
      {/*<Services />
      <Slider />
      <Experience />
      <Skills />
      <Projects />
      <Contact /> */}
    </>
  );
}
