import React, { useState, useRef, useEffect } from 'react';
import { TimeLineData } from '../../constants/constants';
import { aboutImage } from '../../constants/aboutme';
import { FaHandPointUp } from "react-icons/fa";
import { VscArrowSwap } from "react-icons/vsc";
import "./../../styles/site.scss";


const TOTAL_CAROUSEL_COUNT = TimeLineData.length;




const Aboutme = () => {

    const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (window, left) => {
    return window.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);



    return (
        <React.Fragment>
          
          
            <div className="Section" >
            <div className="SectionTitle">About Me</div>
      {aboutImage.map(({ image }) => (
            <div className="LogCard"> 
           
            <img className="Imgg" src={image} alt=""/> 
            </div>
          ))}
      
      <div className="SectionText">I am Jolomi Dudu, a Data Analyst &amp; a Fullstack developer with a growth and energetic mindset.
           I develop web-mobile apps, create beautiful designs and render tech consulting for diversed 
           business market.</div>
           <div className="SectionText">I so love bringing ideas to life with tech, so if you got some?
             am happy to jump on it  &amp; deliver!!</div>

           

<div className="SectionTitle">Explore My Journey</div> 

           <div className="CarouselContainer" ref={carouselRef} onScroll={handleScroll}>
              <>
              {TimeLineData.map((item, index) => (
                <div className="CarouselMobileScrollWindow" key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
                    <div className="CarouselItem " index={index}
                      id={`carousel__item-${index}`}
                      active={activeItem}
                      onClick={(e) => handleClick(e, index)}>
                      <div className="CarouselItemTitle">
                        {item.year}
                        <div className="CarouselItemImg"
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <div className="linearGradient"
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </div>
                    </defs>
                  </div>
                      </div>
                      <div className="CarouselItemText">{item.text} </div>
                    </div>
                </div>

              ))}
              </>
           </div>

           <div className="SectionText">Swipe Above Journey <VscArrowSwap size="2rem" /><FaHandPointUp size="2rem" /></div> 

           <div className="CarouselButtons">
             {TimeLineData.map((item, index) => (
               <div className="CarouselButton" 
                key={index}
                index={index}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
                type="button"
               >
                 <div className="CarouselButtonDot" active={activeItem}></div>
               </div>
             ))}
           </div>
           
    </div>
            
        </React.Fragment>
    )
}

export default Aboutme;

