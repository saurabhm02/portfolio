import { motion, useInView } from "framer-motion";
import Button from "../utils/Button";
import LottieAnimationCard from "../utils/LottieAnimationCard";
import { HeroAnimation } from "../assets/AssetsList";
import { HiOutlineDownload } from "react-icons/hi";
import { useRef } from "react";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cvLink = process.env.REACT_APP_RESUME_LINK;


  const handleDownload = () => {
    console.log('Download button clicked!');
    window.open(cvLink, '_blank');
  };
  
  return (
    <main className="relative my-4 overflow-hidden bg-gray-800 lg:pt-20 md:pt-16 sm:pt-12 " id="home">
      <motion.div
        ref={ref}
        className="relative z-20 flex items-center overflow-hidden "
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="container relative flex lg:px-6  mx-auto justify-between flex-col md:flex-col lg:flex-row ">
          <motion.div
            className="relative z-20 flex flex-col lg:w-2/5 sm:w-full justify-center  items-start md:gap-3 mx-auto"
            variants={textVariants}
          >
            <p className="flex flex-col font-black leading-none text-white uppercase font-bebas-neue md:text-9xl dark:text-white">
              <span className="text-fadeMainTheme lg:text-8xl md:text-6xl sm:text-4xl"> Coding </span>
              <span className="text-7xl md:text-5xl sm:text-3xl">Dreams into Reality</span>
            </p>
            <p className="text-white text-2xl md:px-3 mt-2">
              Building Tomorrow's Digital World Today
            </p>
            <motion.div variants={buttonVariants} className="flex mt-8 md:px-3">
              <Button
                btnText="Download CV"
                btnIcon={<HiOutlineDownload className="lg:text-2xl md:text-2xl sm:text-xl" />}
                handleOnClick={handleDownload}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex lg:justify-end justify-center items-center my-2  md:mt-0 pb-4"
            variants={textVariants}
          >
            <LottieAnimationCard AnimationSrc={HeroAnimation} />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
};

export default Home;