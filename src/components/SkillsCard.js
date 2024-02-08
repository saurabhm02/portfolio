import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillsCard = ({ icon: Icon, name, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      rotateY: 10,
      boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Define function to get icon text color based on name
  const getIconTextColor = () => {
    switch (name) {
        case "C++":
            return "text-blue-800";
        case "JavaScript":
            return "text-yellow-600";
        case "React":
            return "text-blue-900";
        case "Node.js":
            return "text-green-500";
        case "MongoDB":
            return "text-green-900";
        case "Express.js":
            return "text-green-800"; 
        case "Tailwind CSS":
            return "text-teal-500";
        case "Firebase":
            return "text-red-500";
        case "Linux":
            return "text-black";
        case "Visual Studio Code":
            return "text-blue-500";
        case "Postman":
            return "text-orange-400";
        case "Sublime Text":
            return "text-yellow-600";
        case "GitHub":
            return "text-gray-900";
        default:
            return "text-white";
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`flex justify-center items-center flex-col border border-gray-500 bg-gray-200 rounded-3xl lg:w-44 md:w-40 sm:w-36 lg:m-10 hover:shadow-md lg:h-44 md:h-40 sm:h-36 `}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      whileHover={hoverVariants}
    >
      <picture className="flex justify-center items-center p-12">
        <motion.div
          className="w-12/12 h-11/12"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Icon className={`w-24  h-36 bg-[rgba(255, 255, 255, 0.972)] ${getIconTextColor()}`} /> 
        </motion.div>
      </picture>
    </motion.div>
  );
};

export default SkillsCard;
