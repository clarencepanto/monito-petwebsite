import Navbar from "../components/Navbar";
import PetDetailCarousel from "../components/sections/PetDetailCarousel";
import PetDetails from "../components/sections/PetDetails";
import PetList from "../components/sections/PetList";
import Footer from "../components/Footer";

function PetDetailpage() {
  return (
    <div>
      <Navbar variant="transparent" />
      <div className="border p1-top ">
        <PetDetailCarousel />
        <PetDetails />
      </div>

      {/* <PetList title="See more puppies" variant="nobtn" />
      <Footer /> */}
    </div>
  );
}

export default PetDetailpage;
