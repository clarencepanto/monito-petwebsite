import "./styles/main.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    // <div>
    //   <h1>hi</h1>
    //   <div>
    //     <button className="btn">Explore Now</button>
    //     <button className="btn btn--transparent">View Intro</button>
    //     <button className="btn btn--transparentlarge">View More</button>
    //     {/* <button className="btn btn--primarylarge">Subscribe Now</button> */}
    //     <input type="text" className="input" placeholder="Enter your Email" />
    //   </div>
    //   <div className="grid">
    //     <div className="card">
    //       <img
    //         className="card__img"
    //         src="/images/dogs/doggie1.jpg"
    //         alt="doggie1"
    //       />
    //       <div>
    //         <h3 className="card__title grid">Poodle</h3>
    //         <div className="card__details">
    //           <div className="card__detail">
    //             <h4 className="card__detail-label">Gene:</h4>
    //             <p className="card__detail-value">Male</p>
    //           </div>
    //           <div className="card__detail-separator">.</div>
    //           <div className="card__detail">
    //             <h4 className="card__detail-label">Age:</h4>
    //             <p className="card__detail-value">02 Months</p>
    //           </div>
    //         </div>
    //         <p className="card__price">6.500.000 VND</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div>
    //   <article className="card card--article">
    //     <img
    //       src="/images/dogs/doggie1.jpg"
    //       alt="doggie"
    //       className="card--article__img"
    //     />
    //     <div className="card--article__badge">
    //       <h4>Pet Knowledge</h4>
    //     </div>

    //     <h3 className="card--article__title">
    //       What is a Pomeranian? How to Identify Pomeranian Dogs
    //     </h3>
    //     <p className="card--article__details">
    //       The Pomeranian, also known as the Pomeranian (Pom dog), is always in
    //       the top of the cutest pets. Not only that, the small, lovely, smart,
    //       friendly, and skillful circus dog breed.
    //     </p>
    //   </article>
    // </div>
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
