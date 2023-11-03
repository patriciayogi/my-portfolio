import React from "react";

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
              <br  />
              I also go by Back-End Developer or Full Stack Developer
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  data-target="#exampleModal"
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Let's connect
                </a>
               {/*  <a
                  href="#projects"
                  data-toggle="modal"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a> */}
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./foto.png"
              />
            </div>
          </div>

        </section>
      );

}