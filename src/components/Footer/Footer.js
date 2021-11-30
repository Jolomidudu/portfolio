import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineBehance, AiOutlineGithub } from "react-icons/ai";
import { FaAmazonPay } from "react-icons/fa";
import "./../../styles/site.scss";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="SocialIconsContainer">
        <div className="CompanyContainer">
          <div className="Slogan"> © Jolomi Dudu 2022</div>
        </div>
        <div className="SocialContainer">
        <a className="SocialIcons"  href="https://flutterwave.com/pay/jolomid" rel="noreferrer" target="_blank">
            <FaAmazonPay size="2rem" color="white" />
          </a>
          <a className="SocialIcons" href="https://www.behance.net/jolomidudu" rel="noreferrer" target="_blank">
            <AiOutlineBehance size="2rem" color="white" />
          </a>
          <a className="SocialIcons" href="https://github.com/Jolomidudu" rel="noreferrer" target="_blank">
            <AiOutlineGithub size="2rem" color="white" />
          </a>
          <a className="SocialIcons" href="https://wa.me/2348109166320" rel="noreferrer" target="_blank">
            <IoLogoWhatsapp size="2rem" color="white" />
          </a>
        </div>
      </div>
        </React.Fragment>
        
    )
}

export default Footer;
