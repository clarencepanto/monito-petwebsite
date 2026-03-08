import "../../styles/components/sections/_petdetailcarousel.scss";

function PetDetailCarousel() {
  return (
    <section className="petdetailcarousel">
      <div>
        <p className="petdetailcarousel__returnchev">&#8249;</p>
        <img
          src="/images/misc/info.png"
          alt=""
          className="petdetailcarousel__infoicon"
        />
      </div>
      <img
        src="/images/misc/chevleftpetdetail.png"
        alt=""
        className="petdetailcarousel__arrow petdetailcarousel__arrow--left"
      />
      <img
        src="/images/petdetailimg/image-1.png"
        alt="shiba"
        className="petdetailcarousel__mainimg"
      />
      <img
        src="/images/misc/chevrightpetdetail.png"
        alt=""
        className="petdetailcarousel__arrow petdetailcarousel__arrow--right"
      />
      <div className="petdetailcarousel__sideimg ">
        <img
          src="/images/petdetailimg/image-1.png"
          alt=""
          className="petdetailcarousel__sideimg__image petdetailcarousel__sideimg__image--special"
        />
        <img
          className="petdetailcarousel__sideimg__image"
          src="/images/petdetailimg/image-2.png"
          alt=""
        />
        <img
          className="petdetailcarousel__sideimg__image"
          src="/images/petdetailimg/image-3.png"
          alt=""
        />
        <img
          className="petdetailcarousel__sideimg__image"
          src="/images/petdetailimg/image-4.png"
          alt=""
        />
        <img
          className="petdetailcarousel__sideimg__image"
          src="/images/petdetailimg/image-5.png"
          alt=""
        />
        <img
          className="petdetailcarousel__sideimg__image petdetailcarousel__sideimg__image--lastimg"
          src="/images/petdetailimg/image-6.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default PetDetailCarousel;
