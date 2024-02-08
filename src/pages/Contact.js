import { ContactAnimation } from "../assets/AssetsList";
import ContactForm from "../components/ContactForm";
import Title from "../utils/Title";
import Lottie from "lottie-react";

const Contact = () => {
  return (
    <section
      className="my-10 mt-20  flex justify-center items-center flex-col"
      id="contact"
    >
      <Title text="Contact" id="contact" />
      <div className=" flex justify-center items-center gap-5 flex-col-reverse lg:flex-row lg:px-16">
        <Lottie
            animationData={ContactAnimation}
            className="w-full h-full md:w-1/2   max-h-fit"
            />
        <ContactForm />
      </div>
      
    </section>
  );
};

export default Contact;