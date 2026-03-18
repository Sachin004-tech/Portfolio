import { assets,certificates } from "@/assets/assets";
import { motion } from "motion/react"
import Image from "next/image";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 text-center">
      <h2 className="text-3xl font-bold">Certificates</h2>
    <div className="gird gap-6 grid grid-flow-col grid-rows-4">

        {certificates.map((project, index)=>(
                    <motion.div
                    
              whileHover={{scale: 1.05}}
              transition={{duration: 0.3}}
                    key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                            <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                        </div>
                        </div>
                    </motion.div>
                ))}
        
    </div>
    </section>
  );
}
