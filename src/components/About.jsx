import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary  text-[17px] max-w-6xl leading-[30px]'
      >
        I am a web <b>  developer </b> with 2 years of experience in various technologies and tools such as HTML5, CSS3, JavaScript, Bootstrap, PHP, Python, Django, Figma, and Adobe XD. I have honed my skills through practical projects and have gained expertise in front-end development, back-end programming, and UI/UX design.
        During my time on Fiverr, I have successfully completed numerous projects, earning a level 2 status with a rating of 68 5-stars from satisfied clients. This indicates my dedication to delivering high-quality work and providing exceptional service to my clients.
        With my strong foundation in web development and proficiency in popular frameworks and design tools, I am well-equipped to create visually appealing and functional websites and web applications. I am passionate about staying up-to-date with the latest industry trends and technologies to ensure that my work meets modern standards.
        If you are looking for a skilled web developer who can bring your ideas to life, I am confident in my ability to deliver results that exceed your expectations.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
