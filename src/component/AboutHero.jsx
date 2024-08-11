import { motion } from 'framer-motion'
import * as React from 'react'

function AboutHero() {
 
  return (
    <motion.div className='flex flex-wrap items-center gap-8 justify-center py-7 my-3 px-5 ' id='about'>
    <motion.div
      initial={{ y: -10 }}
      animate={{ y: 10 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <img src="/about-img.webp" alt="" className='shadow-md h-[20rem] lg:h-[29rem] lg:w-[29rem] w-[16rem] mt-6 object-cover  object-top' />
    </motion.div>
    <motion.div
      className='w-[29rem] h-[12rem] flex flex-col gap-2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      <h1 className='text-underline lobster-regular  text-[2rem] font-bold text-black josefin-sans'>Elevate your gyming experience with our awesome gyming equipment .</h1>
      <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Choose a plan
        </button>
    </motion.div>

  </motion.div>
  )
}

export default AboutHero