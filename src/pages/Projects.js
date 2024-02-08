import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Cards from "../utils/Cards";
import { ProjectList } from "../utils/ProjectDetails";
import Title from "../utils/Title";

const Project = () => {
  const Labels = ["All", "Client", "Personal"];
  const [activeLabel, setActiveLabel] = useState(Labels[0]);
  const [projects, setProjects] = useState(ProjectList);
  const ref = useRef(null);
  const isInView = useInView(ref);


  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1 * 0.5,
      },
    },
  };


  return (
    <motion.div
      className="flex justify-center items-center flex-col p-2 mt-8 mx-auto"
      id="projects"
      initial="initial"
      animate="animate"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        ref={ref}
      >
        <Title text="Projects" styles=" mt-16 "/>
      </motion.div>
      <div
        className={`${
          projects.length > 2
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
            : "flex justify-center items-center"
        }
        mx-auto gap-4 mt-10`}
      >
        {projects?.map((project, index) => (
          <Cards
            imgSrc={project.image}
            title={project.name}
            projectKey={project.key}
            key={project.key}
            index={index}
            demoLink={project.demoLink}
            clientDemoLink={project.clientDemoLink}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Project;