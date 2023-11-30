import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I gratuaded in IT in 2004, and I've been in this field ever since. I
            became a polyglot programmer in languages such as Java, Javascript,
            SQL
          </p>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Please refer to my
          <a
            href="https://www.linkedin.com/in/patriciayogi/"
            target="_blank"
            className="m-1 text-white"
          >
            Linkedin
          </a>
          to find more details about my professional experience
        </p>
      </div>
    </section>
  );
}
