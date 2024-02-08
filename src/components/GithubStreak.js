import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import Title from "../utils/Title";
import { useRef } from "react";

const GitHubStreak = () => {
  const TitleText = (
    <h1 className=" font-bebas-neue text-4xl sm:px-8  text-white pb-6">
      Building Blocks of <strong className="text-fadeMainTheme">Consistency</strong>
    </h1>
  );
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const githubVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="flex justify-center items-center flex-col text-fadeMainTheme lg:px-5 md:px-20 sm:px-20 lg:w-full md:w-full sm:w-11/12 ">
      <Title text={TitleText} id={1} styles="px-44 " />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="lg:w-full md:w-7/12 sm:w-4/12"
      >
        <motion.div variants={githubVariants}
          className=""
        >
          <GitHubCalendar
            username="saurabhm02"
            blockSize={15}
            fontSize={10}
            blockMargin={5}
            theme={{
              light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
              dark:["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GitHubStreak;