import React from "react";
import "../../styles/components/sections/_about.scss";

function About() {
  return (
    <div className="container">
      <section className="about">
        <h1 className="about__title">One More Friend</h1>
        <article>
          <h2 className="about__subtitle">Thousands More Fun!</h2>
          <p className="about__details">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
        </article>
        <div className="flex-row flex-center">
          <button className="btn btn--transparent flex-center about__btn about__btn--marginfix">
            View Intro
            <img
              src="/images/logo/Play.png"
              alt="play"
              className="about__btn--img "
            />
          </button>
          <button className="btn about__btn">Explore Now</button>
        </div>
        <div className="flex about__img">
          <img src="/images/about.png" alt="about.png" className="image" />
        </div>
        <div className="squaredesign__about"></div>
      </section>
    </div>
  );
}

export default About;
