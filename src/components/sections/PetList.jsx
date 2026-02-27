import React from "react";
import "../../styles/components/sections/_petlist.scss";
import PetData from "../../data/pets.json";

function PetList() {
  const data = PetData;

  return (
    <section className="petlist container">
      <div>
        <h3 className="petlist__subtitle">What's new?</h3>
        <h1 className="petlist__title">Take A Look At Some Of Our Pets</h1>
        <section className="grid petlist__cards">
          {data.map((pets) => {
            return (
              <div className="card">
                <img className="card__img" src={pets.image} alt={pets.breed} />
                <div>
                  <h3 className="card__title">{pets.breed}</h3>
                  <div className="card__details">
                    <div className="card__detail">
                      <h4 className="card__detail-label">Gene:</h4>
                      <p className="card__detail-value">{pets.gender}</p>
                    </div>
                    <div className="card__detail-separator">.</div>
                    <div className="card__detail">
                      <h4 className="card__detail-label">Age:</h4>
                      <p className="card__detail-value">{pets.age} months</p>
                    </div>
                  </div>
                  <p className="card__price">{pets.price} VND</p>
                </div>
              </div>
            );
          })}
        </section>
        <button className=" btn--transparentlarge">
          View more <span className="chevron">&rsaquo;</span>
        </button>
      </div>
    </section>
  );
}

export default PetList;
