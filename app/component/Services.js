import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
    initial = {{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 1}}
     id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial = {{opacity:0, y: -20}}
      whileInView={{opacity:1, y: 0}}
      transition={{duration: 0.5, delay:0.3}}
      className='text-center mb-2 text-lg ovo-text'>What I offer</motion.h4>

      <motion.h2
      initial = {{opacity:0, y: -20}}
      whileInView={{opacity:1, y: 0}}
      transition={{duration: 0.5, delay:0.5}}
      className='text-center text-5xl ovo-text'>My Services</motion.h2>

      <motion.p 
      initial = {{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 0.5, delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 text-ovo'>I’m a passionate Frontend Developer who loves turning ideas into interactive and visually appealing web experiences. I enjoy working with HTML, CSS, JavaScript, and modern libraries like React to build clean, responsive, and user-friendly interfaces. Always eager to learn and grow, I believe great design begins with attention to detail and empathy for users.</motion.p>

      <motion.div
      initial = {{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 0.6, delay:0.9}}
       className='grid [grid-template-columns:var(--grid-template-columns-auto)] gap-6 my-10'>
        {serviceData.map(({icon, title, description, link},index)=>(
            <motion.div
            whileHover={{scale: 1.05}}
             key={index} className='border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-[var(--color-lightHover)] hover:-translate-y-1 duration-500 hover:shadow-[var(--box-shadow-white)]'>
             {/* key={index} className='border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-[var(--color-lightHover)] hover:-translate-y-1 duration-500 dark:hover:bg-[var(--color-darkHover)] hover:shadow-[var(--box-shadow-white)]'> */}
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700 '>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 '>{description}</p>
                {/* <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p> */}
                <a className='flex items-center gap-2 text-sm mt-5' href={link}>Read more <Image alt='' src={assets.right_arrow} className='w-4'/></a>
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
