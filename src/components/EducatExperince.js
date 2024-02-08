import React from 'react';
import { motion, useInView } from "framer-motion";
import "../index.css";
import { useRef } from "react";


const EducatExperince = () => {
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
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        ref={ref}
        
        className="my-2 w-full "
      >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
            <section className="py-24 lg:px-36 sm:px-4 relative flex justify-center" >
                <div className="flex lg:flex-row sm:flex-col justify-center  gap-20 ">
                    <div className="lg:w-[620px] md:w-[670px] sm:w-[338px] ">
                        <div className="section-title pb-11">
                            <h2 className="font-bold text-fadeMainTheme text-5xl">Education</h2>
                        </div>
                            <div className=" resume-box bg-[rgba( 255, 255, 255, 0.25 )] bg-opacity-25 bg-white shadow-lg rounded-2xl border border-opacity-18 border-white text-white">
                                <ul className="py-7 lg:px-7 sm:px-5 list-none">
                                    <li className="relative lg:px-20 md:px-6 sm:px-6 lg:pl-20 sm:pl-14 mb-7">
                                        <div className="icon w-10 h-10 absolute left-0 right-0  bg-white text-center z-10 border-2 border-dashed border-pink-400 rounded-full flex items-center justify-center">
                                            <i className="fas fa-user-graduate"></i>
                                        </div>
                                        <span className="time bg-orange-500 text-white text-xs px-3 py-1 inline-block mb-3 rounded-full font-semibold">2021 - Present</span>
                                        <h5 className="font-semibold text-green-500 mb-2">Lovely Professional University, Punjab</h5>
                                        <p className="text-lg">Pursuing Bachelor of Technology in Computer Science and Engineering from LPU</p>
                                    </li>
                                    <li className="relative lg:px-20 md:px-6 sm:px-6 lg:pl-20 sm:pl-14 mb-7">
                                        <div className="icon w-10 h-10 absolute left-0 right-0  bg-white text-center z-10 border-2 border-dashed border-pink-400 rounded-full flex items-center justify-center">
                                            <i className="fas fa-user-graduate"></i>
                                        </div>
                                        <span className="time bg-orange-500 text-white text-xs px-3 py-1 inline-block mb-3 rounded-full font-semibold">2019 - 2021</span>
                                        <h5 className="font-semibold text-green-500 mb-2">Vidya Niketan Jr. College, Amgaon(MH)</h5>
                                        <p className="text-lg">Went to VNJC for my 12th grade because it's known for its good education.</p>
                                    </li>
                                    <li className="relative lg:px-20 md:px-6 sm:px-6 lg:pl-20 sm:pl-14 mb-7">
                                        <div className="icon w-10 h-10 absolute left-0 right-0  bg-white text-center z-10 border-2 border-dashed border-pink-400 rounded-full flex items-center justify-center">
                                            <i className="fas fa-user-graduate"></i>
                                        </div>
                                        <span className="time bg-orange-500 text-white text-xs px-3 py-1 inline-block mb-3 rounded-full font-semibold">2016 - 2019</span>
                                        <h5 className="font-semibold text-green-500 mb-2">Adarsh Vidyalaya Amgaon, Amgaon(MH)</h5>
                                        <p className="text-lg">Enjoyed my childhood and did my class 10 from my hometown school.</p>
                                    </li>
                                </ul>
                            </div>
                    </div>
                        
                    <div className="lg:w-[620px] md:w-[670px] lg:py-[-40px] sm:w-[338px]">
                        <div className="section-title  pb-11">
                            <h2 className="font-bold text-fadeMainTheme text-5xl">Experience</h2>
                        </div>
                        <div className="resume-box bg-[rgba( 255, 255, 255, 0.25 )] bg-opacity-25 bg-white shadow-lg rounded-2xl border border-opacity-18 border-white text-white ">
                                <ul className="py-7 lg:px-7 md:px-6 sm:px-5 list-none">
                                    <li className="relative lg:px-20 sm:px-6 lg:pl-20 sm:pl-14 mb-7">
                                        <div className="icon w-10 h-10 absolute left-0 right-0  bg-white text-center z-10 border-2 border-dashed border-pink-400 rounded-full flex items-center justify-center">
                                            <i className="fas fa-briefcase"></i>
                                        </div>
                                        <span className="time bg-orange-500 text-white text-xs px-3 py-1 inline-block mb-3 rounded-full font-semibold">June-July '23</span>
                                        <h5 className="font-semibold text-green-500 mb-2">Summer Internship</h5>
                                        <p className="text-lg">Completed MERN Stack certificate from Cipher School</p>
                                    </li>
                                    
                                </ul>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
  )
}

export default EducatExperince