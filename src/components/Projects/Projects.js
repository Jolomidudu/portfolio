import React, { Component } from "react";
import { data } from '../../constants/myprojects';
import { myapps } from '../../constants/myapps';
import { mydesign} from '../../constants/mydesign';
import "./../../styles/site.scss";


class Myprojects extends Component {
    render() {
      return (
        <React.Fragment>
         
         
        <div className="Sectiona" >
            <div className="SectionaTitle">
                My Recent Projects

            </div>
            <div className="Papa">

 
 <a className="Pikin" href="#webapp"> Web-Apps </a>
   <a className="Pikin" href="#mobileapp"> Mobile Apps </a>
   <a className="Pikin" href="#design"> Designs </a>

   
 </div>
            

            <div id="webapp">
                
            </div>
            <br/>
            <br/>

            <div style={{color:'white', fontSize: '20px'}}>
                WEBSITE PROJECTS
            </div>
            <div className="Boxes"> 
            {data.map(({ index, image, title, visit }) => (
            <div className="Box" key={index}> 

                 <img src={image} alt=""/>
                 
                <h3 className="HeaderThree" title>{title}</h3>
               
                 <a className="ProjectLinks" href={visit} rel="noreferrer" target="_blank">
                    View Project
                 </a>

            </div>
          ))}



            </div>




            <div id="mobileapp">
               
            </div>
            <br/>
            <br/>

            <div style={{color:'white', fontSize: '20px'}}>
               MOBILE APPS PROJECTS
            </div>

            <div className="Boxes">  
            {myapps.map(({ index, image, title, visit }) => (
            <div className="Box" key={index}> 

                 <img src={image} alt=""/>
                 
                <h3 className="HeaderThree" title>{title}</h3>
               
                 <a className="ProjectLinks" href={visit} rel="noreferrer" target="_blank">
                    View App
                 </a>

            </div>
          ))}



            </div>


            <div id="design">
               
            </div>
            <br/>
            <br/>

            <div style={{color:'white', fontSize: '20px'}}>
               DESIGN PROJECTS
            </div>
            <div className="Boxes">  
            {mydesign.map(({ index, image, title, visit }) => (
            <div className="Box" key={index}> 

                 <img src={image} alt=""/>
                 
                <h3 className="HeaderThree" title>{title}</h3>
               
                 <a className="ProjectLinks" href={visit} rel="noreferrer" target="_blank">
                    View Design
                 </a>

            </div>
          ))}



            </div>
            
        </div>
        </React.Fragment>
     );
    }
  }

export default Myprojects;
