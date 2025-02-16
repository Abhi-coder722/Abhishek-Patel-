import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"
import { technologies } from "../constants"
import { useEffect, useState } from "react";


const Tech = () => {  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    // Add a listener for changes to the screen size
    const mediaQuery=window.matchMedia(
      '(max-width:500px)');
      // set the initial value of the 'ismobile' state variable
    setIsMobile(mediaQuery.matches);
    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) =>{
        setIsMobile(event.matches);
    }

    //Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    //Remove the listener when the component is unwanted 
    return () =>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
    },
      []
    );
  return (<>  {!isMobile&&  <div className="flex flex-row flex-wrap justify-center gap-10"
    >
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}

    </div>}</>

  )
}

export default SectionWrapper(Tech, "")