import RegisterForm from "../components/sections/RegisterForm";

import "../styles/components/_footer.scss";

function Footer() {
  return (
    <div className="container footerbgcolor">
      <RegisterForm />
      <footer className="footer">
        <section className="footer__link">
          <ul className="flex-between">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Category</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </section>
        <section className="footer__socials">
          <ul className="flex-between">
            <li>
              <a href="">
                <img
                  src="/images/logo/Facebook.png"
                  alt="facebook"
                  className="socialmedia-icon"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/images/logo/Twitter.png"
                  alt="twitter"
                  className="socialmedia-icon"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/images/logo/Instagram.png"
                  alt="instagram"
                  className="socialmedia-icon"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/images/logo/YouTube.png"
                  alt="youtube"
                  className="socialmedia-icon"
                />
              </a>
            </li>
          </ul>
        </section>
        <div className="divider"></div>
        <section>
          <div className="flex-center flex-column">
            <img src="/images/logo/Logo.png" alt="" className="footer__logo" />
            <img
              src="/images/logo/Logo2.png"
              alt=""
              className="footer__logo--sub"
            />
          </div>

          <div className="termsconds">
            <ul className="flex-between">
              <li>
                <a href="">Terms of Service</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <h3 className="copyright">© 2022 Monito. All rights reserved.</h3>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
