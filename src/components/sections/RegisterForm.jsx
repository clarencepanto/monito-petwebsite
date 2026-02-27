import "../../styles/components/sections/_registerform.scss";

function RegisterForm() {
  return (
    <div className="registerform-positioning">
      <section className="registerform">
        <h1 className="registerform__title">
          Register Now So You Don't Miss Our Programs
        </h1>
        <div className="container">
          <div className="registerforminput__container ">
            <input
              type="text"
              className="input"
              placeholder="Enter your Email"
            />
            <button className=" btn--primarylarge">Subscribe Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterForm;
