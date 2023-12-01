import { ArrowRightIcon } from "@heroicons/react/solid";
import { Outlet, Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <Link to="/">Patricia Yogi</Link>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a
              href="https://www.linkedin.com/in/patriciayogi/"
              target="_blank"
              className="mr-5 hover:text-white"
            >
              Linkedin
            </a>

            <a
              href="https://github.com/patriciayogi"
              target="_blank"
              className="mr-5 hover:text-white"
            >
              Github
            </a>
            <a
              href="https://koalendar.com/e/meet-with-patricia-yogi/"
              target="_blank"
              className="mr-5 hover:text-white"
            >
              Book a meeting
            </a>
            <a href="#skills">Skills</a>
            {/* <Link to="/skills" className="mr-5 hover:text-white">Skills</Link> */}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Contact
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
        <Outlet />
      </header>
    </main>
  );
}
