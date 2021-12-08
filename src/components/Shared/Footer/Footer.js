import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="content">
          <div className="about">
            <h4 className="heading">About Us</h4>
            <p>
              <a href="#">App developmen</a>
            </p>
            <p>
              <a href="#">About company.com</a>
            </p>
            <p>
              <a href="#">Terms & Conditions</a>
            </p>
            <p>
              <a href="#">Accessibility Statement</a>
            </p>
          </div>
          <div className="links">
            <h4 className="heading">Quick links</h4>
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Blogs</a>
            </p>
            <p>
              <a href="#">Contact</a>
            </p>
          </div>
          <div className="social-media">
            <h4 className="heading">Social</h4>
            <p>
              <a href="https://www.linkedin.com/in/sanket-bodke-995b5b205/">
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
            </p>
            <p>
              <a href="https://twitter.com/Sanket46171296">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </p>
            <p>
              <a href="https://github.com/sanketbodke">
                <i className="fab fa-github"></i> Github
              </a>
            </p>
            <p>
              <a href="https://codepen.io/sanketbodke">
                <i className="fab fa-codepen"></i> Codepen
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/imsanketbodke/?hl=en">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </p>
          </div>

          <div className="details">
            <h4 className="heading">Address</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Cupiditate, qui!
            </p>
            <p>
              Mobile: <a href="#">+9112233445</a>
            </p>
            <p>
              Email : <a href="#">abcdef@gmail.com</a>
            </p>
          </div>
        </div>
        <footer>
          <hr />
          <h6> &copy; 2021 ABCDEF industries Ltd</h6>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
