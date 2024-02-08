import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BiMailSend } from "react-icons/bi";
import emailjs, { sendForm } from "@emailjs/browser";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Circles from "./circles";


const ContactForm = () => {
  const [msg, setMsg] = useState(null);
  const form = useRef();
  const ref = useRef();
  const successText = (
    <>
      <h1 className="text-center font-semibold text-lg md:text-xl">
        Message sent successfully{" "}
      </h1>
      <FaCheckCircle className="text-fadeMainTheme text-xl" />
    </>
  );

  const errorText = (
    <>
      <h1 className="text-center font-semibold text-lg md:text-xl">
        Message failed to send
      </h1>
      <FaTimesCircle className="text-red-500 text-xl" />
    </>
  );

  const isInView = useInView(ref, { once: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_pbx83km",
        "template_k3kykrq",
        form.current,
        "ZdaU7tRXMXaYtDz3r",
      );
      setMsg(successText);
      console.log("Message sent successfully");
      console.log(sendForm)
      form.current.reset();
    } catch (error) {
      console.error(error.text);
      console.log("error in contacty")
      form.current.reset();
      setMsg(errorText);
    }
  };


  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="overflow-hidden flex justify-center relative z-10 px-4 py-10  lg:w-[46%] sm:w-[100%] "
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      <motion.div
        className="container w-full"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        <motion.div
          className="flex flex-wrap lg:justify-between items-center  w-full"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
        >
          <motion.div
            className="w-full lg:px-14 sm:px-0"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
          >
            <motion.div
              className="bg-white relative rounded-xl px-10 py-6  shadow-lg border border-fadeMainTheme"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={variants}
            >
              <form ref={form} onSubmit={handleSubmit} className="lg:w-[415px] lg:h-[280px] sm:w-full">
                <div className="mb-4">
                  <input
                    type="text"
                    required
                    name="from_name"
                    placeholder="Your Name"
                    autoComplete="name"
                    className="w-full rounded-lg py-1 px-[14px] text-body-color text-base border outline-none focus-visible:shadow-none focus:border-primary"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    required
                    name="from_email"
                    autoComplete="email"
                    placeholder="Your Email"
                    className="w-full rounded-lg py-1 px-[14px] text-body-color text-base border outline-none focus-visible:shadow-none focus:border-primary"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Your Message"
                    className="w-full rounded-lg py-1 px-[14px] text-body-color text-base border resize-none outline-none focus-visible:shadow-none focus:border-primary"
                  />
                </div>
                <div className="w-full flex justify-center items-center text-xl">
                    <button className="relative inline-block text-lg group" >
                        <span className="relative z-10 block px-2 py-2 overflow-hidden font-medium leading-tight text-fadeMainTheme transition-colors duration-300 ease-out border-2 border-fadeMainTheme rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
                            <span className="absolute left-0 w-44 h-44  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-fadeMainTheme group-hover:-rotate-180 ease"></span>
                            <span className="relative flex gap-2 items-center justify-center  w-full">
                                Submit
                                <BiMailSend className="text-xl font-semibold" />
                            </span>
                        </span>
                        <span
                            className="absolute bottom-0 right-0  w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-fadeMainTheme rounded-lg group-hover:mb-0 group-hover:mr-0"
                            data-rounded="rounded-lg"
                        ></span>
                    </button>
                </div>
              </form>
              {msg && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full flex justify-center items-center mt-10 gap-5"
                >
                  {msg}
                </motion.div>
              )}
              <Circles/>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
