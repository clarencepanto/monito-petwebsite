import "../../styles/components/sections/_petdetails.scss";
import NavigationRef from "../sections/NavigationRef";
import PetDetailCarousel from "./PetDetailCarousel";

function PetDetails() {
  return (
    <div>
      <div className="petcontmain">
        <PetDetailCarousel />
        <div className="container  petdetails-cont">
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
              <section>
                <div className="grid divider-pdetails">
                  <h4 className="petdetails__infokey">SKU</h4>
                  <p className="petdetails__valuekey">: #1000078</p>
                </div>
                <div className="grid divider-pdetails">
                  <h4 className="petdetails__infokey">Gender</h4>
                  <p className="petdetails__valuekey">: Female</p>
                </div>
                <div className="grid divider-pdetails">
                  <h4 className="petdetails__infokey">Age</h4>
                  <p className="petdetails__valuekey">: 2 months</p>
                </div>
                <div className="grid divider-pdetails">
                  <h4 className="petdetails__infokey">Size</h4>
                  <p className="petdetails__valuekey">: Small</p>
                </div>
                <div className="grid divider-pdetails">
                  <h4 className="petdetails__infokey">Color</h4>
                  <p className="petdetails__valuekey">: Appricot & Tan</p>
                </div>
                <div className="grid divider-pdetails">
                  <h4 className="petdetails__infokey">Vaccinated</h4>
                  <p className="petdetails__valuekey">: Yes</p>
                </div>
                <div className="grid divider-pdetails">
                  <h4 className="petdetails__infokey">Dewormed</h4>
                  <p className="petdetails__valuekey">: Yes</p>
                </div>
                <div className="grid divider-pdetails">
                  <h4 className="petdetails__infokey">Cert</h4>
                  <p className="petdetails__valuekey">: Yes(MKA)</p>
                </div>
                <div className="grid divider-pdetails">
                  <h4 className="petdetails__infokey">Microchip</h4>
                  <p className="petdetails__valuekey">: Yes</p>
                </div>
                <div className="grid divider-pdetails">
                  <h4 className="petdetails__infokey">Location</h4>
                  <p className="petdetails__valuekey">: Vietnam</p>
                </div>
                <div className="grid divider-pdetails">
                  <h4 className="petdetails__infokey">Publisehd Date</h4>
                  <p className="petdetails__valuekey">: 12-Oct-2022</p>
                </div>
                <div className="grid divider-pdetails">
                  <h4 className="petdetails__infokey">
                    Additional Information
                  </h4>
                  <p className="petdetails__valuekey">
                    : Pure breed Shih Tzu. Good body structure. With MKA cert
                    and microchip. Father from champion lineage
                  </p>
                </div>
              </section>
              <section className="guarantee-cont">
                <div className="flex-row gap10 flex-align-elements">
                  <img
                    src="/images/petdetailimg/image-9.png"
                    alt=""
                    className="petdetailpromiselogo"
                  />
                  <h3 className="guarantee-text">
                    100% health guarantee for pets
                  </h3>
                </div>
                <div className="flex-row flex-align-elements gap10">
                  <img
                    src="/images/petdetailimg/image-10.png"
                    alt=""
                    className="petdetailpromiselogo"
                  />
                  <h3 className="guarantee-text">
                    100% guarantee of pet identification
                  </h3>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
      <section className="petdetail__testimonial__cont">
        <h2 className="p1-bottom">Our lovely customer</h2>

        <div className="grid gap10 p1-bottom petdetail__testimonialdetail">
          <img
            src="/images/petdetailimg/image-7.png"
            alt=""
            className="petdetailcustomerimg"
          />
          <img
            src="/images/petdetailimg/image-8.png"
            alt=""
            className="petdetailcustomerimg--halfimg"
          />
        </div>
        <div className="flex-row flex-center gap5 ">
          <div className="rectangle-petdetailnav"></div>
          <div className="circle-petdetailnav"></div>

          <div className="circle-petdetailnav"></div>
          <div className="circle-petdetailnav"></div>
          <div className="circle-petdetailnav"></div>
          <div className="circle-petdetailnav"></div>
        </div>
      </section>
    </div>
  );
}

export default PetDetails;
