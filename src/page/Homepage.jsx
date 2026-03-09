import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PetList from "../components/sections/PetList";
import About from "../components/sections/About";
import PetKnowledge from "../components/sections/PetKnowledge";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <Navbar variant="hidden" />
      <Hero image={"/images/hero.png"} />
      <div className="container">
        <PetList
          title="Take A Look At Some Of Our Pets"
          subtitle="Whats new?"
        />
      </div>
      <About />
      <PetKnowledge />
      <Footer />
    </div>
  );
}

export default Homepage;
