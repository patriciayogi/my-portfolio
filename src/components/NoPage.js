import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

export default function NoPage() {

  return (
    <section id="nopage">
    <div className="container px-5 py-10 mx-auto">
      <div className="text-center mb-20">
        <ExclamationCircleIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
         Oops
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
         Page not found
        </p>
      </div>      
    </div>
  </section>
  );
}