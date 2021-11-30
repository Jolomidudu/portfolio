import React, { Component } from "react";
import "./../../styles/site.scss";

class Myservices extends Component {
  render() {
    return (
        <React.Fragment>
          
          

           <div className="Section">
               
     
     <br />
     <div className="SectionTitle">My Services</div>
    {/* <div className="SectionText">
      I am into a wide range of Business technology services of which a few are Graphic Design,
       Web Development, Android/IOS app dev, Networking, Data Minning , Analytics &amp; a bit of Real estate.
    </div> */}
    <div className="List">
       <div className="ListItem">
         
         
         <div className="ListContainer">
           <div className="ListTitle">UI - UX Design </div>
           <div className="ListParagraph">
             Logo ₦ 10,000 <br />
             Posters ₦ 8k - 25k <br />
             Business Card ₦ 10,000 /100 cps <br />
             Flyers ₦ 10,000 /100cps <br />
             MockUp ₦ 10,000 /scope <br />
             3D Designs ₦ 70,000 /scope
           </div>
         </div>
       </div>

       <div className="ListItem">
         
         
       <div className="ListContainer">
       <div className="ListTitle">Web Development</div>
       <div className="ListParagraph">
            (Web design, domain, hosting, analytics, Google adsense, Web security, Mgmt) <br />
             Basic ₦ 140,000 <br />
             Business ₦ 160,000 <br />
             Finance ₦ 180,000 <br />
             Network Marketing ₦ 200,000 <br />
             Blog/Vlog ₦ 220,000 <br />
             Ecommerce ₦ 250,000 <br />
           </div>
         </div>
       </div>


       <div className="ListItem">
         
         
       <div className="ListContainer">
       <div className="ListTitle">Mobile App Development</div>
       <div className="ListParagraph">
             Android, IOS, Flutter<br />
             ( informative, School, Store, Church, Music, Charity, Business tool, health-care, Logistics &amp; more ) <br />
             Range <br />
             ₦ 220,000 - ₦ 3.2 Million

             
           </div>
         </div>
       </div>

    </div>
  
  </div> 
        

  </React.Fragment>
     );
    }
  }
    

export default Myservices;
