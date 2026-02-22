import "../styles/components/_hero.scss";

function Hero() {
  return (
    <div>
      <section className="container hero">
        <h1 className="hero__title">One More Friend</h1>
        <article>
          <h2 className="hero__subtitle">Thousands More Fun!</h2>
          <p className="hero__details">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
        </article>
        <div className="flex-row">
          <button className="btn btn--transparent flex-center hero__btn hero__btn--marginfix">
            View Intro
            <img
              src="/images/logo/Play.png"
              alt="play"
              className="hero__btn--img "
            />
          </button>
          <button className="btn hero__btn ">Explore Now</button>
        </div>
        <div className="flex hero__img">
          <img src="/images/hero.png" alt="hero.png" className="image" />
        </div>

        {/* hero square designs */}
        <div className="squaredesign squaredesign__bottom"></div>
        <div className="squaredesign squaredesign__bottom squaredesign__bottom--darkblue"></div>
      </section>
    </div>
  );
}

export default Hero;
