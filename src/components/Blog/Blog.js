import React from 'react';
import "./../../styles/site.scss";

const Myblog = () => {
    return (
        <React.Fragment>

           <div className="Section">
     
     <br />
     <div className="SectionTitle">My Blog</div>
    <div className="SectionText" style={{color:'rgba(248, 213, 161, 0.9)'}}>
      Welcome to My Blog, where I bring you quality jist about the latest trends in technology, food, lifestyles, fashion , events
      health care, fitness &amp; more.
    </div>
    <div className="SectionText">
     Have you ever been to the popular city of Lagos, Nigeria...Hey stop checking google Map, #eyes rolling #smiles, its a small city according to what the google map shows, but trust me it can contain half nigeria, its located far down the south west of Nigeria, every ethnic group is either living or doing business.
    </div>

            <img className="blogpics" src={'/images/Lagos3.jpg'} alt=""/> 
            
         
<div className="SectionText">
     Lagos is really a mindblowing territory, infact its an experience they dont teach you in school [Beeni] meaning "YES" in yoruba language. its a city that never sleeps.. filled with #business #Pleasure #Survival #Politics and more.
    </div>
  
  </div> 
        

  </React.Fragment>
    )
}

export default Myblog;
