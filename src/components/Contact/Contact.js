import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaAmazonPay } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import "./../../styles/site.scss";


const Mycontact = () => {
    return (
        <React.Fragment>
          
          
          
          <div className="FooterWrapper"> 
          
          <div className="ContactList" style={{fontSize:'25px'}}>Hello &amp; Welcome </div>
          <div className="ContactText"> You eager to get a project done ? </div>
          
          <div className="ContactList"><ol>
  <li><span>*</span> Web-app </li>
  <li><span>*</span> Mobile App </li>
  <li><span>*</span> Logo</li>
</ol></div>

<div className="ContactList"><ol>
  <li><span>*</span> 3D/Product Design </li>
  <li><span>*</span> Tech Support</li>
</ol></div>

          
      <div className="ContactText">Get in Touch (Monday - Saturday) 8:30 am - 6:30 pm GMT +1 </div>
      <div className="ContactText">Lekki, Lagos, Nigeria</div>

      <div class="LinkList">
        <div className="LinkColumn">
          <div className="LinkTitle">Call</div> 
          <a className="LinkItem" href="tel:234-810-916-6320"><FiPhoneCall size="2rem" /></a>
        </div>
        <div className="LinkColumn">
        <div className="LinkTitle">Email</div>
          <a className="LinkItem" href="mailto:info@jolomidudu.com">
            info@jolomidudu.com
          </a>
        </div>
        
      </div>
      <div className="SocialIconsContainer">
        <div className="CompanyContainer">
          <div className="Slogan"> © Jolomi Dudu 2021</div>
        </div>
        <div className="SocialContainer">
        <a className="SocialIcons"  href="https://flutterwave.com/pay/jolomid" rel="noreferrer" target="_blank">
            <FaAmazonPay size="2rem" color="white" />
          </a>
          <a className="SocialIcons" href="https://www.youtube.com/channel/UCCqxPm0IbkL_zg3Ugr8lstQ" rel="noreferrer" target="_blank">
            <AiOutlineYoutube size="2rem" color="white" />
          </a>
          <a className="SocialIcons" href="https://wa.me/2348109166320" rel="noreferrer" target="_blank">
            <IoLogoWhatsapp size="2rem" color="white" />
          </a>
        </div>
      </div>
      {/* <GoogleAd slot="394738798" timeout={1000} classNames="page-bottom" /> */}
    </div>   
            
        </React.Fragment>
    )
}

export default Mycontact;
