import { AboutAnimation } from "../assets/AssetsList";
import LottieAnimationCard from "../utils/LottieAnimationCard";
import Title from "../utils/Title";
import { ImPointRight } from "react-icons/im";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import EducatExperince from "../components/EducatExperince";

const About = () => {
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
  const AboutTitle = (
    <h1 className="font-bebas-neue text-4xl text-white pb-6 ">
      Let <strong className="text-fadeMainTheme"> Me </strong>Introduce 
      <strong className="text-fadeMainTheme"> Myself</strong> 
    </h1>
  );
  return (
    <section id="about" className="flex flex-col justify-start items-center mt-16">
      <Title text={AboutTitle}  styles=" mt-16 " />
     
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        ref={ref}
        className="my-2 w-full flex lg:flex-row md:flex-col sm:flex-col lg:justify-around  items-center lg:px-20 md:px-14 sm:px-8"
      >
        <div className="flex flex-col justify-start text-xl text-white">
            <p className="text-white">
                Hi Everyone, I am <span className="text-fadeMainTheme">Saurabh </span>
                from <span className="text-fadeMainTheme"> Maharashtra, India.</span>
                <br />I am a pursuing Btech CSE.
                <br />
                <br />
            </p>
            <p className="home-about-body">
                I've fallen in love with coding, and I've learned quite a bit, I think... 🤷‍♂️
                <br />
                I'm good at languages like 
                <i className="text-fadeMainTheme"> C++, Javascript.
                    
                </i>
                <br />
                <br/>
                I'm thrilled about creating cool things using 
                with <i className="text-fadeMainTheme">Node.js</i> and
                <i>
                    <i className="text-fadeMainTheme">
                    {" "}
                    Node.js and
                    diving into the exciting world of JavaScript framework
                    </i>
                </i>
                &nbsp; like
                <i>
                    <i className="text-fadeMainTheme"> React.js</i>
                </i>
                
            </p>
            <ul className="text-white">
            <br />
            Apart from coding, some other activities that I love to do!
                <li className="flex gap-2 items-center text-green-400  ">
                    <ImPointRight className=" text-fadeMainTheme "/>Playing Games
                </li>
                <li className="flex gap-2 items-center text-green-400">
                    <ImPointRight className="text-fadeMainTheme" /> Photography
                </li>
            </ul>
        </div>

    
        <LottieAnimationCard AnimationSrc={AboutAnimation} />

        
      </motion.div>
      
        <EducatExperince />

      


    </section>
  );
};

export default About;