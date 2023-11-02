import React from 'react';
import {Tilt} from 'react-tilt';
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
{/* fadeIn is a utility function defined in the "../utils/motion" 
module. It generates the animation variants for fading in an element. 
The function takes four parameters: direction, easing, delay, and duration.
These parameters control the direction of the fade animation, 
the easing function to be used, the delay before the animation starts,
and the duration of the animation, respectively. The fadeIn function returns an object  */}

      <div options={{
        max: 45,
        scale: 1,
        speed: 459
      }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />

        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

      </div>

    </motion.div>
  </Tilt>
  // Tilt enables a tilting effect on its child components based on 
  // mouse movement. The Tilt component wraps the 
  //content within it and applies the tilting effect to that content.
}


const About = () => {
  return (
    <>
    {/* Variants define different states of an animation, such as initial, animate, and 
    exit. They allow you to specify different properties and values to animate. In the 
    code, the variants object is used to define the animation variants for different 
    elements in the component. For example, the textVariant function returns the variants 
    for animating text elements. */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>

      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a technology-driven student and a Junior Software Developer|Consultant with a strong programming
        background in Python and TypeScript. Alongside Python, I am also well acquainted
        with TypeScript, JavaScript, HTML5, CSS, C, C++, and Java.
        Working on different projects, I am updated with front-end modules such as
        MUI,NodeJS and ReactJS in JavaScript and Pandas, openai, CV and Numpy in Python.
        I am also updated with e2e testing using the Playwright framework, storybook and Git.
        I am a quick learner and collaborate closely with people to create efficient,
        scalable and user-friendly solutions that solve real world problems.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        )

        )}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")