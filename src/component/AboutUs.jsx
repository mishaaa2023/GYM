import React from 'react';
import { aboutdata } from '../data/data';
import {motion } from "framer-motion"


const  AboutUs = () => {
  return (
    <>
    <h1 className='mt-5 text-center  text-4xl josefin-sans'>What you'll get</h1>
    <section className='flex flex-wrap p-3 gap-5 items-center justify-around mt-7'>
      
      {
          aboutdata.map(({img,title,content ,id})=>{
            return(
              <motion.div 
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className=" shadow-md rounded-lg overflow-hidden w-[35rem]   bg-indigo-500"key={id}>
    <img
      className="w-full sm:h-64 object-cover"
      src={img}
      alt={img}
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-white text-center lobster-two-bold josefin-sans">{title}</h2>
      <p className="text-white mt-2 text-center josefin-sans">
        {content }
      </p>
      <div className="mt-4">
       
      
      </div>
    </div>
  </motion.div>
            )
          })
      }
  </section>
    </>
  );
};

export default AboutUs;