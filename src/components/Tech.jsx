import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { techimgoodwith, techimlearning, techiveused } from '../constants';
import { textVariant, zoomIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const TechCard = ({ title, technologies, delay }) => {
  return (
    <Tilt className="w-full">
      <motion.div
        variants={zoomIn(delay, 1)}
        className="h-full p-[1px] rounded-[15px] shadow-card background-glow"
        style={{ minHeight: '400px' }}
      >
        <div className="bg-tertiary h-full rounded-[15px] overflow-hidden">
          <div className="p-8">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="flex flex-col gap-4 h-full">
              {technologies.map((technology) => (
                <div
                  key={technology.name}
                  className="flex items-start gap-4 h-full"
                >
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-white text-base font-medium">
                    {technology.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What tech have I worked with?</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <TechCard
          title="Technologies I'm Experienced With"
          technologies={techimgoodwith}
          delay="0.5"
        />
        <TechCard
          title="Technologies I've Used"
          technologies={techiveused}
          delay="1"
        />
        <TechCard
          title="Technologies I Want to learn"
          technologies={techimlearning}
          delay="1.5"
        />
      </div>
    </>
  );
};


export default SectionWrapper(Tech, 'tech');
