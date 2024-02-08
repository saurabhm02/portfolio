import { Link as ScrollLink } from "react-scroll";
import { animateScroll  } from 'react-scroll';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const SocialIcons = () => {

  
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex items-center space-x-7 my-5"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={iconVariants}
    >
      <motion.a
        href="https://www.linkedin.com/in/saurabhm02"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-2xl text-blue-600" />
      </motion.a>
      <motion.a
        href="https://github.com/saurabhm02"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-2xl text-gray-800 dark:text-white" />
      </motion.a>
      <motion.a
        href="https://www.instagram.com/saurabhm_01"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-2xl text-pink-500" />
      </motion.a>
      <motion.a
        href="https://twitter.com/SaurabhMah49487"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="text-2xl text-blue-400" />
      </motion.a>
    </motion.div>
  );
};
const Footer = () => {
  return (
    <footer className=" shadow bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-1 flex  items-center justify-between">
        <div className="flex justify-between items-center ">
            <div className="container flex items-center w-full h-full">
                <div className=" cursor-pointer no-underline text-3xl font-bold text-white items-center ">
                    Sau<span className="text-mainTheme text-4xl font-nunito">र</span>abh   
                </div>
            </div> 
        </div>
        <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center items-center mb-2 sm:hidden md:flex">
          © {new Date().getFullYear()}{" "}
            Saurabh Mahapatra
          . All Rights Reserved.
        </span> 
        <SocialIcons />    
      </div> 
      <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center items-center mb-2 lg:hidden md:hidden">
          © {new Date().getFullYear()}{" "}
            Saurabh Mahapatra
          . All Rights Reserved.
    </span>
    </footer>
  );
};

export default Footer;