import "../../styles/components/sections/_petdetails.scss";
import NavigationRef from "../sections/NavigationRef";

function PetDetails() {
  return (
    <div className="container petdetails-cont">
      <section className="petdetails">
        <div className="flex-center">
          <img
            src="/images/misc/darkline.png"
            alt=""
            className="petdetails-darklineimg"
          />
        </div>
        <NavigationRef
          variant="petdetails"
          a="Home"
          b="Dog"
          c="Large Dog"
          d="Shiba Inu Sepia"
        />

        <section>
          <h2 className="petdetails__petname">Shiba Inu Sepia</h2>
          <p className="petdetails__petprice">35.000.000 VND</p>
          <div className="flex flex-row ">
            <button className="btn">Contact us</button>
            <button className="btn--transparentlarge btnpetdetails-special">
              <img
                src="/images/misc/chatbox.png"
                alt=""
                className="petdetails__buttonchatbox"
              />
              Chat with Monito
            </button>
          </div>
        </section>
        <div className="flex-between p1-top">
          <h3 className="petdetails__infotitle">Information</h3>
          <div className="flex-row gap10">
            <img
              src="/images/misc/Share_Android.png"
              alt=""
              className="petdetails__sharebtnimg"
            />
            <h3 className="petdetails__sharebtn">Share</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PetDetails;
