import { experienceData } from '@/assets/assets'
import React from 'react'
import { motion } from "motion/react"

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      viewport={{ once: true }}
      id='experience' className='w-full px-5 sm:px-10 md:px-[12%] py-10 scroll-mt-20'>

      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className='text-center mb-2 text-lg ovo-text'>My Journey</motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className='text-center text-5xl ovo-text'>Experience</motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 text-ovo'>Here is a brief overview of my professional experience and the roles I have taken on so far.</motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
        {experienceData.map((exp, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index}
            className='border border-gray-400 rounded-xl p-8 hover:bg-[var(--color-lightHover)] hover:shadow-[var(--box-shadow-black)] transition-all duration-300 flex flex-col justify-between'
          >
            <div>
              <h3 className='text-xl font-semibold text-gray-800 mb-1'>{exp.role}</h3>
              <div className='flex justify-between items-center mb-4 text-sm'>
                <span className='font-medium text-blue-600'>{exp.company}</span>
                <span className='text-gray-500 bg-gray-100 px-3 py-1 rounded-full'>{exp.duration}</span>
              </div>
              <p className='text-gray-600 text-sm leading-relaxed'>
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Experience
