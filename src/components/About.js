import React from "react";
import resume from "./Patricia_CV.pdf";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-40 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Patricia Yogi
          </h1>
          <p className="mb-8 leading-relaxed">
            An avid adventurous traveler and photography enthusiast
            <br />I also go by Back-End Developer or Full Stack Developer
          </p>
          <div className="flex justify-center">
            <a
              href="https://koalendar.com/e/meet-with-patricia-yogi/"
              target="_blank"
              data-target="#exampleModal"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Let's meet
            </a>
            <a
              href={resume}
              target="_blank"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Me"
            src="./foto.png"
          />
        </div>
      </div>
    </section>
  );
}
