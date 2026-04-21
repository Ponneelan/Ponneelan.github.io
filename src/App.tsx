import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Work from "./components/Work";
import Stats from "./components/Stats";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Stats />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
