import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      viewport={{ once: true }}
      id='work' className='w-full px-5 sm:px-10 md:px-[12%] py-10 scroll-mt-20'>

      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className='text-center mb-2 text-lg ovo-text'>My portfolio</motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className='text-center text-5xl ovo-text'>My latest Projects</motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 text-ovo'>Welcome to my Web Development portfolio! Explore a collection of projects showcasing my expertise in Frontend Development.</motion.p>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            key={index}
            className='bg-white border border-gray-400 rounded-xl overflow-hidden cursor-pointer hover:shadow-[var(--box-shadow-black)] duration-500 flex flex-col'
          >
            {/* Image Container */}
            <div className='relative w-full h-32 sm:h-40'>
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className='object-fit'
              />
            </div>

            {/* Content Container */}
            <div className='p-6 flex flex-col flex-1 justify-between'>
              <div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>{project.title}</h3>
                <p className='text-sm text-gray-600 leading-relaxed mb-4'>{project.description}</p>
              </div>

              <div className='flex items-center gap-2 text-sm font-medium text-black group'>
                View Project
                <Image
                  src={assets.right_arrow}
                  alt='arrow'
                  className='w-4 transition-transform duration-300 group-hover:translate-x-1'
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        // href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[var(--color-lightHover)] duration-500 '>
        href="#work" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[var(--color-lightHover)] duration-500'>
        Show more <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4' />
      </motion.a>
    </motion.div>
  )
}

export default Work
