import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="bg-neutral-100 py-4 flex flex-col md:flex-row">
      <Logo />
      <SlideTabs />
    </div>
  );
};

const Logo = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div
      style={{padding:"0.5rem 1rem ", marginBottom:"0.3rem",fontSize:"1.3rem"}}
      className="relative mx-auto flex w-fit rounded-full border-2   "
    >
      <h1 className="josefin-sans">GYM</h1>

      <Cursor position={position} />
    </div>
  );
};


const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 text-white  bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>
      
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      style={{color:"white"}}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full text-white bg-black md:h-12"
      
    />
  );
};

export default Navbar;