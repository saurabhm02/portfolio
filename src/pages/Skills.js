import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiSublimetext,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import Title from "../utils/Title";
import SkillsCard from "../components/SkillsCard";
import GitHubStreak from "../components/GithubStreak";

const Skills = () => {
  const techdata = [
    { icon: CgCPlusPlus, name: "C++" },
    { icon: DiJavascript1, name: "JavaScript" },
    { icon: DiReact, name: "React" },
    { icon: DiNodejs, name: "Node.js" },
    { icon: DiMongodb, name: "MongoDB" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiExpress, name: "Express.js" },
  ];

  const toolsData = [
    { icon: SiLinux, name: "Linux" },
    { icon: SiVisualstudiocode, name: "Visual Studio Code" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiSublimetext, name: "Sublime Text" },
    { icon: VscGithub, name: "GitHub" },
  ];

  const Skillstext = (
    <h1 className="font-bebas-neue text-4xl text-white pb-6 ">
      <strong className="text-fadeMainTheme">Skillset</strong> Define{" "}
      Our <strong className="text-fadeMainTheme">Potential</strong>
    </h1>
  );
  const ToolsText = (
    <h1 className="font-bebas-neue text-4xl text-white pb-6 ">
      <strong className="text-fadeMainTheme">Tools</strong> Unleash{" "}
      Our <strong className="text-fadeMainTheme">Efficiency</strong>
    </h1>
  )

  return (
    <div className="my-20 flex justify-center items-center flex-col">
      <Title text={Skillstext} id="skills" />
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mt-10 px-10 lg:ml-10 lg:w-10/12 max-w-fit">
        {techdata.map((item, index) => (
          <SkillsCard icon={item.icon} name={item.name} index={index} key={index} />
        ))}
      </div>
      <Title text={ToolsText} id="skills" />
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mt-10 px-10 lg:ml-10 lg:w-10/12 max-w-fit">
        {toolsData.map((item, index) => (
          <SkillsCard icon={item.icon} name={item.name} index={index} key={index} />
        ))}
      </div>
      <div className="flex justify-center items-center flex-col my-20 mb-2">
        <GitHubStreak/>
      </div>
    </div>
  );
};

export default Skills;
