import Navbar from "../components/Navbar";

import PetDetails from "../components/sections/PetDetails";
import PetList from "../components/sections/PetList";
import Footer from "../components/Footer";

function PetDetailpage() {
  return (
    <div>
      <Navbar variant="transparent" />

      <PetDetails />

      <PetList title="See more puppies" variant="nobtn" />
      <Footer />
    </div>
  );
}

export default PetDetailpage;
