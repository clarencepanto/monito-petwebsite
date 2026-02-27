import "../../styles/components/sections/_petknowledge.scss";
import PetKnowledgeData from "../../data/petknowledge.json";

function PetKnowledge() {
  const data = PetKnowledgeData;

  return (
    <section className="petknowledge container">
      <div>
        <h3 className="petknowledge__subtitle">You already know?</h3>
        <h1 className="petknowledge__title">Useful Pet Knowledge</h1>
        <section>
          {data.map((petknowledge) => {
            return (
              <article className="card card--article">
                <img
                  src={petknowledge.img}
                  alt={petknowledge.title}
                  className="card--article__img"
                />
                <div className="card--article__badge">
                  <h4>Pet Knowledge</h4>
                </div>
                <h3 className="card--article__title">{petknowledge.title}</h3>
                <p className="card--article__details">{petknowledge.details}</p>
              </article>
            );
          })}
        </section>
        <button className="btn__petknowledge btn--transparentlarge">
          View more <span className="chevron">&rsaquo;</span>
        </button>
      </div>
    </section>
  );
}

export default PetKnowledge;
