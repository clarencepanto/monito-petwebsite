import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SortFilter from "../components/filters/SortFilter";
import DefaultFilter from "../components/filters/DefaultFilter";
import Petlist from "../components/sections/PetList";
import Footer from "../components/Footer";

function Categorypage() {
  return (
    <section className="overflowhiddenX">
      <Navbar variant="transparent" />
      <div className="container">
        <Hero variant="categoryvariant" image={"/images/categoryhero.png"} />
      </div>

      <SortFilter />
      <DefaultFilter />
      <Petlist variant="category" title="Small Dog" subtitle="52 puppies" />
      <Petlist variant="category-2" />
      <Footer />
    </section>
  );
}

export default Categorypage;
