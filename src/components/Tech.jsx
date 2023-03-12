import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { technologies } from '../constants'
import { zoomIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const TechCard = ({ index, name, icon }) => {
  return (
    <Tilt className="xs:w-[200px] w-full">
      <motion.div
      variants={zoomIn(0.25 * index,0.75)}
      className="w-full blue-purple-gradient p-[1px] rounded-[15px] shadow-card background-glow"
      >
        <div
        options={{
          max:45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[15px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={name} className="w-18 h-20 object-contain" />
          <h3 className='text-white text-[14px] font-bold text-center'>{name}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}
const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What tech have I worked with?</p>
      <h2 className={styles.sectionHeadText}>Skills.</h2>
    </motion.div>
    <div className="mt-20 flex flex-wrap gap-8 items-center align-items justify-center">
      {technologies.map((technology, index) => (
        <div className="mt-8 flex flex-wrap gap-8 items-center align-items justify-center" key={technology.name}>
          <TechCard icon={technology.icon} index={index} {...technology} />
        </div>
      ))}
    </div>
    </>
  )
};

export default SectionWrapper(Tech, "");