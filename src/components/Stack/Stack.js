import React from 'react';
import { DiFirebase,DiNodejsSmall, DiPhp, DiReact, DiWordpress,DiGitBranch} from 'react-icons/di';
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import "./../../styles/site.scss";


const Mystack = () => {
    return (
        <React.Fragment>
            

            <div className="Section">
            
     
     <br />
            <div className="SectionTitle">My Stacks</div>
    <div className="SectionText">
      I work with a range of stacks in the web design and mobile development space from front end to back end
    </div>
    <div className="List">

                                <div className="ListItem">
                                    <SiAdobexd color='white'  size='3rem'/>
                                    <SiAdobephotoshop  color='white' size='3rem'/>
                                    <SiAdobeillustrator color='white'  size='3rem'/>
                                    
                                    
                                    <div className="ListContainer">
                                    <div className="ListTitle">UI-UX Design</div>
                                    <div className="ListParagraph">
                                        Experienced with <br />
                                        Photoshop, Illustrator, Figma, XD <br />
                                        Coreldraw, Canva.
                                    </div>
                                    </div>
                                </div>

                                <div className="ListItem">
                                    <DiReact color='white' size='3rem'/>
                                    <DiWordpress color='white' size='3rem'/>
                                    <DiPhp color='white' size='3rem'/>
                                    
                                    <div className="ListContainer">
                                    <div className="ListTitle">Front-End</div>
                                    <div className="ListParagraph">
                                        Experienced with <br />
                                        React-js, Php, laravel, Wordpress <br />
                                        Kotlin, Flutter, Next-js, JS, Bootstrap. 
                                    </div>
                                    </div>
                                </div>

                                <div className="ListItem">
         <DiGitBranch color='white'size='3rem'/>
         <DiFirebase color='white' size='3rem'/>
         <DiNodejsSmall color='white' size='3rem'/>
         
         <div className="ListContainer">
         <div className="ListTitle">Back-End</div>
         <div className="ListParagraph">
             Experienced with <br />
             Node-js, MongoDB, Firebase, SQL <br />
              AWS, Cpanel, Git, Python 
           </div>
         </div>
       </div>
    </div>
    
  </div>
            
        </React.Fragment>
    )
}

export default Mystack;
