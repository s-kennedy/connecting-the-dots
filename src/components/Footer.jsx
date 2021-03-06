import React from "react";
import logo from "../assets/images/icon.png";
import AccountButton from './navigation/AccountButton'

const Footer = props => {
  return (
    <footer className="wow fadeIn bg-white border-top">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <div className="text-center">
                <a className="inner-link" href="#home">
                  <img src={logo} alt="Black History Ottawa" />
                </a>
              </div>
              <span className="text-small alt-font text-uppercase margin-two margin-lr-auto display-block letter-spacing-1 black-text">
                Connecting the Dots
              </span>
            </div>
            <div className="col-md-12 col-sm-12 text-center margin-four no-margin-lr no-margin-bottom xs-margin-fifteen xs-no-margin-lr xs-no-margin-bottom">
              <div className="footer-social">
                <a href="https://www.facebook.com/groups/220005041901992/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook" />
                </a>
                <a href="https://twitter.com/Project_CtD" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter" />
                </a>
                <a href="https://www.instagram.com/project_ctd/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/connecting-the-dots-00a0a4169/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <span className="text-small text-uppercase letter-spacing-1">
                © 2018 Connecting the Dots
              </span>
            </div>
            <div className="col-xs-6 align-right">
              <AccountButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
