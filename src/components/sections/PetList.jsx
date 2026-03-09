import React from "react";
import "../../styles/components/sections/_petlist.scss";
import PetData from "../../data/pets.json";

function PetList({ variant = "default", title, subtitle }) {
  const data = PetData;

  return (
    <section className={` petlist petlist--${variant} `}>
      <div>
        <h3 className="petlist__subtitle">{subtitle}</h3>
        <h1 className="petlist__title">{title}</h1>
        <section className="grid petlist__cards gap20">
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
        <button className="btn-petlist btn--transparentlarge flex-center">
          View more <span className="chevron">&rsaquo;</span>
        </button>
        <div className={`flex-between pageindex`}>
          <p>&larr;</p>
          <p className="pageindex--selected">1</p>
          <p>2</p>
          <p>3</p>
          <p>...</p>
          <p>28</p>
          <p>&rarr;</p>
        </div>
      </div>
    </section>
  );
}

export default PetList;
