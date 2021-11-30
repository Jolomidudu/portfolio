import React, { Component } from "react";
import { IoIosLaptop } from "react-icons/io";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { RiPencilRuler2Line } from "react-icons/ri";
import "./../../styles/site.scss";



  
class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        
        
        <div className="Section" >

        

        <div className="LeftSection">
        

            <div className="SectionTitle" main center>
                       
                               <div className="LogCard"> 
                               <img className="imgi" src={'/images/pop9.jpg'} alt="Aboutme" />
                               
                               </div>
                          
                           Hello there ! <br /> 
                           I am  <span style={{color:'black'}}>Jolomi DUDU</span> <br /> <br />
                           Web Designer <IoIosLaptop color="white" size="2rem"/> <br /> Mobile App Dev 
                           <HiOutlineDeviceMobile color="white" size="2rem" /> <br />
                           UI-UX Designer <RiPencilRuler2Line color="white" size="2rem"/> <br />
   
           </div>

 <div className="Papa">

 
 <a className="Pikin" href="/services"> Lets Begin </a>
   <a className="Pikin" href="/projects"> My Projects </a>
   <a className="Pikin" href="/contact"> Contact Me </a>


   
   
 </div>
 
</div>

</div>


</React.Fragment>  

    );
  }
}
  

export default Hero;

