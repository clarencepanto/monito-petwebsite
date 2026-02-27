import "./styles/main.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PetList from "./components/sections/PetList";
import About from "./components/sections/About";
import PetKnowledge from "./components/sections/PetKnowledge";
import Footer from "./components/Footer";

function App() {
  return (
    // <div>
    //   <div>
    //     {/* <button className="btn btn--primarylarge">Subscribe Now</button> */}
    //     <input type="text" className="input" placeholder="Enter your Email" />
    //   </div>
    //   <div className="grid">
    //
    //   </div>
    // </div>
    //
    <div>
      <Navbar />
      <Hero />
      <PetList />
      <About />
      <PetKnowledge />
      {/* <RegisterForm /> */}
      <Footer />
    </div>
  );
}

export default App;
