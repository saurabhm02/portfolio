import {
    ECmomLogo,
    PortfolioLogo,
    WeatherAppLogo,
    NoteAppLogo,
  } from "../assets/AssetsList";
  
  export const ProjectList = [
    {
      key: 1,
      name: "Shoppika(E-commerce)",
      image: ECmomLogo,
      skills: ["ReactJS, ExpressJS, Tailwind, "],
      codeLink: "https://github.com/saurabhm02/Shoppika",
      demoLink: "https://shoppika.vercel.app",
      info: "Shoppika is an ecommerce gem, prioritizing user-friendliness and responsiveness. With React Router, it ensures seamless navigation and dedicates sections for cart and wishlist. Advanced filtering, pagination, and Framer Motion animations enhance the shopping experience. Firebase authentication adds security, while Tailwind CSS offers customization. Performance is optimized through React Query, and search functionality is refined for efficiency",
    },
    {
      key: 2,
      name: "EasyNote Hub(Note App)",
      image: NoteAppLogo,
      skills: ["ReactJS, Javascript, CSS"],
      codeLink: "https://github.com/saurabhm02/EasyNoteHub",
      demoLink: "https://easynotehub.vercel.app/",
      info: "EasyNoteHub is a user-friendly Note App created with React, known for its intuitive design and seamless functionality. It employs context providers for efficient data management and integrates React Router for smooth navigation. With localStorage integration, EasyNoteHub ensures that data is persistently stored, even after page refreshes, offering users a seamless experience",
    },
    {
      key: 3,
      name: "Personal Portfolio",
      image: PortfolioLogo,
      skills: ["React,React Router, CSS"],
      codeLink: "https://github.com/saurabhm02",
      demoLink: "https://saurabhm02.vercel.app",
      info: "I created a personal portfolio website using React JS, HTML, and CSS to showcase my projects, skills,[ and background.] The website serves as a platform for people to learn more about me and my professional accomplishments.My portfolio features information about my education, work experience, and technical skills,[ as well as a section highlighting my completed] projects. Overall, my portfolio serves as a valuable asset in advancing my career and achieving my professional goals.",
    },
    {
      key: 4,
      name: "Real Time Weather App",
      image: WeatherAppLogo,
      skills: ["HTML, Javascript, Open Weather API, CSS"],
      codeLink: "https://github.com/saurabhm02/Weather-App",
      demoLink: "https://weatherapp-saurabh.netlify.app",
      info: "I developed a real-time weather web application that is powered by the OpenWeatherAPI. The offers current and forecasted weather, including 24-hour details, air quality, UV index, sunrise/sunset, and moonrise/moonset times. The user-friendly interface ensures easy access to global weather information. Additionally, it features a dark mode for improved visibility during nighttime usage. EasyWeatherHub provides comprehensive weather insights for informed planning and decision-making.",
    },
  ];