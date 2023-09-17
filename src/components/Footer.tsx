import "@/assets/css/Footer.css";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer>
        <section className="footer__section__1">
          <div>
            <div className="container__footer__1">
              <div>
                <h1>ARSHA</h1>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022 United States <br />
                </p>
                <p>
                  <strong>Phone:</strong> +1 5589 55488 55 <br />
                  <strong>Email:</strong> info@example.com
                </p>
              </div>
            </div>
            <div className="container__footer__2">
              <div>
                <h2>Useful Links</h2>
                <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Services</li>
                  <li>Term of service</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
            <div className="container__footer__3">
              <div>
                <h2>Our Services</h2>
                <ul>
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>Product Management</li>
                  <li>Marketing</li>
                  <li>Graphic Design</li>
                </ul>
              </div>
            </div>
            <div className="container__footer__4">
              <div>
                <h2>Our Social Networks</h2>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra videa
                  magna derita valies
                </p>
                <div>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer__section__2">
          <div style={{ height: "18px" }}>
            <p>
              © Copyright <strong>Arsha.</strong> All Rights Reserved
            </p>
          </div>
          <div style={{ height: "18px" }}>
            <p>
              Designed by <span>BootstrapMade</span>
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
